import React, { useState, useEffect } from 'react';
import './Home.css';

const Hero = () => {
  const [joke, setJoke] = useState('');

  const bookJokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you get if you cross a vampire with a snowman? Frostbite!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a fish wearing a crown? King Neptune!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a fake noodle? An impasta!",
    "How do you organize a space party? You planet!",
    "Why don't eggs tell jokes? Because they might crack up!",
    "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
    "Why did the math book look sad? Because it had too many problems!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a bear with no teeth? A gummy bear!",
    "How does a penguin build its house? Igloos it together!"
  ];

  useEffect(() => {
    const randomJoke = bookJokes[Math.floor(Math.random() * bookJokes.length)];
    setJoke(randomJoke);
  }, []);

  return (
    <section className="hero">
      <div className="content">
        <h2>Welcome to 3 Musketeers</h2>
        <p style={{textAlign: "center"}}>{joke}</p>
        <button onClick={() => {
          const randomJoke = bookJokes[Math.floor(Math.random() * bookJokes.length)];
          setJoke(randomJoke);
        }}>Tell me another joke</button>
      </div>
      <div className="waves"></div>
    </section>
  );
}

export default Hero;
