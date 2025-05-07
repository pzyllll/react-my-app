import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';
// 替换为你自己的动漫风背景图路径
import animeBackground from './assets/anime-bg.jpg'; 

// 轮播图配置
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function Home() {
  const videos = [
    { title: "新番推荐：咒术回战", views: "12.3万", author: "ACG研究所" },
    { title: "原神角色设计解析", views: "9.8万", author: "画师阿茶" },
    { title: "火影忍者经典回顾", views: "7.6万", author: "动漫老司机" },
    { title: "EVA新世纪福音战士深度解读", views: "8.2万", author: "机甲博士" },
    { title: "樱花季", views: "8.25万", author: "大狂欢g士" },
    { title: "Seasion", views: "280.5万", author: "dreaming" },
    { title: "Awion", views: "128.55万", author: "Hooking" },
    { title: "Finghting", views: "60.25万", author: "hodeler" },
  ];

  const topRanking = [
    { name: "晶码战士", score: "9.8" },
    { name: "火力少年王", score: "9.7" },
    { name: "海贼王", score: "9.6" },
    {name:"鬼灭之刃",score:"9.3"}
  ];

  const categories = [
    { title: "动画", icon: "❤️", description: "各种类型的动画，等你来看" },
    { title: "漫画", icon: "📚", description: "海量正版漫画资源，每日更新~" },
    { title: "游戏", icon: "🎮", description: "最新游戏资讯、攻略全掌握！" },
    { title: "动态", icon: "📰", description: "二次元新鲜事第一时间知道！" },
  ];

  // 轮播图数据
  const carouselItems = [
    { id: 1, image: slide1, alt: "Slide 1" },
    { id: 2, image: slide2, alt: "Slide 2" },
    { id: 3, image: slide3, alt: "Slide 3" },
  ];

  return (
    <>
      {/* 轮播图 */}
      <Box sx={{ width: '100%' }}>
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.alt} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            </div>
          ))}
        </Slider>
      </Box>

      {/* 带背景图的主区域 */}
      <Box sx={{
        position: 'relative',
        minHeight: '100vh',
        pt: 4,
        backgroundImage: `url(${animeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.7)', // 白色半透明遮罩
          backdropFilter: 'blur(4px)', // 高斯模糊
          zIndex: 0,
        }
      }}>
        {/* 内容容器 */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
            {/* 推荐视频 🎬 */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Typography variant="h4" gutterBottom fontWeight="bold">
                推荐视频 🎬
              </Typography>
              <Grid container spacing={3}>
                {videos.map((video, index) => (
                  <Grid item key={index} xs={12} sm={6} md={3}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                      <VideoCard {...video} />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>

            {/* 热门排行榜 📊 */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Typography variant="h4" gutterBottom sx={{ mt: 8, fontWeight: 'bold', color: '#e91e63' }}>
                热门排行榜 ⭐
              </Typography>
              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                {topRanking.map((item, index) => (
                  <Paper elevation={3} key={index} sx={{
                    p: 2, borderRadius: '12px', minWidth: '200px',
                    textAlign: 'center', backgroundColor: index === 0 ? '#ffe0e0' : '#fff'
                  }}>
                    <Typography variant="h5" fontWeight="bold">{item.name}</Typography>
                    <Chip label={`评分：${item.score}`} color="primary" size="small" sx={{ mt: 1 }} />
                  </Paper>
                ))}
              </Box>
            </motion.div>

            {/* 分类导航 🎯 */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <Typography variant="h4" gutterBottom sx={{ mt: 10, fontWeight: 'bold' }}>
                精彩分类 🧩
              </Typography>
              <Grid container spacing={4}>
                {categories.map((category, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }}>
                      <Paper elevation={3} sx={{
                        p: 3, borderRadius: '16px', textAlign: 'center',
                        background: 'linear-gradient(to right bottom, #f8f8ff, #fff0f5)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        }
                      }}>
                        <Avatar sx={{ bgcolor: '#ff99cc', margin: 'auto', mb: 2 }}>
                          {category.icon}
                        </Avatar>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>{category.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{category.description}</Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>

            {/* 底部欢迎语 🌸 */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
              <Box sx={{ textAlign: 'center', mt: 10, py: 4, bgcolor: '#fff0f5', borderRadius: '16px' }}>
                <Typography variant="h5" fontWeight="bold">欢迎来到 ACG 世界 ❤️</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  这里是热爱动漫、漫画与游戏的家。
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Home;