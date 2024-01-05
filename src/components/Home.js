import React, { useEffect, useState } from 'react';
import '../css/home.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const interests = ["Coding", "Building websites", "Travelling", "Cooking", "Learning"];

  const [currentInterest, setCurrentInterest] = useState(null);
  const [greeting, setGreeting] = useState('Hi...');

  const handleAbout = () => {
    navigate('/about');
  }

  const handleContact = () => {
    navigate('/contact');
  }

  
  useEffect(() => {
    let intervalId;

    const displayGreeting = (greetingText, delay) => {
      let index = 0;
      intervalId = setInterval(() => {
        setGreeting((prev) => prev + greetingText[index]);
        index++;

        if (index === greetingText.length) {
          clearInterval(intervalId);
        }
      }, delay);
    };

    const fadeNextInterest = () => {
      if (interests.length > 0) {
        const nextInterestIndex = (interests.indexOf(currentInterest) + 1) % interests.length;
        const nextInterest = interests[nextInterestIndex];

        setCurrentInterest(nextInterest);
        setGreeting(''); // Clear previous greeting
        displayGreeting('Hi...Hello...Namasthe \uD83D\uDE4F', 100);
      }
    };

    // Start the initial timeout
    const initialTimeoutId = setTimeout(fadeNextInterest, 1000); // Change the delay as needed (in milliseconds)

    // Clear the timeout and interval on component unmount to avoid memory leaks
    return () => {
      clearTimeout(initialTimeoutId);
      clearInterval(intervalId);
    };
  }, [currentInterest, interests]);

  return (
    <div className='home-container'>
      <div style={{ display: "flex", flexDirection: "column", fontFamily: "Tektur" }}>
        <h1>{greeting}</h1>
        <h1 sx={{ marginBottom: "50px" }}>I am Sushma Deegoju</h1>
        <div style={{ display: "flex", flexDirection: "row", fontFamily: "Roboto" }}>
          <h3 style={{ marginLeft: "25px" }}>I am interested in</h3>
          <h3 className="interest" style={{ opacity: currentInterest ? 1 : 0, transition: 'opacity 1s' }}>
            : {currentInterest}
          </h3>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Button variant="contained" style={{ marginRight: "10px", backgroundColor: "rgb(236 140 116)", color: "black" }} onClick={handleAbout}>Know More About Me!</Button>
        <Button variant="contained" style={{ marginRight: "10px", backgroundColor: "rgb(236 140 116)", color: "black" }} onClick={handleContact}>Contact Me!</Button>
      </div>
    </div>
  );
}
