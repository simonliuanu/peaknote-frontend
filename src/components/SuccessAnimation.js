import React, { useEffect, useState } from 'react';
import './SuccessAnimation.css';

const SuccessAnimation = ({ isVisible, onComplete }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Show the success text after checkmark appears
      setTimeout(() => {
        setShowText(true);
      }, 800);

      // Hide the animation after 3 seconds
      setTimeout(() => {
        setShowText(false);
        onComplete();
      }, 3000);
    } else {
      setShowText(false);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`share-success-animation ${isVisible ? 'show' : ''}`}>
      <div className="success-checkmark">
        <i className="fas fa-check"></i>
        <div className={`success-text ${showText ? 'show' : ''}`}>Finish!</div>
      </div>
    </div>
  );
};

export default SuccessAnimation;