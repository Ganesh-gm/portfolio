import React from 'react';
import './Work.css';
import CustomCarousel from '../carusel/CustomCarousel';
import bestAccess from '../../assets/images.jfif'; // Ensure this path is correct
import testimg from "../../assets/facebook.png"; // Ensure this path is correct

const Work = () => {
  const projectItems = [
    {
      image: bestAccess,
      url: "https://www.bestaccessdoors.com/",
     headline: "Best Access Doors",
      description: "Best Access Doors is a company that supplies access products for commercial and industrial use, including doors, roof hatches, and floor panels"
    },
    {
      image: testimg,
      url: "https://www.bestaccessdoors.com/",
      headline: "Best Access Doors",
      description: "Best Access Doors is a company that supplies access products for commercial and industrial use, including doors, roof hatches, and floor panels"
    }
  ];

  return (
    <section id="works">
      <h2 className='projectsTitle'>Projects</h2>
      <span className='projectDesc'></span>
      <CustomCarousel items={projectItems} ></CustomCarousel>
    </section>
  );
}

export default Work;
