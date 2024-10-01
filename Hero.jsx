import React, { useState, useEffect } from 'react';
import firstimg from './imags/first_hero.jpg'

const Hero = () => {
  const phrases = [
    "I'm Full-Stack Web Developer.",
  ];

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const typingSpeed = 150; 
  const pauseDuration = 3000; 

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (index < currentPhrase.length) {
        setText(currentPhrase.substring(0, index + 1));
        setIndex(index + 1);
      } else {
        setTimeout(() => {
          setIndex(0);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, pauseDuration);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    
    return () => clearTimeout(typingTimeout);
  }, [text, index, currentPhraseIndex]);

  return (
    <div className='bg-black text-white text-center py-16' id='Home'>
      <img
        src={firstimg}
        alt=''
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
       Hey, I'm{' '}
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          HELLY VIRUGAMA.
        </h1>
        {text} 
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I interest in building modern and responsive web applications.
      </p>
    </div>
  );
};

export default Hero;
