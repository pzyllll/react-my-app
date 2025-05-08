import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link as RouterLink } from 'react-router-dom'; // 引入 react-router-dom 的 Link 组件
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


import loginBg from './assets/loging.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {/* {'Copyright © '} */}
      <RouterLink color="inherit" to="/">
        {/* 二次元小站 */}
      </RouterLink>{' '}
      {new Date().getFullYear()}
      {/* {'.'} */}
    </Typography>
  );
}

// 自定义主题颜色
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff99cc', // 粉色主色调
    },
    secondary: {
      main: '#ff66b2',
    },
  },
});

// 背景容器样式
const Background = styled(Box)({
  backgroundImage: `url(${loginBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundAttachment: 'fixed', 
});

// 表单卡片样式
const CardContainer = styled(Container)({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '16px',
  padding: '40px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
});

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <CardContainer component="main" maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#e91e63' }}>
              登录
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, width: '100%' }}>
              {/* 用户名输入框 */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="用户名"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
                sx={{
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />

              {/* 密码输入框 */}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="密码"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                sx={{
                  borderRadius: '8px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />

              {/* 登录按钮 */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: 'primary.main',
                  borderRadius: '12px',
                  py: 1.2,
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#ff66b2',
                    transform: 'scale(1.03)',
                  },
                }}
              >
                登录
              </Button>

            
            </Box>
          </Box>
        </CardContainer>
        <Copyright sx={{ position: 'absolute', bottom: 16 }} />
      </Background>
    </ThemeProvider>
  );
}

export default Login;