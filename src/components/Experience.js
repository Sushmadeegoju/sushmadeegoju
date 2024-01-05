import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';
import '../css/CustomizedTimeline.css'; // Import your timeline styling

export default function CustomizedTimeline() {
  return (
    <div className="timeline-container">
      <Timeline className="timeline">
        {/* Work Experience Timeline Items */}
        <TimelineItem className="left">
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="left"
            // variant="body2"
            color="text.secondary"
        >
            <Typography variant="h6" component="span" color="#3b2e36">
            Web Developer
            </Typography>
            <Typography variant="body1" >IT Security Lab, Virginia Tech</Typography>
            <Typography variant="body2" >Blacksburg, VA</Typography>
            <Typography variant="body2" >Feb 2023 - Present</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineConnector sx={{ backgroundColor: '#3b2e36' }}/>
            <TimelineDot sx={{ backgroundColor: '#3b2e36' }}>
            <WorkIcon />
            </TimelineDot>
            <TimelineConnector sx={{ backgroundColor: '#3b2e36' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 3 }}>
            
            <Typography variant="body2" color="text.secondary" width="600px">
            <ul style={{ padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '-9px' }}>
                    Developed a React.js, Golang, and PostgreSQL-powered Key Metrics app, enabling 25% faster data visualization and real-time monitoring.
                </li>
                <li style={{ marginBottom: '-9px' }}>
                    Built a scalable and user-friendly VT Minimum Security Standards website using React, Go, and PostgreSQL, leading to a 30% rise in website traffic within the first quarter.
                </li>
                <li style={{ marginBottom: '-9px' }}>
                    Developed an efficient Hugo-powered website for IT Security Lab, achieving 50% faster page load times and improved user experience.
                </li>
                <li style={{ marginBottom: '-9px' }}>
                    Actively involved in project planning, development, and deployment within the IT Security Lab, utilizing GitLab and Slack for seamless collaboration and communication.
                </li>
                <li style={{ marginBottom: '-9px' }}>
                    Tech Stack: React.js, Material-UI, Golang, PostgreSQL, Postman, GitLab, Slack.
                </li>
            </ul>

            </Typography>
        </TimelineContent>
        </TimelineItem>

        <TimelineItem className="left">
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="left"
            color="text.secondary"
          >
            <Typography variant="h6" component="span" color="#3b2e36">
              Senior Software Engineer
            </Typography>
            <Typography variant="body1">Samsung R&D Institute</Typography>
            <Typography variant="body2">Bangalore, India</Typography>
            <Typography variant="body2">Mar 2022 - Aug 2022</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ backgroundColor: '#3b2e36' }} />
            <TimelineDot sx={{ backgroundColor: '#3b2e36' }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector sx={{ backgroundColor: '#3b2e36' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 3 }}>
            <Typography variant="body2" color="text.secondary" width="600px">
            <ul style={{ padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '-9px' }}>
                    Integrated a new feature into the existing QUIC protocol implementation using C++ to parse multiple crypto frames in a single TCP packet. This resulted in a 50% improvement in detecting QUIC-utilizing applications.
                </li>
                <li style={{ marginBottom: '-9px' }}>
                    Conducted thorough integration testing on Linux-based servers, identifying and resolving issues promptly for seamless system performance.
                </li>
                <li style={{ marginBottom: '-9px' }}>
                    Developed a Multi-layered traffic classification model using Neural Networks and achieved an accuracy of 97%.
                </li>
                <li style={{ marginBottom: '-9px' }}>
                    Led a project mentoring an intern in integrating Machine Learning frameworks into DPI for real-time algorithm performance testing.
                </li>
            </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="left">
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="left"
            variant="body2"
            color="text.secondary"
          >
            <Typography variant="h6" component="span" color="#3b2e36">
              Software Engineer
            </Typography>
            <Typography variant="body1">Samsung R&D Institute</Typography>
            <Typography variant="body2">Bangalore, India</Typography>
            <Typography variant="body2">Jan 2021 - Feb 2022</Typography>
            
          </TimelineOppositeContent>
          <TimelineSeparator >
            <TimelineConnector sx={{ backgroundColor: '#3b2e36' }}/>
            <TimelineDot sx={{ backgroundColor: '#3b2e36' }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector sx={{ backgroundColor: '#3b2e36' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 3 }}>
            <Typography variant="body2" color="text.secondary" width="600px">
            <ul style={{ padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '-9px' }}>
                    Optimized the performance of Deep Packet Inspection (DPI) Engine by sending fewer bytes for detection. Implemented the code in C++ and received the Spot Award for improving the operation time by 100%.
                </li>
                <li style={{ marginBottom: '-9px' }}>
                    Automated the regression testing environment using Python scripts, improving operational efficiency by 83% and test execution speed.
                </li>
                <li style={{ marginBottom: '-9px' }}>
                    Used GDB for precise code debugging, employing breakpoints, watchpoints, and stack analysis ensuring efficient issue resolution.
                </li>
                <li style={{ marginBottom: '-9px' }}>
                    Improved the robustness of DPI solution by writing unit test cases using Gtest framework to increase the code coverage from 40% to 90%.
                </li>
                <li style={{ marginBottom: '-9px' }}>
                    Used SonarQube and Jenkins to ensure code sanity by integration testing and continuous code quality monitoring.
                </li>
                <li style={{ marginBottom: '-9px' }}>
                    Tech Stack: C++, Bash, Python, Gtest, SonarQube, Jenkins, GDB, Wireshark, Perforce, Swarm, JIRA
                </li>
            </ul>

            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Repeat the pattern for additional work experience items */}
      </Timeline>
    </div>
  );
}
