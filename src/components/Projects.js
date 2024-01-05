// import React from 'react';
// import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

// const projects = [
//   {
//     title: 'Key Metrics',
//     location: 'IT Security Lab, Virginia Tech',
//     description: [
//       'Developed the Key-Metrics application, designed to aggregate and visualize real-time data from diverse platforms using ServiceNow APIs.',
//       'Developed interactive bar charts using Material-UI, enabling intuitive data exploration and visualization, leading to a 25% increase in incident prediction accuracy.',
//       'Improved data accessibility for IT security analysts, leading to 38% reduction in incident response time.',
//       'Reduced data retrieval time by 40% through optimized API integration and efficient back-end processing, improving analyst workflow.',
//     ],
//     techStack: 'React.js, Material-UI, Golang, PostgreSQL, Postman, GitLab, Slack',
//     link: 'https://example.com/key-metrics',
//   },
//   {
//     title: 'VT Minimum Security Standards',
//     location: 'IT Security Lab, Virginia Tech',
//     description: [
//       'Developed a high-availability VT Security Standards website using React, Golang, and PostgreSQL, capable of handling 5,000 concurrent users with minimal latency.',
//       "Leveraged React's virtual DOM for efficient rendering and PostgreSQL's indexing and query optimization for swift data processing.",
//       'Implemented caching strategies for frequently accessed data, further enhancing site performance and reducing server load by 25%.',
//       'Increased site traffic by 30% after launch, demonstrating strong user adoption and website\'s effectiveness in providing vital information.',
//     ],
//     techStack: 'React.js, Material-UI, Golang, PostgreSQL, Postman, GitLab, Slack',
//     link: 'https://example.com/security-standards',
//   },
//   {
//     title: 'EasyHire',
//     location: 'Virginia Tech',
//     description: [
//       'Implemented a dynamic career fair platform, using React.js for the front-end, Node.js for the back-end, and MongoDB as the database.',
//       'Engineered a scalable and responsive platform, integrating authentication systems, real-time updates, and interactive user interfaces to optimize jobseeker-recruiter interactions.',
//       'Incorporated Node Mailer API within Express framework to send email notifications, enhancing the project\'s functionality.',
//     ],
//     techStack: 'React.js, Node.js, MongoDB, Express.js, JIRA, Git',
//     link: 'https://github.com/Sushmadeegoju/EasyHire-CareerFairPlatform',
//   },
// ];

// const ProjectCard = ({ project }) => {
//   const handleClick = () => {
//     window.location.href = project.link;
//   };

//   return (
//     <Card sx={{ height: '100%', width: '400px', backgroundColor: 'rgb(243, 240, 236)' }}>
//       <CardContent>
//         <Typography variant="h6" component="div">
//           {project.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" mt={1}>
//           {project.location}
//         </Typography>
//         <Typography variant="body2">
//         <ul>
//           {project.description.map((point, index) => (
//             <li key={index}>{point}</li>
//           ))}
//         </ul>
//         </Typography>
//         <Typography variant="body2" mt={2} fontWeight="bold">
//           Tech Stack: {project.techStack}
//         </Typography>
//       </CardContent>
//       {project.link && (
//         <CardActions>
//           <Button size="small" onClick={handleClick}>
//             Learn More
//           </Button>
//         </CardActions>
//       )}
//     </Card>
//   );
// };

// const ProjectsGrid = () => {
//   return (
//     <Grid container spacing={3} style={{ margin: '15px' }}>
//       {projects.map((project, index) => (
//         <Grid item key={index} xs={12} sm={6} md={4}>
//           <ProjectCard project={project} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default ProjectsGrid;

import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import FlipCard from 'react-card-flip';

