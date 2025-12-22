const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Mock JWT token generator
const generateToken = (user) => {
  return 'mock-jwt-token-' + user.id + '-' + Date.now();
};

// User Login: POST /api/users/login
server.post('/api/users/login', (req, res) => {
  const { account, password } = req.body;
  const db = router.db;
  const user = db.get('users').find({ account, password }).value();
  
  if (!user) {
    return res.status(401).json({
      status: 'error',
      message: 'Invalid account or password!'
    });
  }
  
  if (user.role === 'admin') {
    return res.status(403).json({
      status: 'error',
      message: 'Account does not exist!'
    });
  }
  
  const { password: _, ...userWithoutPassword } = user;
  res.json({
    status: 'success',
    data: {
      token: generateToken(user),
      user: userWithoutPassword
    }
  });
});

// User Signup: POST /api/users
server.post('/api/users', (req, res) => {
  const { account, name, email, password, checkPassword } = req.body;
  const db = router.db;
  
  if (password !== checkPassword) {
    return res.status(400).json({
      status: 'error',
      message: 'Passwords do not match!'
    });
  }
  
  const existingUser = db.get('users').find({ account }).value();
  if (existingUser) {
    return res.status(400).json({
      status: 'error',
      message: ['Account already exists']
    });
  }
  
  const newUser = {
    id: Date.now(),
    account,
    name,
    email,
    password,
    avatar: 'https://i.pravatar.cc/150?img=' + Math.floor(Math.random() * 70),
    background: 'https://picsum.photos/seed/' + account + '/600/200',
    introduction: '',
    role: 'user',
    tweetCount: 0,
    followerCount: 0,
    followingCount: 0
  };
  
  db.get('users').push(newUser).write();
  
  const { password: _, ...userWithoutPassword } = newUser;
  res.status(201).json({
    status: 'success',
    data: {
      token: generateToken(newUser),
      user: userWithoutPassword
    }
  });
});

// Admin Login: POST /api/admin/users
server.post('/api/admin/users', (req, res) => {
  const { account, password } = req.body;
  const db = router.db;
  const user = db.get('users').find({ account, password, role: 'admin' }).value();
  
  if (!user) {
    return res.status(401).json({
      status: 'error',
      message: 'Invalid account or password!'
    });
  }
  
  const { password: _, ...userWithoutPassword } = user;
  res.json({
    status: 'success',
    data: {
      token: generateToken(user),
      user: userWithoutPassword
    }
  });
});

// Get all users (admin): GET /api/admin/users
server.get('/api/admin/users', (req, res) => {
  const db = router.db;
  const users = db.get('users').filter(u => u.role !== 'admin').value();
  res.json(users.map(({ password, ...user }) => user));
});

// Get all tweets (admin): GET /api/admin/tweets
server.get('/api/admin/tweets', (req, res) => {
  const db = router.db;
  const tweets = db.get('tweets').value();
  res.json(tweets);
});

// Delete tweet (admin): DELETE /api/admin/tweets/:id
server.delete('/api/admin/tweets/:id', (req, res) => {
  const db = router.db;
  const id = parseInt(req.params.id);
  db.get('tweets').remove({ id }).write();
  res.json({ status: 'success', message: 'Tweet deleted' });
});

// Get all tweets: GET /api/tweets
server.get('/api/tweets', (req, res) => {
  const db = router.db;
  const tweets = db.get('tweets').orderBy('createdAt', 'desc').value();
  res.json(tweets);
});

// Get single tweet: GET /api/tweets/:id
server.get('/api/tweets/:id', (req, res) => {
  const db = router.db;
  const id = parseInt(req.params.id);
  const tweet = db.get('tweets').find({ id }).value();
  if (!tweet) {
    return res.status(404).json({ status: 'error', message: 'Tweet not found' });
  }
  res.json(tweet);
});

// Get tweet replies: GET /api/tweets/:id/replies
server.get('/api/tweets/:id/replies', (req, res) => {
  const db = router.db;
  const tweetId = parseInt(req.params.id);
  const replies = db.get('replies').filter({ TweetId: tweetId }).value();
  res.json(replies);
});

