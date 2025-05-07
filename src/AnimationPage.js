import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

import wudengfenxinniangImage from './assets/wudengfenxinniang.jpg'; 
import baoshizhigou from './assets/baoshizhigou.jpg'
import kangna from './assets/kangna.jpg'
import huiyedaxiaojie from './assets/huiyedaxiaojie.webp'
import guimiezhiren from './assets/guimiezhiren.webp'
import jinjidjvren from './assets/jinjidjvren.webp'
import limulu from './assets/limulu.webp'
import paiqiushaonian from './assets/paiqiushaonian.webp'
import daojianshenyv from './assets/daojianshenyv.jpg'
import huolishaonianwang from './assets/huolishaonianwang.jpg'

// 示例动画数据，实际应用中可以从API获取
const animations = [
  {
    title: "火力少年王!!",
    description: "作品讲述地是：一直视悠悠球为体育运动地悠悠球高手姚杰在东亚悠悠球大赛上落败，由此萌生了放弃悠悠球地念头。在这时，姚杰却遇到了一直将悠悠球当作玩具地凌亮，二人因对悠悠球地观念不同而产生了矛盾和冲突，机缘巧合下，凌亮加入了以姚杰为首地悠悠球队，大家共同训练，经过不断地磨合、相处，姚杰逐渐从凌亮身上体会到玩悠悠球地真正乐趣，放下了过重地得失心，学会享受自己心爱地运动；而凌亮最终也明白到了什么是悠悠球运动，开始认真对待悠悠球。两个对悠悠球概念截然不同地年轻人，最终为着同一个目标，以热诚热血，并肩向着梦想进发",
    image: huolishaonianwang, 
    link: "/animation/haikyuu"
  },
  {
    title: "咒术回战",
    description: "《咒术回战》是由芥见下下创作的一部日本漫画作品，讲述了主角虎杖悠仁意外卷入了与诅咒斗争的世界！！！！！！！！！！！！！！！！！！！！！！！！ ",
    image: wudengfenxinniangImage, 
    link: "/animation/jujutsu-kaisen"
  },
  {
    title: "宝石之国",
    description: "《宝石之国》讲述了一群以宝石组成的人物，并与月亮上的怪物不断战斗的热血战斗故事，但教导他们的老师似乎并不是那么简单！！！！！！！！！！！！！",
    image: baoshizhigou, 
    link: "/animation/kimetsu-no-yaiba"
  },
  {
    title: "进击的巨人",
    description: "《进击的巨人》是一部由谏山创创作的日本漫画，故事围绕着艾连等人对抗神秘的巨人展开，探讨了自由、生存以及人类的真相！！！！！！！！！！！！！！！！！！",
    image: jinjidjvren,
    link: "/animation/attack-on-titan"
  },
  {
    title: "小林家的龙女仆",
    description: "《小林家的龙女仆》讲述了一个资深社畜程序员小林，在回家的路上与一个误闯入人类世界的龙相遇，后成为小林家的女仆，之后小林又遇见了许多潜入人类世界的不同种类的龙的故事",
    image: kangna,
    link: "/animation/attack-on-titan"
  },
  {
    title: "我的英雄学院",
    description: "《我的英雄学院》是由堀越耕平创作的一部超能力题材漫画，描述了一个绝大多数人都拥有“个性”的世界中，没有天生“个性”的少年绿谷出久如何成为英雄的故事！！！！！！！！！！！！",
    image: huiyedaxiaojie, 
    link: "/animation/my-hero-academia"
  },
  {
    title: "鬼灭之刃",
    description: "《鬼灭之刃》是吾峠呼世晴创作的一部奇幻漫画，讲述了一位少年炭治郎为了寻找治愈变成鬼的妹妹的方法而踏上旅程的故事！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！",
    image: guimiezhiren, 
    link: "/animation/kimetsu-no-yaiba"
  },
  {
    title: "排球少年!!",
    description: "《排球少年!!》是古馆春一创作的一部以排球为主题的运动漫画，描绘了日向翔阳在加入乌野高中排球部后，朝着全国大赛的梦想努力奋斗的历程！！！！！！",
    image: limulu, 
    link: "/animation/haikyuu"
  },
  {
    title: "排球少年!!",
    description: "《排球少年!!》是古馆春一创作的一部以排球为主题的运动漫画，描绘了日向翔阳在加入乌野高中排球部后，朝着全国大赛的梦想努力奋斗的历程！！！！！！！！！！",
    image: paiqiushaonian, 
    link: "/animation/haikyuu"
  },
  {
    title: "刀剑神域",
    description: "《刀剑神域》是由川原砾创作的一部轻小说改编动画，主要讲述了一场发生在虚拟现实MMORPG游戏中的冒险故事，玩家必须通关游戏才能回到现实世界！！！！！！！！！！！！！！",
    image: daojianshenyv, 
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