import React from 'react';
import './AboutMe.css';
import { Fade } from 'react-awesome-reveal';

export default function AboutMe(props) {
  return (
    <section className='about'>
      <Fade>
        <p className='about'>
          Back during the pandemic, I took the opportunity to expand my skillset, specifically into web development. At the time I had a long overdue interest in software development, and i'm so glad that I decided to persue this new career. With my previous knowledge obtained from my Biomedical Engineering degree at Georgia Tech, I quickly graduated from the Engineering Immersion bootcamp at Thinkful where I learned how to implement various programming technologies and methodologies. And since then have expanded my techstack and skill set drastically. Especially being the sole developer for my employer going on nearly a year now. Professionally, I have a strong interest in continuing my education and providing valuable services to society. I also believe that belonging to a team of developers would be a very good step for me, for purposes of learning about alternative workflows and team partnership in the a dev environment. My combined educations allows me a unique perspective on the process that most developers won't have. I understand the importance of continually thinking about the end user as a project is being developed, and all the complications that implies. That being said, I love problem solving, and I feel like I have finally found my niche to allow my unique skills to flourish.
        </p>
      </Fade>
      <Fade>
        <p className='about'>
          Outside of coding I have several interests. I'm a DnD Dungeon Master for two seperate campaigns (completely homebrewed) and love playing all sorts of tabletop games. I'm a percussionist, avid video gamer (primarily RPGs), comic book fan, TV/movie enthusiast, and an all around general nerd. Every year you can find me at DragonCon either nerding out on one of my interests, joking with people as Deadpool, or just wandering around having a good time.
        </p>
      </Fade>
    </section>
  );
}