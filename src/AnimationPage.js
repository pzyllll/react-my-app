import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  styled,
} from '@mui/material';

import anime1 from './assets/anime1.jpg'
import anime2 from './assets/anime2.jpg'
import anime3 from './assets/anime3.jpg'
import anime4 from './assets/anime4.jpg'
import anime5 from './assets/anime5.jpg'
import anime6 from './assets/anime6.jpg'
import anime7 from './assets/anime7.jpg'
import anime8 from './assets/anime8.jpg'
import anime9 from './assets/anime9.jpg'
import anime10 from './assets/anime10.jpg'
import anime11 from './assets/anime11.jpg'
import anime12 from './assets/anime12.jpg'
import anime13 from './assets/anime13.jpg'








const animations = [
 
  {
    title: "咒术回战",
    description: "主角虎杖悠仁卷入诅咒斗争的世界。",
    image: anime1
  },
  {
    title: "宝石之国",
    description: "一群宝石人物对抗月亮怪物的故事。",
    image: anime2
  },
  {
    title: "进击的巨人",
    description: "人类对抗吃人巨人的故事。",
    image: anime3
  },
  {
    title: "鬼灭之刃",
    description: "炭治郎为了将变成鬼的妹妹变回人类而战斗。",
    image: anime4
  },
  {
    title: "我的英雄学院",
    description: "在一个绝大多数人都有超能力的世界里，绿谷出久追逐自己的英雄梦想。",
    image: anime5
  },
  {
    title: "刀剑神域",
    description: "桐人在一款虚拟现实MMORPG游戏中冒险的故事。",
    image: anime6
  },
  {
    title: "排球少年!!",
    description: "日向翔阳追求成为小巨人般的存在，加入了排球部。",
    image: anime7
  },
  {
    title: "约定的梦幻岛",
    description: "孩子们发现孤儿院背后的真相，并计划逃脱。",
    image: anime8
  },
  {
    title: "命运石之门",
    description:"冈伦偶然间发现了改变过去和未来的方法。",
    image: anime9
  },
  {
    title: "海贼王",
    description: "路飞为了成为海贼王，与伙伴们一起踏上寻找ONE PIECE的冒险之旅。",
    image: anime10
  },
  {
    title: "银魂",
    description: "在江户时代背景下的搞笑科幻喜剧，讲述万事屋老板坂田银时的日常故事。",
    image: anime11
  },
  {
    title: "死神",
    description: "高中生黑崎一护意外获得死神之力，开始守护人间与尸魂界的平衡。",
    image: anime12
  },
  {
    title: "火影忍者",
    description: "拥有九尾妖狐的鸣人，立志成为最强火影，并赢得大家的认可。",
    image: anime13
  },
  {
    title: "进击的巨人 最终季",
    description: "人类与巨人的最终决战揭开真相，艾伦的命运将走向何方？",
    image: anime1
  },
  {
    title: "辉夜大小姐想让我告白",
    description: "学生会长白银与副会长辉夜之间的恋爱头脑战，谁先告白就输了！",
    image: anime5
  },
  {
    title: "间谍过家家",
    description: "特工“黄昏”与读心能力的女儿、杀手妻子组成虚假家庭，执行各种任务。",
    image: anime2
  },
  {
    title: "我的妹妹不可能这么可爱",
    description: "高坂京介与傲娇妹妹高坂桐乃的日常生活与亲情羁绊。",
    image: anime3
  },
  {
    title: "刀剑神域 Alicization",
    description: "桐人进入虚拟世界Underworld，面对新的敌人与挑战。",
    image: anime4
  },
  {
    title: "Re:从零开始的异世界生活",
    description: "菜月昴穿越异世界，拥有“死亡回归”能力，在绝望中不断挣扎寻找希望。",
    image: anime5
  }
];

// 使用 MUI 的 styled 方法定义样式
const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  }
}));

function AnimationPage() {
  return (
    <Box sx={{ py: 6, bgcolor: '#121212', color: '#fff' }}>
      {/* 内联样式 */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-delay-0 { animation: fadeInUp 1s ease forwards; animation-delay: 0.5s; }
        .card-delay-1 { animation: fadeInUp 1s ease forwards; animation-delay: 0.7s; }
        .card-delay-2 { animation: fadeInUp 1s ease forwards; animation-delay: 0.9s; }
      `}</style>
      
      <Container maxWidth="lg">
        {/* 页面标题 */}
        <Typography variant="h3" align="center" gutterBottom className="fade-in">
          动漫世界 · 精选推荐
        </Typography>
        <Typography variant="body1" align="center" paragraph className="fade-in" style={{animationDelay: '0.3s'}}>
          这里是热爱动漫的你不可错过的精彩内容！
        </Typography>

        {/* 动画卡片列表 */}
        <Grid container spacing={4} justifyContent="center">
          {animations.map((anime, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard className={`animated-card card-delay-${index % 3}`}>
                <CardMedia
                  component="img"
                  height="400"
                  image={anime.image}
                  alt={anime.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {anime.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {anime.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default AnimationPage;