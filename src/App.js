import './App.css';
import { experiences } from './experiences';
import React, { useState, useRef} from 'react';
import headshot_1 from "./images/Subject.png";
import {projects, projectContent} from "./projects.js"

function App() {
  const [tab, setState] = useState("experience");

  function changeTab(e) {
    e.preventDefault();
    setState(e.currentTarget.textContent);
  }

  return (
    <div className="App-body">
    <div className="App-fullPage">
      <div className="App-page">
        <div className="App-rectangle">
          <div className="App-headshotWrapper">
            <img className="App-headshot" src={headshot_1} alt="my headshot"/>
          </div>
          <h1>hello, i'm hannah.</h1>
          <div className="App-socials">
            <a href="mailto:hannahkm@mit.edu" className="App-socialLink">email</a>
            <a href="https://www.github.com/hannahkm" target="_blank" className="App-socialLink">github</a>
            <a href="https://www.linkedin.com/in/hannah-kim24" target="_blank" className="App-socialLink">linkedin</a>
          </div>
          <p>i am a senior at MIT (co 2024) studying computer science with a concentration in linguistics. i enjoy taking on creative and challenging projects, and i am especially passionate about spreading my love for technology to others through education.</p>
        </div>
        <div className="App-experience">
          <div className="App-aboutButtons">
            <p className="App-aboutButton" onClick={changeTab}>experience</p>
            <p className="App-aboutButton" onClick={changeTab}>my interests</p>
            <p className="App-aboutButton" onClick={changeTab}>projects</p>
            <p className="App-aboutButton" onClick={changeTab}>writing</p>
          </div>
          <div className="App-aboutSectionWrapper">
          {tab === "experience" ? 
            <div className="App-aboutSection">
              {experiences.map((d) => 
                <div className="App-experienceBlock">
                  <div className="App-experienceLine">
                    <div className="App-experienceCompany">{d.company}</div>
                    <div className="App-experienceDate">{d.dates}</div>
                  </div>
                  <div className="App-experienceLine">
                    <div className="App-experiencePosition">{d.position}</div>
                    <div className="App-experienceLocation">{d.location}</div>
                  </div>
                  <div className="App-experienceBlurb">
                    <div className="App-experienceBlurb">{d.summary}</div>
                  </div>
                  <hr/>
                </div>
              )}
            </div>
          : tab === "my interests" ?
            <div className="App-aboutSection">
              <p>here are few of the things i've found interesting or want to explore!</p>
              <p>what i enjoy:</p>
              <ul>
                <li>creating platforms with and for users</li>
                <li>reading books</li>
                <li>writing novellas and short stories</li>
                <li>making spotify playlists</li>
                <li>coffee and cafes</li>
                <li>exploring linguistics and other languages</li>
              </ul>
              <p>what i want to explore:</p>
              <ul>
                <li>creative applications in programming (i.e. creating apps in Unity)</li>
                <li>learning Blender</li>
                <li>upcycling clothes</li>
                <li>film photography</li>
                <li>graphic design ~is my passion~</li>
                <li>archery -- i took a class and i loved it!</li>
              </ul>
            </div>
          : tab == "writing" ?
            <div className="App-aboutSection">
              coming soon...
            </div>
          :
            <div className="App-aboutSection">
              <div className="App-projectTabsWrapper">
              <div className="App-projectTabs">
                {projects.map((p) => 
                  <div className="App-projectAbout">
                    <div className="App-projectTitle" onClick={()=> window.open(projectContent[p.name].link, "_blank")}>{p.name}</div>
                    <div className="App-projectDescription">
                      {projectContent[p.name].description.map((para) =>
                        <p className="App-projectDescriptionParagraph">{para}</p>
                      )}
                      <p><i>built using: {projectContent[p.name].stack}</i></p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            </div>
          }
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
