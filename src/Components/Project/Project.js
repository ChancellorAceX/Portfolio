import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Icon from '../Icon/Icon';

export default function Project(props) {
  const linebreak = !props.last ? <div className='linebreak'></div> : null;
  return (
    <>
      <section className='projects' id={`project`}>
        <Fade delay={300} key='title'>
          <h1>{props.project.title}</h1>
        </Fade>
        <Fade delay={400} key='image'>
          <figure>
            <img className='projectimg' src={require(`../../Resources/Images/${props.project.image}`)} alt={props.project.imageAlt} />
            <figcaption>{props.project.imageCaption}</figcaption>
          </figure>
        </Fade>
        <Fade key='icon-box' delay={500}>
          <section className='icon-box'>
            {props.project.tech.map((item, i) =>
              <Fade delay={100 * i + 500} key={`icon-${i}`}>
                <Icon icon={item} key={`${props.project.name}-${item}`} />
              </Fade>
            )}
          </section>
        </Fade>
        <Fade delay={600}>
          <section className='buttonBox'>
            <button className='repolink button' id='bookmarkRepo' value={props.project.repo} onClick={() => window.open(props.project.repo, `${props.project.title} - repository`)}>Project Repository</button>
            <button className='livelink button' id='bookmarkLive' value={props.project.live} onClick={() => window.open(props.project.live, `${props.project.title}`)}>View Product</button>
          </section>
        </Fade>
      </section>
      {linebreak}
    </>
  );
}