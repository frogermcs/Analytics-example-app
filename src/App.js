import React, { useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PaymentPage from "./pages/PaymentPage";
import analytics from "./analytics";

const StyledAppBar = styled(AppBar)({
  flexGrow: 1,
});

const StyledButton = styled(Button)({
  margin: '8px',
});

analytics.on("track", ({ payload }) => {
  console.log("EVENT", payload);
});

function App() {
  const location = useLocation()
  useEffect(() => {
    const path = location.pathname;
    var title = "";
    switch (path) {
      case "/":
        title = "Home";
        break;
      case "/payment":
        title = "Payment";
        break;
      case "/contact":
        title = "Contact";
        break;
      default:
        title = "Unknown";
    }
    analytics.track("pageview_" + title);
  }, [location]);

  return (
    <Box>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Example app
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <StyledButton color="inherit" component={Link} to="/">Home</StyledButton>
            <StyledButton color="inherit" component={Link} to="/payment">Payment</StyledButton>
            <StyledButton color="inherit" component={Link} to="/contact">Contact</StyledButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Box>
  );
}

export default App;
