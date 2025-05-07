import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // 引入导航栏组件
import Login from './Login';
import Register from './Register';
import Home from './Home';
import AnimationPage from './AnimationPage'; // 动画页面
import ComicPage from './ComicPage'; // 漫画页面
import GamePage from './GamePage'; // 游戏页面
import NewsPage from './NewsPage'; // 动态页面
import ProfilePage from './ProfilePage'//个人信息页面
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
// 布局组件
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

// 登录成功组件内部使用 useNavigate
function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = (username) => {
    onLogin(username);
    navigate('/home'); // 手动跳转
  };

  return <Login onLogin={handleLogin} />;
}

// 注册成功组件内部使用 useNavigate
function RegisterPage({ onRegister }) {
  const navigate = useNavigate();

  const handleRegister = (username) => {
    onRegister(username);
    navigate('/home'); // 手动跳转
  };

  return <Register onRegister={handleRegister} />;
}

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentForm, setCurrentForm] = useState('login');

  const handleLoginSuccess = (username) => {
    console.log(`${username} 登录成功`);
    setIsAuthenticated(true);
  };

  const handleRegisterSuccess = (username) => {
    console.log(`${username} 注册成功`);
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      {/* 主页 */}
      <Route path="/home" element={
        isAuthenticated ? 
          <Layout><Home /></Layout> : 
          <Navigate to="/auth" />
      } />

      {/* 动画页面 */}
      <Route path="/animation" element={
        isAuthenticated ? 
          <Layout><AnimationPage /></Layout> : 
          <Navigate to="/auth" />
      } />

      {/* 漫画页面 */}
      <Route path="/comic" element={
        isAuthenticated ? 
          <Layout><ComicPage /></Layout> : 
          <Navigate to="/auth" />
      } />

      {/* 游戏页面 */}
      <Route path="/game" element={
        isAuthenticated ? 
          <Layout><GamePage /></Layout> : 
          <Navigate to="/auth" />
      } />

      {/* 动态页面 */}
      <Route path="/news" element={
        isAuthenticated ? 
          <Layout><NewsPage /></Layout> : 
          <Navigate to="/auth" />
      } />
      {/* 用户信息页面 */}
      <Route path="/profile" element={
         isAuthenticated ? 
        <Layout><ProfilePage /></Layout> : 
           <Navigate to="/auth" />
      } />

      {/* 登录/注册页面 */}
      <Route path="/auth" element={
        isAuthenticated ? 
          <Navigate to="/home" /> : 
          <>
            {currentForm === 'login' ? (
              <LoginPage onLogin={handleLoginSuccess} />
            ) : (
              <RegisterPage onRegister={handleRegisterSuccess} />
            )}

            
            <div style={{  textAlign: 'center'}}>
              <button 
              onClick={() => setCurrentForm(currentForm === 'login' ? 'register' : 'login')}
              
              >
                {currentForm === 'login' ? '没有账号？去注册' : '已有账号？去登录'}
              </button>
            </div>
          </>
      } />

      {/* 默认重定向 */}
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}