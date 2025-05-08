import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// 导入背景图片
import registerBg from './assets/register-bg.jpg'; // 确保路径正确

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

// 创建带有背景图片样式的容器
const BackgroundContainer = styled(Box)({
  backgroundImage: `url(${registerBg})`, // 应用背景图片
  backgroundSize: 'cover', // 背景图片大小自适应
  backgroundPosition: 'center', // 背景图片居中显示
  backgroundAttachment: 'fixed', // 固定背景图片
  height: '100vh', // 占据整个视口高度
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

// 表单卡片样式
const CardContainer = styled(Container)({
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // 增加透明度
  borderRadius: '16px',
  padding: '40px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
});

function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password && email) {
      onRegister(username);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <CardContainer component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#e91e63' }}>
              注册
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

              {/* 邮箱输入框 */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="电子邮件地址"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

              {/* 注册按钮 */}
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
                注册
              </Button>

              {/* 切换表单按钮 */}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="./Login.js" variant="body2" underline="none" sx={{
                    color: '#ff66b2',
                    '&:hover': {
                      color: '#ff4081',
                    },
                  }}>
                    {"已经有账号？登录"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </CardContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
}

export default Register;