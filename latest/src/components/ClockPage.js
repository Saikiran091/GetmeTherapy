import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, Typography, Slider } from '@mui/material';

const ClockPage = () => {
  const [speed, setSpeed] = useState(1);
  const [time, setTime] = useState(new Date());
  const [sharedUrl, setSharedUrl] = useState('');

  const intervalRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000);
    intervalRef.current = interval;
    return () => clearInterval(interval);
  }, [speed]);

  const handleSliderChange = (event, newValue) => {
    setSpeed(newValue);
  };

  const handleShare = () => {
    const url = `${window.location.origin}/clock?speed=${speed}`;
    setSharedUrl(url);
  };

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = (hours % 12) * 30 - 90;
  const minuteDegrees = minutes * 6 - 90;
  const secondDegrees = seconds * 6 - 90;

  return (
    <Container style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Anticlockwise Countdown Clock</Typography>
      <div style={{ position: 'relative', width: '200px', height: '200px', margin: 'auto', border: '2px solid black', borderRadius: '50%' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '4px', height: '50%', backgroundColor: 'black', transformOrigin: 'bottom', transform: `rotate(${hourDegrees}deg)` }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '4px', height: '70%', backgroundColor: 'black', transformOrigin: 'bottom', transform: `rotate(${minuteDegrees}deg)` }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '2px', height: '90%', backgroundColor: 'red', transformOrigin: 'bottom', transform: `rotate(${secondDegrees}deg)` }} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Typography gutterBottom>Speed</Typography>
        <Slider
          value={speed}
          min={0.1}
          max={5}
          step={0.1}
          onChange={handleSliderChange}
          aria-labelledby="continuous-slider"
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleShare} style={{ marginTop: '20px' }}>Share</Button>
      {sharedUrl && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="body1">Share this URL:</Typography>
          <Typography variant="body2">{sharedUrl}</Typography>
        </div>
      )}
    </Container>
  );
};

export default ClockPage;
