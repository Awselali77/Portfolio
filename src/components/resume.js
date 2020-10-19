import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Aws Alali</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>A Full-Stack Software Engineer graduate who loves coding, enjoys creating easy to use websites that solve real problems, a team player who has massive attention to details, with strong problem-solving abilities. 

an autonomous learner who has a spongy shoulder and will stand overpressure.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Jordan</p>
            <h5>Phone</h5>
            <p>(+962) 7966759742</p>
            <h5>Email</h5>
            <p>awselali77@gmail.com</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="RBK"
              schoolDescription="Intensive 20-week program,Full Stack Web Based on Hack Reactor curriculum"/>

                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="UBS"
              jobDescription="Web application for university students to sell their used books to the other students"/>

              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Wedding Planner"
                jobDescription="Web application for people that planning for marrying and you can use this application to plan the whole thing from food to place to dresses for you"/>
              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Moody"
                jobDescription="Web application that you can listen music on it"/>
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={70}
                    />
                    <Skills
                      skill="React"
                      progress={70}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;