// Create tweet: POST /api/tweets
server.post('/api/tweets', (req, res) => {
  const { description } = req.body;
  const db = router.db;
  
  // Get user from token (mock - use user1 as default)
  const user = db.get('users').find({ id: 1 }).value();
  
  const newTweet = {
    id: Date.now(),
    UserId: user.id,
    description,
    createdAt: new Date().toISOString(),
    repliedCount: 0,
    likedCount: 0,
    isLiked: false,
    TweetUser: {
      id: user.id,
      name: user.name,
      account: user.account,
      avatar: user.avatar
    }
  };
  
  db.get('tweets').push(newTweet).write();
  res.status(201).json(newTweet);
});

// Create reply: POST /api/tweets/:id/replies
server.post('/api/tweets/:id/replies', (req, res) => {
  const { comment } = req.body;
  const tweetId = parseInt(req.params.id);
  const db = router.db;
  
  const user = db.get('users').find({ id: 1 }).value();
  
  const newReply = {
    id: Date.now(),
    TweetId: tweetId,
    UserId: user.id,
    comment,
    createdAt: new Date().toISOString(),
    User: {
      id: user.id,
      name: user.name,
      account: user.account,
      avatar: user.avatar
    }
  };
  
  db.get('replies').push(newReply).write();
  
  // Update reply count
  const tweet = db.get('tweets').find({ id: tweetId });
  tweet.assign({ repliedCount: tweet.value().repliedCount + 1 }).write();
  
  res.status(201).json(newReply);
});

// Like tweet: POST /api/tweets/:id/like
server.post('/api/tweets/:id/like', (req, res) => {
  const tweetId = parseInt(req.params.id);
  const db = router.db;
  
  const tweet = db.get('tweets').find({ id: tweetId });
  if (tweet.value()) {
    tweet.assign({ 
      likedCount: tweet.value().likedCount + 1,
      isLiked: true 
    }).write();
  }
  
  res.json({ status: 'success' });
});

// Unlike tweet: POST /api/tweets/:id/unlike
server.post('/api/tweets/:id/unlike', (req, res) => {
  const tweetId = parseInt(req.params.id);
  const db = router.db;
  
  const tweet = db.get('tweets').find({ id: tweetId });
  if (tweet.value()) {
    tweet.assign({ 
      likedCount: Math.max(0, tweet.value().likedCount - 1),
      isLiked: false 
    }).write();
  }
  
  res.json({ status: 'success' });
});

// Delete tweet: DELETE /api/tweets/:id
server.delete('/api/tweets/:id', (req, res) => {
  const tweetId = parseInt(req.params.id);
  const db = router.db;
  const currentUserId = 1; // Mock current user
  
  const tweet = db.get('tweets').find({ id: tweetId }).value();
  
  if (!tweet) {
    return res.status(404).json({ status: 'error', message: 'Tweet not found' });
  }
  
  // Check if the current user owns the tweet
  if (tweet.UserId !== currentUserId) {
    return res.status(403).json({ status: 'error', message: 'You can only delete your own tweets' });
  }
  
  // Delete the tweet
  db.get('tweets').remove({ id: tweetId }).write();
  
  // Also delete related replies and likes
  db.get('replies').remove({ TweetId: tweetId }).write();
  db.get('likes').remove({ TweetId: tweetId }).write();
  
  res.json({ status: 'success', message: 'Tweet deleted successfully' });
});

// Get top users: GET /api/users/top (MUST be before /api/users/:id)
server.get('/api/users/top', (req, res) => {
  const db = router.db;
  const currentUserId = 1; // Mock current user
  
  // Get all followships for current user
  const userFollowings = db.get('followships')
    .filter({ followerId: currentUserId })
    .value()
    .map(f => f.followingId);
  
  const users = db.get('users')
    .filter(u => u.role !== 'admin' && u.id !== currentUserId) // Exclude current user
    .orderBy('followerCount', 'desc')
    .take(10)
    .value();
  
  res.json(users.map(({ password, ...user }) => ({
    ...user,
    isFollowed: userFollowings.includes(user.id)
  })));
});

