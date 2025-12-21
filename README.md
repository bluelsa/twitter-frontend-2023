# Alphitter - Simple Twitter Clone

A simple social media platform built with React, where users can create personal accounts and interact with other users.

## Features

### User Features
- Register a personal account on the signup page
- View all tweets on the home page after login
- Post tweets, reply to tweets, and like tweets
- View personal tweets, replies, and liked content on profile page
- View followers and following lists
- Edit profile avatar, cover photo, nickname, and bio
- Edit account settings including username, email, and password
- View other users' profiles and follow/unfollow them

### Admin Features
- Login via the admin login page
- Browse all user profiles
- Browse all tweets and delete specific tweets

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/bluelsa/twitter-frontend-2023
cd twitter-frontend-2023
```

2. **Install dependencies**

```bash
npm install
```

### Running the Application

You need to run both the mock backend server and the frontend:

**Terminal 1 - Start Mock Backend Server (Port 3001)**

```bash
npm run dev-server
```

**Terminal 2 - Start Frontend (Port 3000)**

```bash
npm start
```

### Access the Application

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000/twitter-frontend-2023/ |
| Mock API | http://localhost:3001 |

### Test Accounts

| Role | Account | Password |
|------|---------|----------|
| User | `user1` | `12345678` |
| User | `user2` | `12345678` |
| User | `user3` | `12345678` |
| Admin | `root` | `12345678` |

### Stop the Application

Press `Ctrl + C` in each terminal to stop the servers.

## Tech Stack

- React 18.2.0
- React Router DOM 6.4.1
- React Scripts 5.0.1
- Axios 0.27.2
- Sass 1.62.1
- clsx 1.2.1
- Lottie Web 5.12.2
- JSON Server 0.17.0 (Mock Backend)

## Project Structure

```
twitter-frontend/
├── public/              # Static files
├── src/
│   ├── api/            # API service functions
│   ├── assets/         # Images and icons
│   ├── common/         # Shared components
│   ├── components/     # Feature components
│   ├── contexts/       # React contexts
│   ├── pages/          # Page components
│   └── App.jsx         # Main app component
├── db.json             # Mock database
├── server.js           # Custom mock API server
└── package.json
```

## API Endpoints

The mock backend provides the following endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/login` | User login |
| POST | `/api/users` | User registration |
| GET | `/api/tweets` | Get all tweets |
| POST | `/api/tweets` | Create a tweet |
| GET | `/api/tweets/:id` | Get a specific tweet |
| GET | `/api/tweets/:id/replies` | Get tweet replies |
| POST | `/api/tweets/:id/replies` | Reply to a tweet |
| POST | `/api/tweets/:id/like` | Like a tweet |
| POST | `/api/tweets/:id/unlike` | Unlike a tweet |
| GET | `/api/users/:id` | Get user profile |
| GET | `/api/users/:id/tweets` | Get user's tweets |
| GET | `/api/users/top` | Get popular users |
| POST | `/api/followships` | Follow a user |
| DELETE | `/api/followships/:id` | Unfollow a user |
| POST | `/api/admin/users` | Admin login |
| GET | `/api/admin/users` | Get all users (admin) |
| GET | `/api/admin/tweets` | Get all tweets (admin) |
| DELETE | `/api/admin/tweets/:id` | Delete a tweet (admin) |

## Contributors

- [Elsa Tung](https://github.com/bluelsa)
