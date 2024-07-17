import React from 'react';
import { Typography, Container } from '@mui/material';

const Welcome = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome!
      </Typography>
      <Typography variant="body1">
        You have successfully logged in.
      </Typography>
    </Container>
  );
};

export default Welcome;
