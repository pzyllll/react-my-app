import React from 'react';
import { Link } from 'react-router-dom'; // 引入 Link 组件
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

// 自定义 AppBar 样式：采用更可爱柔和的粉红色调
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#ff99cc', // 更加柔和的粉色
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
}));

// 自定义按钮样式
const NavButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  fontWeight: 500,
  fontSize: '1rem',
  padding: '6px 12px',
  borderRadius: '12px', // 更圆润的按钮边缘
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // 悬停时的背景色
    transform: 'scale(1.05)',
  },
}));

function Navbar() {
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* 网站标题 */}
        <Typography variant="h6" component={Link} to="/" sx={{
          flexGrow: 1,
          textDecoration: 'none',
          color: 'inherit',
          fontWeight: 700,
          letterSpacing: '0.1em', // 增加字母间距
          fontFamily: '"Comic Sans MS", cursive, sans-serif', 
        }}>
          二次元小站 🎉
        </Typography>

        {/* 桌面菜单 */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6 ,
         alignItems: 'center', // 垂直居中对齐
         padding: '0 6rem', // 增加内边距让菜单栏更宽
          }}>
          <NavButton component={Link} to="/">首页</NavButton>
          <NavButton component={Link} to="/animation">动画</NavButton>
          <NavButton component={Link} to="/comic">漫画</NavButton>
          <NavButton component={Link} to="/game">游戏</NavButton>
          <NavButton component={Link} to="/news">动态</NavButton>
          {/* 用户头像 */}
          <Avatar
            alt="User"
            src="../ProfilePage.js"
            component={Link}
            to="/profile"
            sx={{ width: 32, height: 32 }}
          />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;