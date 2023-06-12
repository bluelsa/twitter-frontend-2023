import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import SettingPage from "./pages/SettingPage";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserReplyPage from "./pages/UserReplyPage";
import UserLikePage from "./pages/UserLikePage";
import FollowersPage from "./pages/UserFollowersPage";
import FollowingPage from "./pages/UserFollowingPage";
import TweetsPage from "./pages/AdminTweetsPage";
import UsersPage from "./pages/AdminUsersPage";
import OtherUserPage from "./pages/OtherUserPage";
import MainReplyPage from "./pages/MainReplyPage";

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
          <Route path="mainreplies" element={<MainReplyPage />} />

          <Route path="user" element={<UserProfilePage />} />
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
  );
}

export default App;
