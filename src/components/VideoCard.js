import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// 使用 framer-motion 来添加动画效果
const MotionCard = styled(motion(Card))({
  transition: 'transform 0.3s ease-in-out',
});

// 示例视频数据，实际应用时可以从API获取
const videoImages = {
  "新番推荐：咒术回战": require('../assets/video1.gif'),
  "原神角色设计解析": require('../assets/video2.gif'),
  "火影忍者经典回顾": require('../assets/video3.gif'),
  "EVA新世纪福音战士深度解读": require('../assets/video4.gif'),
  "樱花季": require('../assets/video5.gif'),
  "Seasion":require('../assets/video6.gif'),
  "Awion":require('../assets/video7.gif'),
  "Finghting":require('../assets/video8.gif'),
  "禁忌之旅":require('../assets/video9.gif')
};

const VideoCard = ({ title, views, author }) => {
  const coverImage = videoImages[title];

  return (
    <MotionCard whileHover={{ scale: 1.05 }} elevation={6} sx={{
      maxWidth: 345,
      borderRadius: '16px',
      overflow: 'hidden',
    }}>
      <CardActionArea>
        {/* 视频封面 */}
        <CardMedia
          component="img"
          height="140"
          image={coverImage}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {views} 次观看 • 作者：{author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MotionCard>
  );
};

export default VideoCard;