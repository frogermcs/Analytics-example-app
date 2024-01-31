import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import analytics from "../analytics";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [done, setDone] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const validate = () => {
        const errors = getCurrentErrors();
        setErrors(errors);
        return Object.values(errors).every(x => x === "");
    };

    const getCurrentErrors = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? "" : "Name field is required";
        tempErrors.email = formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? "" : "Email is not valid";
        tempErrors.message = formData.message ? "" : "Message field is required";
        return tempErrors;
    };

    const handleSubmit = (event) => {
        analytics.track("click_Contact_submit");
        event.preventDefault();
        if (validate()) {
            setDone(true);
            console.log(formData);
            analytics.track("conversion_Contact_SubmissionSuccess");
        } else {
            const errors = getCurrentErrors();
            const errorsPayload = {
                allErrors: errors,
                errorsList: Object.keys(errors).map((key) => `${key}-${errors[key]}`)
            }
            analytics.track("conversion_Contact_SubmissionError", { errorsPayload });
        }
    };

    const handleFocus = (event) => {
        analytics.track("focus_Contact_" + event.target.name);
    }

    return (
        <Container component="main" maxWidth="md" style={{ marginTop: '20px' }}>
            <Paper style={{ padding: '20px' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Contact Us
                </Typography>
                {!done && (
                <form noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoFocus
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="message"
                        label="Message"
                        id="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        error={!!errors.message}
                        helperText={errors.message}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '10px' }}
                    >
                        Send Message
                    </Button>
                </form>
                )}

                {done && (
                    <Typography variant="body1" style={{ marginTop: '20px' }}>
                        Thank you for contacting us!
                    </Typography>
                )}

            </Paper>
        </Container>
    );
};

export default ContactPage;
