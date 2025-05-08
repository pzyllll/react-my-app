import React from 'react';
import { Link } from 'react-router-dom'; // 引入 Link 组件
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

// 自定义 AppBar 样式：使用渐变色背景 + 柔和阴影
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(148, 114, 114, 0.7), rgba(240, 248, 255, 0.7))', // 使用渐变色
  boxShadow: '0 2px 6px rgba(238, 162, 162, 0.87)',   // 更柔和的阴影
  backdropFilter: 'blur(10px)',                 // 高斯模糊效果（毛玻璃）
  color: '#333',                                // 文字颜色更清晰
}));


const NavButton = styled(Button)(({ theme }) => ({
  color: '#333',
  fontWeight: 500,
  fontSize: '1rem',
  padding: '6px 12px',
  borderRadius: '12px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // 悬停时浅灰色背景
    transform: 'scale(1.05)',
  },
}));

function Navbar() {
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* 网站标题 */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: '#333',
            fontWeight: 700,
            letterSpacing: '0.1em',
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
          }}
        >
          二次元小站 🎉
        </Typography>

        {/* 桌面菜单 */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 4,
            alignItems: 'center',
            padding: '0 2rem',
          }}
        >
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