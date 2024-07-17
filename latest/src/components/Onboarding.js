import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Onboarding.css'; 

const slides = [
  {
    text: 'We serve incomparable delicacies',
    description: 'All the best restaurants with their top menu waiting for you, they can\'t wait for your order!!',
    img: 'https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419421_640.jpg',
  },
  {
    text: 'We serve incomparable delicacies',
    description: 'All the best restaurants with their top menu waiting for you, they can\'t wait for your order!!',
    img: 'https://cdn.pixabay.com/photo/2024/02/06/10/53/ai-generated-8556731_640.jpg',
  },
  {
    text: 'We serve incomparable delicacies',
    description: 'All the best restaurants with their top menu waiting for you, they can\'t wait for your order!!',
    img: 'https://images.herzindagi.info/image/2022/Apr/burger-tasty.jpg',
  }
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  return (
    <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center', padding: 0 }}>
      <Card style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', borderRadius: 10 }}>
        <TransitionGroup>
          <CSSTransition
            key={currentSlide}
            timeout={500}
            classNames="slide"
          >
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <CardMedia
                component="img"
                height="100%"
                image={slides[currentSlide].img}
                alt="slide image"
              />
              <CardContent style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 165, 0, 0.9)', color: 'white', padding: '16px', borderRadius: '24px', marginBottom: '20px' }}>
                <Typography variant="h5" gutterBottom>
                  {slides[currentSlide].text}
                </Typography>
                <Typography variant="body2" style={{ marginBottom: '16px' }}>
                  {slides[currentSlide].description}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button onClick={handleSkip} style={{ color: 'white' }}>
                    Skip
                  </Button>
                  <Button onClick={handleNext} style={{ color: 'white' }} endIcon={<ArrowForwardIcon />}>
                    {currentSlide === slides.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </CardContent>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Card>
    </Container>
  );
};

export default Onboarding;