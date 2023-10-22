import './App.css';
import React, { useState } from 'react';

function App() {
  const [selectedSection, setSelectedSection] = useState('Home');

  const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="profile">
          <h1>Praneeth Sai</h1>
        </div>
        <div className="navbar">
          {sections.map((section, index) => (
            <button
              key={index}
              className={selectedSection === section ? 'active' : ''}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
      <div className="main-content">
        {selectedSection === 'Home' && (
          <div className="content-section">
            <h2>Welcome to my portfolio!</h2>
            <p>
              Hi, I'm Praneeth, a web developer with a passion for creating beautiful and responsive websites that deliver great user experiences.
            </p>
            
            <h2>My Interests</h2>
            <ul>
              <li>HTML, CSS, JavaScript, Bootstrap</li>
              <li>Responsive Web Design</li>
              <li>Front-End Development</li>
              <li>UI/UX Design</li>
            </ul>

            <h2>My Projects</h2>
            <div className="project-card-grid">
              <div className="project-card">
                <h3>Project 1</h3>
                <p>I reated a webpage out of my own interest using HTML, CSS and JS.</p>
                <a
                  href="http://127.0.0.1:5500/Intenship%20Task/Oceanic%20Airlines%20MainPage.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to see my work
                </a>
              </div>
              <div className="project-card">
                <h3>Project 2</h3>
                <p>Just started doveloping a page in Figma, look into it</p>
                <a
                  href="https://www.figma.com/file/Cm5DFuVGjTuIMi5fQRA4u6/Login-page---basics?type=design&node-id=0%3A1&mode=design&t=g2gSOfy7hY8I1x3o-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   Click to see my work
                </a>
              </div>
            </div>

            <br></br>
            <div className="content-section">
            <h2>About Me</h2>
            <p>
              Hi, I'm Praneeth, a web developer with expertise in HTML and CSS. I'm passionate about creating beautiful and responsive websites that deliver great user experiences.
            </p>
            <p>
              Right now, I am an undergraduate student at VIT-AP University, pursuing a B.Tech in Computer Science with a specialization in VLSI.
              I have a keen interest in web design and have actively participated in various web development events.
            </p>
            <p>
              I also enjoy designing web pages in Figma and have a strong inclination toward UI/UX design.
            </p>
            <p>
              Currently, I am working as an intern to gain practical experience.
            </p>
          </div>

          <br>
          </br>
          <div className="content-section">
            <h2>Skills</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Responsive Web Design</li>
              <li>Front-End Development</li>
              <li>UI/UX Design</li>
            </ul>

            <br>
            </br>
            <div className="content-section">
            <h2>Experience</h2>
            <p>
              Right Now I am working as a Co-lead of Marketing Department in NGC Club of VIT-AP University.
            </p>

            <p>
              I am working as an inten at Octanet Services and also on teachnook. 
              In both of the orgainisations I recently joined so, I am looking forward to jain my experience and improve myself
            </p>
          </div>

          <br>
          </br>

          <div className="content-section">
            <h2>Contact Me</h2>
            <p>
              Name: S.Praneeth Sai
            </p>
            <p>
              Mobile: 7036527689
            </p>
            <p>
              Email: Praneethsai2004@gmail.com
            </p>
            <p>
              Linkedin: <a href="https://www.linkedin.com/in/praneeth-sai-swargam-0b8278290/"> Praneeth </a>
            </p>
          </div>

            
          </div>
          </div>
        )}

          </div>


        {selectedSection === 'About' && (
          <div className="content-section">
            <h2>About Me</h2>
            <p>
              Hi, I'm Praneeth, a web developer with expertise in HTML and CSS. I'm passionate about creating beautiful and responsive websites that deliver great user experiences.
            </p>
            <p>
              Right now, I am an undergraduate student at VIT-AP University, pursuing a B.Tech in Computer Science with a specialization in VLSI.
              I have a keen interest in web design and have actively participated in various web development events.
            </p>
            <p>
              I also enjoy designing web pages in Figma and have a strong inclination toward UI/UX design.
            </p>
            <p>
              Currently, I am working as an intern to gain practical experience.
            </p>
          </div>
        )}

        {selectedSection === 'Skills' && (
          <div className="content-section">
            <h2>Skills</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Responsive Web Design</li>
              <li>Front-End Development</li>
              <li>UI/UX Design</li>
              {/* Add more skills as needed */}
            </ul>
          </div>
        )}

        {selectedSection === 'Projects' && (
          <div className="content-section">
            <h2>Projects</h2>
            <p>
              You can see my project works in the Home page.
            </p>
          </div>
        )}

        {selectedSection === 'Experience' && (
          <div className="content-section">
            <h2>Experience</h2>
            <p>
              Right Now I am working as a Co-lead of Marketing Department in NGC Club of VIT-AP University.
            </p>

            <p>
              I am working as an inten at Octanet Services and also on teachnook. 
              In both of the orgainisations I recently joined so, I am looking forward to jain my experience and improve myself
            </p>
          </div>
        )}

        {selectedSection === 'Contact' && (
          <div className="content-section">
            <h2>Contact Me</h2>
            <p>
              Name: S.Praneeth Sai
            </p>
            <p>
              Mobile: 7036527689
            </p>
            <p>
              Email: Praneethsai2004@gmail.com
            </p>
            <p>
              Linkedin: <a href="https://www.linkedin.com/in/praneeth-sai-swargam-0b8278290/"> LinkedIn</a>
            </p>
          </div>
        )}
      </div>
      
  );
}

export default App;
