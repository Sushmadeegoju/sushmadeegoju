import myFormalPic from '../images/my_formal_pic.jpg';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function About() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    }
    return (
        <div style={{ display: "flex", padding: "30px", backgroundColor: "rgb(246,246,246)"}}>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <img src={myFormalPic} width="500" height="550" alt="sushma's pic"/>
                <Button variant="contained" style={{ alignSelf: "center", marginTop: "10px", maxWidth: "150px",backgroundColor: "#3b2e36" }} onClick={handleClick}>Contact Me!</Button>
            </div>
            
            <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#333', lineHeight: 1.6, maxWidth: '700px', margin: 'auto' }}>
                <p><strong>🚀 Who Am I?</strong></p>

                <p>I'm Sushma, a tech enthusiast who loves solving puzzles and building things. Think of me as a code whisperer and web weaver, crafting magical experiences with lines of code and pixels.</p>

                <p><strong>🌟 My Journey:</strong></p>

                <p>My journey started at Samsung, where I tackled complex code like a ninja, optimizing tasks and making things run faster. My superpowers even earned me a cool award, boosting my confidence to the moon!</p>

                <p><strong>💻 Code & Web:</strong></p>

                <p>But code isn't my only language. I also speak the language of websites, building them up with tools like HTML, CSS, React, and more. Think interactive experiences that sing with efficiency and dance with user-friendliness.</p>

                <p><strong>🚀 Current Adventure:</strong></p>

                <p>Right now, I'm busy weaving a website for the IT Security Lab at Virginia Tech, making sure the digital world stays safe and sound. Think high-tech gadgets mixed with user-friendly magic.</p>

                <p><strong>🌱 Challenges & Growth:</strong></p>

                <p>Challenges are my fuel, and I'm always eager to learn and grow. That's how I went from Software Engineer to Senior at Samsung in record time!</p>

                <p><strong>🎨 Passion & Excitement:</strong></p>

                <p>Sure, I have the technical skills – the languages, the brainpower, the drive to deliver. But what makes me tick is the excitement, the passion that transforms every project into an adventure. This isn't just a job, it's a playground where I can learn, create, and connect with fellow tech explorers.</p>

                <p><strong>👋 Ready to Connect?</strong></p>

                <p>So, if you're looking for a techie who speaks fluent efficiency, builds user-friendly magic, and loves a good tech adventure, let's chat! My code is just the beginning of the story, and I can't wait to see what we can create together.</p>

                <p><strong>🚀 Ready to join the fun? Reach out and say hello!</strong></p>
                </div>


        </div>
        
    )
}