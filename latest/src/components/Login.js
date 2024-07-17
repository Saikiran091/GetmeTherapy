import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Link, IconButton, InputAdornment, Card, CardContent } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { login } from '../Api/api';
import { auth, googleProvider, signInWithPopup } from '../firebaseConfig';
   
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleLogin = (e) => {
    e.preventDefault();

    login(email, password)
      .then(response => {
        console.log('Login successful:', response.data);
        navigate('/clock');
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

   const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log('Google Login successful:', user);
      })
      .catch(error => {
        console.error('Google Login failed:', error);
      });
  };
  return (
    <Container maxWidth="xs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Login to your account.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Please sign in to your account
          </Typography>
          <form onSubmit={handleLogin}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Link href="#" variant="body2" style={{ float: 'right' }}>
              Forgot password?
            </Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '24px 0 16px' }}
            >
              Sign In
            </Button>
          </form>
          <Typography variant="body2" align="center" color="textSecondary">
            Or sign in with
          </Typography>
          <IconButton
            color="primary"
            style={{ margin: '8px 0', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            onClick={handleGoogleLogin}
          >
            <FcGoogle />
          </IconButton>
          <Typography variant="body2" align="center">
            Don't have an account? <Link href="/signup">Register</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
