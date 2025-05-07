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
  Rating,
  Divider,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { styled } from '@mui/material/styles';

// 示例数据
const gameDetails = {
  title: "星际征途",
  description: "在这款史诗级科幻MMORPG中，探索无垠宇宙，建造属于你的太空帝国。",
  screenshots: [
    require("./assets/game_screenshot_1.jpg"),
    require("./assets/game_screenshot_2.webp"),
    require("./assets/game_screenshot_3.png"),
  ],
  trailerUrl: "https://www.bilibili.com/video/BV15x4y1v7eo/?spm_id_from=333.337.search-card.all.click&vd_source=3d707d1dbad1c71b4b50bbdcbf8eee26",
  rating: 4.7,
  reviews: [
    { user: "星之旅行者", avatar: "./assets/game_screenshot_1.jpg", comment: "绝对值得一玩，画面和剧情都非常棒！", rating: 5 },
    { user: "太空探险家", avatar: "./assets/game_screenshot_2.webp", comment: "游戏玩法丰富，但新手引导有些复杂。", rating: 4 },
    { user: "银河指挥官", avatar: "./assets/game_screenshot_3.png", comment: "这是我玩过的最好的太空题材游戏之一。", rating: 5 },
  ],
  relatedGames: [
    { title: "星际征途2", description: "续作更加精彩，更多未知等待你去发现。" },
    { title: "宇宙战争", description: "加入激烈的宇宙战斗，成为最强大的指挥官。" },
    { title: "太空工程师", description: "用你的创造力建造独一无二的宇宙飞船。" },
  ]
};

function GamePage() {
  const [newReview, setNewReview] = useState({ user: "", comment: "", rating: 0 });
  const [reviews, setReviews] = useState(gameDetails.reviews);

  const handleAddReview = () => {
    if (!newReview.user.trim() || !newReview.comment.trim()) {
      alert('请填写用户名和评论');
      return;
    }

    setReviews([...reviews, newReview]);
    setNewReview({ user: "", comment: "", rating: 0 });
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('https://images.unsplash.com/photo-1746471626032-d5dd71f0ba9c?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        py: 6,
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        {/* 背景遮罩层 */}
        <Box
          sx={{
            backgroundColor: 'rgba(237, 226, 226, 0.7)',
            borderRadius: '16px',
            padding: 4,
          }}
        >
          {/* 游戏标题 */}
          <Typography variant="h3" gutterBottom color="primary" align="center" fontWeight="bold">
            {gameDetails.title}
          </Typography>
          <Typography variant="body1" paragraph align="center" mb={4}>
            {gameDetails.description}
          </Typography>

          {/* 游戏评分 */}
          <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
            <Rating name="read-only" value={gameDetails.rating} precision={0.1} readOnly />
            <Typography variant="subtitle1" ml={1}>{gameDetails.rating}</Typography>
          </Box>

          {/* 游戏截图 */}
          <Grid container spacing={4} mb={6}>
            {gameDetails.screenshots.map((src, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <img src={src} alt={`Screenshot ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
              </Grid>
            ))}
          </Grid>

          {/* 游戏预告片 */}
          <Typography variant="h5" gutterBottom>预告片</Typography>
          <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              title="gameTrailer"
              src={gameDetails.trailerUrl}
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

          {/* 用户评论 */}
          <Typography variant="h5" gutterBottom mt={8}>用户评论</Typography>
          <Divider variant="middle" />

          {/* 显示已有评论 */}
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <Card key={index} elevation={3} sx={{ my: 2, p: 2, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <Box display="flex" alignItems="center">
                  <Avatar alt={review.user} src={review.avatar} />
                  <Typography variant="subtitle1" component="div" ml={2} fontWeight="bold">
                    {review.user}
                  </Typography>
                  <Rating name="size-small" value={review.rating} size="small" readOnly />
                </Box>
                <Typography variant="body1" paragraph>
                  {review.comment}
                </Typography>
              </Card>
            ))
          ) : (
            <Typography variant="body1">暂无评论。</Typography>
          )}

          {/* 添加新评论表单 */}
          <Typography variant="h6" gutterBottom mt={4}>添加您的评论</Typography>
          <TextField
            fullWidth
            label="用户名"
            variant="outlined"
            margin="dense"
            value={newReview.user}
            onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'white' } }}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="评论"
            variant="outlined"
            margin="dense"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'white' } }}
          />
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <Rating
              name="simple-controlled"
              value={newReview.rating}
              onChange={(event, newValue) => {
                setNewReview({ ...newReview, rating: newValue });
              }}
            />
            <Button variant="contained" color="primary" onClick={handleAddReview}>
              提交评论
            </Button>
          </Box>

          {/* 相关游戏推荐 */}
          <Typography variant="h5" gutterBottom mt={8}>您可能感兴趣的其他游戏</Typography>
          <Grid container spacing={4}>
            {gameDetails.relatedGames.map((game, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card elevation={3} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {game.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {game.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default GamePage;