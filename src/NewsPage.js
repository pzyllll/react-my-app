import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';

// 假设这是你的背景图链接或本地路径
import backgroundImage from './assets/background.jpg'; // 确保替换为实际路径

// 示例社区动态数据
const communityPosts = [
    {
        title: "社区活动：春季徒步",
        description: "快来加入我们的春季徒步活动，一起探索大自然的美好。",
        date: "2025-04-15"
    },
    {
        title: "新成员介绍：小李",
        description: "让我们欢迎新成员小李加入我们的大家庭！",
        date: "2025-04-10"
    },
    // 可以继续添加更多动态...
];

// 自定义带背景的容器
const PageContainer = styled(Box)({
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 0,
});

function CommunityPage() {
    return (
        <PageContainer>
            <Overlay />
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h3" gutterBottom color="white" align="center">
                    社区动态 🌟
                </Typography>
                <Typography variant="h6" paragraph color="lightgray" align="center" mb={4}>
                    查看最新的社区新闻和活动信息。
                </Typography>

                {/* 社区动态卡片展示 */}
                <Grid container spacing={4}>
                    {communityPosts.map((post, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {post.description}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        发布日期: {post.date}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </PageContainer>
    );
}

export default CommunityPage;