const projects = [
  {
    title: 'Key Metrics',
    location: 'IT Security Lab, Virginia Tech',
    summary: 'Key Metrics takes your messy cybersecurity data and turns it into clear, actionable visuals. Think bar charts and pie charts that reveal hidden patterns in things like vulnerabilities, attacks, and patch progress. This lets you spot threats faster, make informed decisions, and explain it all to anyone, from the CEO to the IT team. Basically, it\'s your cybersecurity superpower for understanding, communicating, and conquering threats.',
    description: [
      'Developed the Key-Metrics application, designed to aggregate and visualize real-time data from diverse platforms using ServiceNow APIs.',
      'Developed interactive bar charts using Material-UI, enabling intuitive data exploration and visualization, leading to a 25% increase in incident prediction accuracy.',
      'Improved data accessibility for IT security analysts, leading to 38% reduction in incident response time.',
      'Reduced data retrieval time by 40% through optimized API integration and efficient back-end processing, improving analyst workflow.',
    ],
    techStack: 'React.js, Material-UI, Golang, PostgreSQL, Postman, GitLab, Slack',
    // link: 'https://example.com/key-metrics',
  },
  {
    title: 'VT Minimum Security Standards',
    location: 'IT Security Lab, Virginia Tech',
    summary: 'This project offers a clear, filtered table detailing security standards for various safeguards like data protection along with several filters to help you find specific information quickly. With risk-based recommendations and industry references, it empowers you to quickly assess your security posture, prioritize safeguards, and communicate effectively with stakeholders, simplifying compliance and decision-making.',
    description: [
        'Developed a high-availability VT Security Standards website using React, Golang, and PostgreSQL, capable of handling 5,000 concurrent users with minimal latency.',
        "Leveraged React's virtual DOM for efficient rendering and PostgreSQL's indexing and query optimization for swift data processing.",
        'Implemented caching strategies for frequently accessed data, further enhancing site performance and reducing server load by 25%.',
        'Increased site traffic by 30% after launch, demonstrating strong user adoption and website\'s effectiveness in providing vital information.',
    ],
    techStack: 'React.js, Material-UI, Golang, PostgreSQL, Postman, GitLab, Slack',
    // link: 'https://example.com/security-standards',
  },
      {
        title: 'EasyHire',
        location: 'Virginia Tech',
        summary: "Level up your job hunt with Easy Hire, the dynamic career platform. Search effortlessly through verified companies using powerful filters, discover personalized recommendations, and connect directly with recruiters through interactive channels. Real-time updates keep you on top of the action, ensuring you never miss a potential match. Easy Hire - streamlining your path to landing your dream job.",
        description: [
          'Implemented a dynamic career fair platform, using React.js for the front-end, Node.js for the back-end, and MongoDB as the database.',
          'Engineered a scalable and responsive platform, integrating authentication systems, real-time updates, and interactive user interfaces to optimize jobseeker-recruiter interactions.',
          'Utilized Redux to manage application state, including authentication data, ensuring consistency and predictability across components.',
          'Incorporated Node Mailer API within Express framework to send email notifications, enhancing the project\'s functionality.',
        ],
        techStack: 'React.js, Redux, Node.js, MongoDB, Express.js, Git',
        link: 'https://github.com/Sushmadeegoju/EasyHire-CareerFairPlatform',
      },
      {
        title: 'Progress Point',
        location: 'Virginia Tech',
        summary: 'Progress Point is a centralised platform for teams to communicate and collaborate on software development projects in real-time. Progress Point provide a solution by allowing software engineers to post updates, ask questions, and share information with the entire team in real-time, without having to switch between multiple tools',
        description: [
            'Developed a centralized platform for real-time communication and collaboration for developers, using Node.js for the back-end, Handlebars for the front-end, and MongoDB as the database.',
            'I implemented the back-end infrastructure for this project using Node.js and the Express framework.'
        ],
        techStack: 'Node.js, MongoDB, Express.js',
        link: 'https://github.com/mihirlahu/ProgressPoint---Real-Time-Communication-Platform'
      },
      {
        "title": "Vegetable Mart",
        "location": "Google Playstore",
        "summary": "A full-fledged Android app that simplifies grocery shopping, offering an interactive UI and effortless online ordering.",
        "description": [
            "Streamlines the grocery buying experience with convenient online ordering and purchase.",
            "Features an intuitive and user-friendly interface built with Android XML for seamless navigation.",
            "Leverages Java for robust back-end logic and SQLite for efficient local storage of user and order data.",
            "Available for download on the Google Playstore, bringing effortless grocery shopping to Android users."
        ],
        "techStack": "Android Studio, Java, SQLite",
        "link": "https://play.google.com/store/apps/details?id=com.example.vegetablemart"  // Replace with actual Playstore link
    },
      {
        title: 'The Book Garden',
        location: 'Virginia Tech',
        summary: 'An online bookstore web application developed using the Vue.js framework, Tomcat server, and Java as the back-end would provide users with a convenient way to browse, search, and purchase books online.',
        description: [
            // 'An online bookstore web application developed using the Vue.js framework, Tomcat server, and Java as the backend would provide users with a convenient way to browse, search, and purchase books online.',
            'The Vue.js framework would be used to build the frontend of the application, providing a smooth and interactive user interface for users to interact with.',
            'The Tomcat server would be used to host the application, allowing it to be accessed from any device with a web browser.',
            'The Java backend would be responsible for handling the various functionalities of the application, such as retrieving data from the database, processing orders.',
            'Rest API is used as interface to transfer data from frontend to backend.'
        ],
        techStack: 'HTML, CSS, Typescript, Rest API, Java, Tomcat, MySQL',
        link: 'https://github.com/Sushmadeegoju/Online-Bookstore'
      },
      {
        title: 'Fancy Gallery',
        location: 'Virginia Tech',
        summary: 'Fancy Gallery is an Android app showcasing stunning photos in grids & on maps, built with MVVM architecture for smooth performance.',
        description: [
            'Fancy Gallery is an android application that follows the Model-View-ViewModel (MVVM) architecture and contains two fragments: Gallery and Map.',
            'The Gallery Fragment is responsible for displaying a grid of photos retrieved from the Flickr API, while the Map Fragment displays the location where each photo was taken.'
        ],
        techStack: 'Android Studio, Kotlin, Room, Retrofit',
        link: 'https://github.com/Sushmadeegoju/Fancy-Gallery'

      },
      {
        title: 'JobFinder',
        location: 'Virginia Tech',
        summary: "Level up your job hunt with Easy Hire, the dynamic career platform. Search effortlessly through verified companies using powerful filters, discover personalized recommendations, and connect directly with recruiters through interactive channels. Real-time updates keep you on top of the action, ensuring you never miss a potential match. Easy Hire - streamlining your path to landing your dream job.",
        description: [
            'Crafted an engaging front-end with React.js, ensuring a smooth user experience across devices.',
            'Powered the back-end with Node.js, handling data management and real-time interactions efficiently.',
            'Implemented a scalable MongoDB database to store and manage user information and job listings effectively.',
            'Orchestrated secure authentication systems to safeguard user data and maintain platform integrity.'
         ],
        techStack: 'React.js, Redux, Node.js, MongoDB, Express.js, Git',
        link: 'https://github.com/Sushmadeegoju/JobFinder',
      },
      {
        title: "Channel Blacklisting in TSCH",
        location: "NIT Delhi",
        summary: "Developed a machine learning model that optimizes TSCH networks by accurately blacklisting inefficient channels, boosting data transmission reliability.",
        description: [
            "Enhanced TSCH network performance by intelligently blacklisting channels based on their efficiency and reliability using reinforcement learning.",
            "Experimented with various machine learning algorithms to achieve an impressive 98% accuracy in channel blacklisting decisions.",
            "Built the model using Python, Numpy, and Scikit-learn, demonstrating proficiency in data analysis and machine learning techniques."
        ],
        techStack: "Python, Numpy, Scikit-learn",
        "link": "https://www.kaggle.com/code/sushmadeegoju/pdr-classifier"  // Replace with actual repository link
    }
];

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <FlipCard isFlipped={isFlipped} flipDirection="horizontal">
      <Card
        sx={{ height: '400px', width:"400px", cursor: 'pointer', backgroundColor: 'rgb(246, 246, 246)'  }}
        onClick={handleClick}
      >
        <CardContent>
          <Typography variant="h6" component="div" alignSelf="center">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1} fontWeight="bold">
            {project.location}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            {/* Display a summary or other details on the front side */}
            {/* Adjust the content as needed */}
            {project.summary}
          </Typography>
          <Typography variant="body2" mt={2} fontWeight="bold">
            Tech Stack: {project.techStack}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small" onClick={handleClick}>
            Flip me
          </Button>
          {project.link && (
            <Button size="small" onClick={() => window.open(project.link, '_blank')}>
              Source Code
            </Button>
          )}
        </CardActions>
      </Card>

      <Card
        sx={{ height: '400px', width: "400px", cursor: 'pointer' }}
        onClick={handleClick}
      >
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <ul>
                {project.description.map((point, index) => (
                <li key={index} style={{ marginBottom:"-15px" }}>{point}</li>
                ))}
            </ul>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Go Back
          </Button>
        </CardActions>
      </Card>
    </FlipCard>
  );
};

const ProjectsGrid = () => {
  return (
    <Grid container spacing={3} margin="15px">
      {projects.map((project, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsGrid;
