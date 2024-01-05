import React, { useEffect, useState } from 'react';
import '../css/home.css';
import Button from '@mui/material/Button'

export default function Home() {
  const interests = [ "Coding", "Building websites", "Travelling", "Cooking", "Learning"];

  const [currentInterest, setCurrentInterest] = useState(null);

  useEffect(() => {
    let timeoutId;

    const fadeNextInterest = () => {
      if (interests.length > 0) {
        const nextInterestIndex = (interests.indexOf(currentInterest) + 1) % interests.length;
        const nextInterest = interests[nextInterestIndex];

        setCurrentInterest(nextInterest);
        timeoutId = setTimeout(fadeNextInterest, 2000); // Change the delay as needed (in milliseconds)
      }
    };

    // Start the initial timeout
    timeoutId = setTimeout(fadeNextInterest, 1000); // Change the delay as needed (in milliseconds)

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [currentInterest, interests]);

  return (
    <div className='home-container'>
      <div style={{ display: "flex", flexDirection: "column" , fontFamily: "Tektur" }}>
        <h1>Namasthe!</h1>
        <h1>I am Sushma Deegoju</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <h3 style={{ marginLeft: "25px" }}>I am interested in</h3>
            <h3 className="interest" style={{ opacity: currentInterest ? 1 : 0, transition: 'opacity 1s' }}>
                : {currentInterest}
            </h3>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Button variant="contained" style={{ marginRight: "10px", backgroundColor: "#ffbf00", color: "black" }}>Know More About Me!</Button>
        <Button variant="contained" style={{ marginRight: "10px", backgroundColor: "#ffbf00", color: "black" }}>Contact Me!</Button>
      </div>
    </div>
  );
}
