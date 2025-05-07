import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Chip,
  ButtonBase,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { styled } from '@mui/material/styles';

// 背景图路径
import backgroundImage from './assets/community-bg.jpg'; // 替换为你的实际背景图路径

// 示例社区动态数据
let postId = 6; // 初始化帖子ID计数器
const initialCommunityPosts = [
  {
    id: 1,
    username: "小明",
    avatar: "./assets/daojianshenyv.jpg",
    title: "社区活动：春季徒步",
    description: "快来加入我们的春季徒步活动，一起探索大自然的美好。",
    date: "2025-04-15",
    likes: 123,
    comments: 23,
  },
  {
    id: 2,
    username: "小李",
    avatar: "./assets/BOQI.jpg",
    title: "新成员介绍：小王",
    description: "让我们欢迎新成员小王加入我们的大家庭！",
    date: "2025-04-10",
    likes: 45,
    comments: 8,
  },
  {
    id: 3,
    username: "旅行家阿茶",
    avatar: "./assets/avatar3.png",
    title: "绝美风景照分享",
    description: "在云南拍到的日出云海，太震撼了！",
    date: "2025-04-05",
    likes: 98,
    comments: 16,
    media: <img src="./assets/nature1.jpg" alt="Nature" style={{ width: '100%', height: 'auto', marginTop: '1rem' }} />,
  },
  {
    id: 4,
    username: "编程小白",
    avatar: "./assets/avatar4.png",
    title: "我学会写第一个小程序啦！",
    description: "记录一下我的学习之路~",
    date: "2025-04-01",
    likes: 78,
    comments: 12,
    media: (
      <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          title="video"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '12px',
          }}
        />
      </Box>
    ),
  },
  {
    id: 5,
    username: "二次元爱好者",
    avatar: "./assets/avatar5.png",
    title: "《鬼灭之刃》最新剧场版观后感",
    description: "炭治郎终于变强了！你们觉得结局怎么样？",
    date: "2025-03-28",
    likes: 201,
    comments: 34,
  },
];

// 自定义带背景的容器
const PageContainer = styled(Box)({
  minHeight: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  padding: '40px 0',
  position: 'relative',
});

// 添加半透明黑色遮罩层
const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 0,
});

// 卡片样式（增强交互）
const PostCard = styled(Card)(({ theme }) => ({
  margin: 'auto',
  transition: 'all 0.3s ease-in-out',
  borderRadius: '16px',
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
    borderColor: theme.palette.primary.main,
  },
}));

// 悬浮按钮样式
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

function CommunityPage() {
  const [communityPosts, setCommunityPosts] = useState(initialCommunityPosts);
  const [open, setOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    media: null,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreatePost = () => {
    if (!newPost.title.trim()) {
      alert('请输入标题');
      return;
    }

    const newPostItem = {
      id: postId++,
      username: "新用户",
      avatar: "./assets/newuser.png", // 默认头像
      title: newPost.title,
      description: newPost.description,
      date: new Date().toISOString().slice(0, 10),
      likes: 0,
      comments: 0,
      media: newPost.media
        ? <img
            src={URL.createObjectURL(newPost.media)}
            alt="User Uploaded"
            style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
          />
        : null,
    };

    setCommunityPosts([newPostItem, ...communityPosts]);
    setOpen(false);
    setNewPost({ title: '', description: '', media: null });
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.startsWith('image/') && !file.type.startsWith('video/')) {
      alert('请选择图片或视频文件');
      return;
    }
    setNewPost({ ...newPost, media: file });
  };

  return (
    <div>
      {/* 页面容器 */}
      <PageContainer>
        <Overlay />

        {/* 内容区域 */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* 标题部分 */}
          <Typography variant="h3" gutterBottom color="white" align="center" fontWeight="bold">
            社区动态 🌟
          </Typography>
          <Typography variant="h6" paragraph color="lightgray" align="center" mb={6}>
            查看最新的社区新闻、活动信息和精彩内容。
          </Typography>

          {/* 动态卡片列表 */}
          <Grid container spacing={4}>
            {communityPosts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <PostCard elevation={3}>
                  {/* 用户信息 */}
                  <CardContent sx={{ pb: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar alt={post.username} src={post.avatar} />
                      <Typography variant="subtitle1" component="div" ml={2} fontWeight="bold">
                        {post.username}
                      </Typography>
                      {post.id === 1 && (
                        <Chip label="官方" size="small" color="primary" sx={{ ml: 1 }} />
                      )}
                    </Box>
                  </CardContent>

                  {/* 帖子正文 */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.description}
                    </Typography>
                    {/* 媒体内容 */}
                    {post.media && post.media}
                  </CardContent>

                  {/* 底部互动栏 */}
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 2,
                    borderTop: '1px solid #eee',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                  }}>
                    <Typography variant="caption" color="text.secondary">
                      发布于 {post.date}
                    </Typography>
                    <Box>
                      <Tooltip title="点赞">
                        <StyledIconButton aria-label="like">
                          <FavoriteIcon fontSize="small" />
                          <Typography variant="body2" ml={0.5}>{post.likes}</Typography>
                        </StyledIconButton>
                      </Tooltip>
                      <Tooltip title="评论">
                        <StyledIconButton aria-label="comment">
                          <ChatBubbleOutlineIcon fontSize="small" />
                          <Typography variant="body2" ml={0.5}>{post.comments}</Typography>
                        </StyledIconButton>
                      </Tooltip>
                      <Tooltip title="分享">
                        <StyledIconButton aria-label="share">
                          <ShareIcon fontSize="small" />
                        </StyledIconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </PostCard>
              </Grid>
            ))}
          </Grid>

          {/* 发布新动态按钮 */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <ButtonBase
              onClick={handleClickOpen}
              sx={{
                px: 4,
                py: 2,
                borderRadius: '30px',
                bgcolor: '#e91e63',
                color: 'white',
                fontWeight: 'bold',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  bgcolor: '#d81b60',
                },
              }}
            >
              发布新动态 +
            </ButtonBase>
          </Box>
        </Container>
      </PageContainer>

      {/* 发布新动态对话框 */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>发布新动态</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="标题"
            type="text"
            fullWidth
            variant="standard"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <TextField
            margin="dense"
            id="description"
            label="描述"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            value={newPost.description}
            onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
          />
          <input
            accept="image/*,video/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
            onChange={handleMediaChange}
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span" color="primary" sx={{ mt: 2 }}>
              上传媒体文件
            </Button>
          </label>
          {newPost.media && (
            <Typography variant="body2" color="text.secondary" mt={1}>
              已选择文件: {newPost.media.name}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleCreatePost} color="primary">发布</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CommunityPage;