import React from 'react';
import './Skils.css';
// import { FaCode } from 'react-icons/fa';
import javascript from '../../assets/javascript.png';
import laravel from '../../assets/laravel.png';
import node from '../../assets/node.png';
import zohoone from '../../assets/zoho-one-512.png';
import php from '../../assets/php.png';
import reactImg from '../../assets/logo512.png';
import crm from '../../assets/crm.png';
import creator from '../../assets/Creator.png';
import zoho from '../../assets/logo.png';
import Analytics from '../../assets/zoho-Analytics-1024x1024.png';
const Skils = () => {
  const SkillCard = ({ icon, skill }) => {
    return (
      <div className="skill-card">
        <div className="icon">{icon}</div>

        <h1>{skill}</h1>
      </div>
    );
  };
  return (
    <div >
      <div>
        <section id="skils">
          <span className='skillTitle'>What I do </span>
          <span className='skilDesc'>I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript, PHP, and Deluge</span>
          <div className='skilBars'>
            <div className="skilbar">
              <img src='' alt='' className='"skilBarImg'></img>
              <div className='skilBarText'>
                <h2>Front-End Developer: React.js Specialist</h2>
                <p>Creating dynamic, responsive user interfaces with React.js, focusing on performance and user experience</p>
              </div>
            </div>
            <div className="skilbar">
              <img src='' alt='' className='"skilBarImg'></img>
              <div className='skilBarText'>
                <h2>Back-End Developer: Expert in Laravel & PHP</h2>
                <p>Creating dynamic, responsive user interfaces with React.js, focusing on performance and user experience</p>
              </div>
            </div>
            <div className="skilbar">
              <img src='' alt='' className='"skilBarImg'></img>
              <div className='skilBarText'>
                <h2>Zoho One Developer: Integrated Solutions Expert</h2>
                <p>Designing and implementing comprehensive business solutions using Zoho One, enhancing productivity and efficiency</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-grid">
            <SkillCard icon={<img className='icon_image' src={javascript} alt='javascript'/>} skill="JavaScript" />
            <SkillCard icon={<img className='icon_image' src = {reactImg} alt = 'react'/>} skill="React" />
            <SkillCard icon={<img className='icon_image' src={node} alt='node'/>} skill="Node.js" />
            <SkillCard icon={<img className='icon_image' src={php} alt='php'/>} skill="PHP" />
            <SkillCard icon={<img className='icon_image' src={laravel} alt='laravel'/>} skill="Laravel" />
            <SkillCard icon={<img className='icon_image' src = {zoho} alt = "Deluge"/>} skill="Deluge (Zoho Scripting Language)" />
            <SkillCard icon={<img className='icon_image' src={zohoone} alt='zohoone'/>} skill="Zoho One" />
            <SkillCard icon={<img className='icon_image' src={creator} alt = 'creator'/>} skill="Zoho Creator" />
            <SkillCard icon={<img className='icon_image' src={crm} alt='crm'/>} skill="Zoho CRM" />
            <SkillCard icon={<img className='icon_image' src={Analytics} alt='analytics'/>} skill="Zoho Analytics" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skils