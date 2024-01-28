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
                    Welcome to our website! We are a team dedicated to providing the best services.
                </Typography>
                <Box style={{ marginTop: '20px' }}>
                    <Typography variant="body2">
                        Our mission is to deliver top-notch solutions to all our clients.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default HomePage;