// Get user: GET /api/users/:id
server.get('/api/users/:id', (req, res) => {
  const db = router.db;
  const id = parseInt(req.params.id);
  const user = db.get('users').find({ id }).value();
  
  if (!user) {
    return res.status(404).json({ status: 'error', message: 'User not found' });
  }
  
  const { password, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
});

// Get user tweets: GET /api/users/:id/tweets
server.get('/api/users/:id/tweets', (req, res) => {
  const db = router.db;
  const userId = parseInt(req.params.id);
  const tweets = db.get('tweets').filter({ UserId: userId }).value();
  res.json(tweets);
});

// Get user replied tweets: GET /api/users/:id/replied_tweets
server.get('/api/users/:id/replied_tweets', (req, res) => {
  const db = router.db;
  const userId = parseInt(req.params.id);
  const replies = db.get('replies').filter({ UserId: userId }).value();
  
  // Get tweet info and user info for each reply
  const repliedTweets = replies.map(reply => {
    const tweet = db.get('tweets').find({ id: reply.TweetId }).value();
    const repliedUser = db.get('users').find({ id: reply.UserId }).value();
    const { password, ...userWithoutPassword } = repliedUser || {};
    
    return {
      ...reply,
      RepliedUser: userWithoutPassword,
      Tweet: tweet
    };
  });
  
  res.json(repliedTweets);
});

// Get user likes: GET /api/users/:id/likes
server.get('/api/users/:id/likes', (req, res) => {
  const db = router.db;
  const userId = parseInt(req.params.id);
  const likes = db.get('likes').filter({ UserId: userId }).value();
  
  const likedTweets = likes.map(like => {
    const tweet = db.get('tweets').find({ id: like.TweetId }).value();
    return {
      ...like,
      Tweet: tweet
    };
  });
  
  res.json(likedTweets);
});

// Get user followings: GET /api/users/:id/followings
server.get('/api/users/:id/followings', (req, res) => {
  const db = router.db;
  const userId = parseInt(req.params.id);
  const followings = db.get('followships').filter({ followerId: userId }).value();
  
  const followingUsers = followings.map(f => {
    const user = db.get('users').find({ id: f.followingId }).value();
    const { password, ...userWithoutPassword } = user;
    return { ...f, followingUser: userWithoutPassword };
  });
  
  res.json(followingUsers);
});

// Get user followers: GET /api/users/:id/followers
server.get('/api/users/:id/followers', (req, res) => {
  const db = router.db;
  const userId = parseInt(req.params.id);
  const followers = db.get('followships').filter({ followingId: userId }).value();
  
  const followerUsers = followers.map(f => {
    const user = db.get('users').find({ id: f.followerId }).value();
    const { password, ...userWithoutPassword } = user;
    return { ...f, followerUser: userWithoutPassword };
  });
  
  res.json(followerUsers);
});

// Follow user: POST /api/followships
server.post('/api/followships', (req, res) => {
  const { id } = req.body;
  const db = router.db;
  
  const newFollowship = {
    id: Date.now(),
    followerId: 1, // Mock current user
    followingId: id
  };
  
  db.get('followships').push(newFollowship).write();
  res.status(201).json({ status: 'success' });
});

// Unfollow user: DELETE /api/followships/:id
server.delete('/api/followships/:id', (req, res) => {
  const followingId = parseInt(req.params.id);
  const db = router.db;
  
  db.get('followships').remove({ followerId: 1, followingId }).write();
  res.json({ status: 'success' });
});

// Update user: PUT /api/users/:id
server.put('/api/users/:id', (req, res) => {
  const db = router.db;
  const id = parseInt(req.params.id);
  const user = db.get('users').find({ id });
  
  if (!user.value()) {
    return res.status(404).json({ status: 'error', message: 'User not found' });
  }
  
  user.assign(req.body).write();
  const { password, ...userWithoutPassword } = user.value();
  res.json(userWithoutPassword);
});

// Update user setting: PUT /api/users/:id/setting
server.put('/api/users/:id/setting', (req, res) => {
  const db = router.db;
  const id = parseInt(req.params.id);
  const { account, name, email, password, checkPassword } = req.body;
  
  if (password !== checkPassword) {
    return res.status(400).json({
      status: 'error',
      message: 'Passwords do not match!'
    });
  }
  
  const user = db.get('users').find({ id });
  if (!user.value()) {
    return res.status(404).json({ status: 'error', message: 'User not found' });
  }
  
  user.assign({ account, name, email, password }).write();
  res.json({ status: 'success' });
});

// Start server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`🚀 Mock API Server is running at http://localhost:${PORT}`);
  console.log('');
  console.log('📋 Test Accounts:');
  console.log('   User Login:  account: user1, password: 12345678');
  console.log('   User Login:  account: user2, password: 12345678');
  console.log('   Admin Login: account: root,  password: 12345678');
  console.log('');
});

