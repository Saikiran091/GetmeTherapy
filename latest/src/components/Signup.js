import React from 'react';
import { TextField, Button, Typography, Container, Link, Card, CardContent } from '@mui/material';

const Signup = () => {
  return (
    <Container maxWidth="xs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '24px 0 16px' }}
            >
              Sign Up
            </Button>
            <Typography variant="body2" align="center">
              Already have an account? <Link href="/login">Login</Link>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Signup;
