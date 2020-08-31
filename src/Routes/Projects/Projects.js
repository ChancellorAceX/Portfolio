import React from 'react';
import ProjectObject from '../../Resources/ProjectObject';
import Project from '../../Components/Project/Project';
import { withRouter } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import './Projects.css';

function Projects(props) {
  return (
    <>
      {ProjectObject.map((project, i) => {
        return (
          <Fade cascade fraction={0.01} delay={100} key={project.title}>
            <Project project={project} key={project.title} last={i === ProjectObject.length - 1} />
          </Fade>
        );
      })
      }
    </>
  );
}

export default withRouter(Projects);