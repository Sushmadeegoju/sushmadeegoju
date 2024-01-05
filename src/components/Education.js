import React from 'react';
import '../css/Education.css';
import graduationHat from "../images/graduation-hat.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export default function Education() {
    return (
        <div className="container">
            <h2 className="main-title">I studied from:</h2>
            <div className="edu">
                <div>
                    <img className="edu-img" src={graduationHat} alt="grad image" />
                </div>
                
                <div className="edu-info">
                    <h2>Virginia Polytechnic Institute and State University</h2>
                    <h4>Master of Engineering</h4>
                    <h4>Computer Science</h4>
                    <p>Blacksburg, VA, USA</p>
                    <p><em>GPA: 3.95/4.0</em></p>
                </div>
            </div>
            <div className="edu">
                <div>
                    <FontAwesomeIcon icon={faBook} style={{ padding: '30px', fontSize: '50px' }} />
                </div>
                
                <div className="edu-info">
                    <h2>National Institute of Technology, Delhi</h2>
                    <h4>Bachelor of Technology</h4>
                    <h4>Computer Science Engineering</h4>
                    <p>Delhi, India</p>
                    <p><em>GPA: 3.81/4.0</em></p>
                </div>
            </div>
        </div>
    );
}
