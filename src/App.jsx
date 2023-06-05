import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SettingPage from './pages/Home/SettingPage';
import MainPage from './pages/Home/MainPage';
import AdminPage from './pages/Admin/AdminPage';
import UserPage from './pages/Home/UserPage';
import UserReplyPage from './pages/User/UserReplyPage';
import UserLikePage from './pages/User/UserLikePage';
import FollowersPage from './pages/User/FollowersPage';
import FollowingPage from './pages/User/FollowingPage';
import TweetsPage from './pages/Admin/TweetsPage';
import UsersPage from './pages/Admin/UsersPage';
import OtherUserPage from './pages/OtherUserPage';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="home" element={<MainPage />} />
      <Route path="setting" element={<SettingPage />} />
      
      <Route path="user" element={<UserPage />} />
      <Route path="user/replies" element={<UserReplyPage />} />
      <Route path="user/likes" element={<UserLikePage />} />
      <Route path="user/followers" element={<FollowersPage />} />
      <Route path="user/following" element={<FollowingPage />} />

      <Route path="otheruser" element={<OtherUserPage />} />

      <Route path="admin" element={<AdminPage />} />
      <Route path="admin/tweets" element={<TweetsPage />} />
      <Route path="admin/users" element={<UsersPage />} />
    </Routes>
  </BrowserRouter>
    </div>
    
  )
}

export default App;
