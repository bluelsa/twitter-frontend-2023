import './App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SettingPage from './pages/SettingPage';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import TweetsPage from './pages/AdminTweetsPage';
import UsersPage from './pages/AdminUsersPage';
import OtherUserPage from './pages/OtherUserPage';


function App() {

  // const basename = process.env.PUBLIC_URL;

  return (
    <div className="app">
      <HashRouter 
      // basename={basename}
      >
        <AuthProvider>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="home" element={<MainPage />} />
          <Route path="setting" element={<SettingPage />} />

          <Route path="user" element={<UserPage />} />

          <Route path="otheruser" element={<OtherUserPage />} />

          <Route path="admin" element={<AdminPage />} />
          <Route path="admin/tweets" element={<TweetsPage />} />
          <Route path="admin/users" element={<UsersPage />} />
        </Routes>
        </AuthProvider>
      </HashRouter>
    </div>
  );
}

export default App;
