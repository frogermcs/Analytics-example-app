import React, { useState } from 'react';
import { Container, Button, Paper, CircularProgress, Alert, Typography, Box} from '@mui/material';
import analytics from "../analytics";

const PaymentPage = () => {
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const randomCheck = () => {
        return Date.now() % 5 === 0;
    }

    const errorReason = () => {
        switch (Date.now() % 2) {
            case 0:
                return 'Payment not authorized';
            case 1:
                return 'Payment timed out';
            default:
                return 'Payment failed';
        }
    }

    const handleClick = async () => {
        analytics.track("click_Payment_pay");
        setLoading(true);
        setDone(false);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
        setDone(true);
        const isError = randomCheck();
        setError(isError);
        if (isError) {
            const error = errorReason();
            setErrorMessage(error);
            analytics.track("conversion_Payment_error", { error: error });
        } else {
            analytics.track("conversion_Payment_done");
        }
    };

    return (
        <Container component="main" maxWidth="md" style={{ marginTop: '20px' }}>
            <Paper style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Payments Page
                </Typography>
                <Typography variant="body1">
                    Here you can pay for our services.
                </Typography>
                <Box style={{ marginTop: '20px' }}>
                    {!loading && (
                        <Button variant="contained" color="primary" onClick={handleClick}>
                            Pay
                        </Button>
                    )}

                    {loading && <CircularProgress />}

                    {done && !error && (
                        <Alert severity="success" style={{ marginTop: '20px' }}>
                            Payment successful
                        </Alert>
                    )}

                    {done && error && (
                        <Alert severity="error" style={{ marginTop: '20px' }}>
                            Payment failed. Error: {errorMessage}
                        </Alert>
                    )}
                </Box>
            </Paper>
        </Container>
    );
};

export default PaymentPage;
