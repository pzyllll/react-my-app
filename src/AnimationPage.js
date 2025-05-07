import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

// 示例动画数据，实际应用中可以从API获取
const animations = [
  {
    title: "咒术回战",
    description: "《咒术回战》是由芥见下下创作的一部日本漫画作品，讲述了主角虎杖悠仁意外卷入了与诅咒斗争的世界。",
    image: "https://via.placeholder.com/345x140", // 替换为真实图片链接
    link: "/animation/jujutsu-kaisen"
  },
  {
    title: "鬼灭之刃",
    description: "《鬼灭之刃》是吾峠呼世晴创作的一部奇幻漫画，讲述了一位少年炭治郎为了寻找治愈变成鬼的妹妹的方法而踏上旅程的故事。",
    image: "https://via.placeholder.com/345x140", // 替换为真实图片链接
    link: "/animation/kimetsu-no-yaiba"
  },
  {
    title: "进击的巨人",
    description: "《进击的巨人》是一部由谏山创创作的日本漫画，故事围绕着艾连等人对抗神秘的巨人展开，探讨了自由、生存以及人类的真相。",
    image: "https://via.placeholder.com/345x140",
    link: "/animation/attack-on-titan"
  },
  {
    title: "我的英雄学院",
    description: "《我的英雄学院》是由堀越耕平创作的一部超能力题材漫画，描述了一个绝大多数人都拥有“个性”的世界中，没有天生“个性”的少年绿谷出久如何成为英雄的故事。",
    image: "https://via.placeholder.com/345x140", 
    link: "/animation/my-hero-academia"
  },
  {
    title: "排球少年!!",
    description: "《排球少年!!》是古馆春一创作的一部以排球为主题的运动漫画，描绘了日向翔阳在加入乌野高中排球部后，朝着全国大赛的梦想努力奋斗的历程。",
    image: "https://via.placeholder.com/345x140", 
    link: "/animation/haikyuu"
  },
  {
    title: "约定的梦幻岛",
    description: "《约定的梦幻岛》是由白井カイウ原作、出水ぽすか作画的一部科幻悬疑漫画，讲述了孤儿院的孩子们发现他们所谓的家园实际上是一个农场，而他们是被饲养的食物。",
    image: "https://via.placeholder.com/345x140", 
    link: "/animation/the-promised-neverland"
  },
  {
    title: "刀剑神域",
    description: "《刀剑神域》是由川原砾创作的一部轻小说改编动画，主要讲述了一场发生在虚拟现实MMORPG游戏中的冒险故事，玩家必须通关游戏才能回到现实世界。",
    image: "https://via.placeholder.com/345x140", 
    link: "/animation/sword-art-online"
  },
];

function AnimationPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h2" gutterBottom>
        动画页面 🎬
      </Typography>
      <Typography variant="body1" paragraph>
        欢迎来到动画专区，这里汇聚了各类精彩的动画内容，无论是热血战斗还是温馨日常，都能找到你喜欢的作品。
      </Typography>

      {/* 动画卡片展示 */}
      <Grid container spacing={4}>
        {animations.map((animation, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={animation.image}
                alt={animation.title}
                sx={{ objectFit: 'cover', flexGrow: 0 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {animation.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {animation.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AnimationPage;