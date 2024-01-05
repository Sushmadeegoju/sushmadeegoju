import React from 'react';
import cpp from '../images/C++.jpeg';
import golang from '../images/golang.jpeg';
import js from '../images/js.jpeg';
import mysql from '../images/mysql.jpeg';
import react from '../images/react.jpeg';
import mongo from '../images/mongo.jpeg';
import node from '../images/node.jpeg';
import redux from '../images/redux.jpeg';
import css from '../images/css.jpeg';
import html from '../images/html.jpeg';
import postgres from '../images/postgres.jpeg';
import vue from '../images/vue.jpeg';

const SkillsGrid = () => {
  return (
    <div style={{ display: 'flex', flexDirection:"column", flexWrap: 'wrap', justifyContent: 'space-between', margin: '20px 150px', backgroundColor: "rgb(246,246,246)"}}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={cpp} alt="C++" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
                <p>C++</p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={golang} alt="Golang" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
                <p>Golang</p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={js} alt="JavaScript" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
                <p>JavaScript</p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={mysql} alt="MySQL" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
                <p>MySQL</p>
            </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={react} alt="React" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
                <p>React</p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={mongo} alt="MongoDB" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
                <p>MongoDB</p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={node} alt="Node.js" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
                <p>Node.js</p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={redux} alt="Redux" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
                <p>Redux</p>
            </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={css} alt="CSS" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
                <p>CSS</p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={html} alt="HTML" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
                <p>HTML</p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={postgres} alt="PostgreSQL" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
                <p>PostgreSQL</p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={vue} alt="Vue.js" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
                <p>Vue.js</p>
            </div>
        </div>
    </div>
  );
};

export default SkillsGrid;
