import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const HomePage = () => {
    return (
        <Container component="main" maxWidth="md" style={{ marginTop: '20px' }}>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Home Page
                </Typography>
                <Typography variant="body1">
                    Welcome to the website showcasing analytics example. This is simple React application with some mocked components ("pay" buttons, contact forms).
                </Typography>
                <Box style={{ marginTop: '20px' }}>
                    <Typography variant="body2">
                        This website implements some analytics events (page views, button clicks, simple conversions) so they can be viewed in Mixpanel, Amplitude and other product analytics tools.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default HomePage;
