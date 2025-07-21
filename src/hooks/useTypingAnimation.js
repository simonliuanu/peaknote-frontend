import { useState, useEffect } from 'react';

const useTypingAnimation = (messages, delay = 5000) => {
  const [currentMessage, setCurrentMessage] = useState(messages[0] || '');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => {
        const currentIndex = messages.indexOf(prevMessage);
        const nextIndex = (currentIndex + 1) % messages.length;
        return messages[nextIndex];
      });
    }, delay);

    return () => clearInterval(interval);
  }, [messages, delay]);

  return currentMessage;
};

export default useTypingAnimation;