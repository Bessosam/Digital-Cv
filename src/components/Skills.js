import React from 'react';
import java from '../logo-svg/java.svg';
import javascript from '../logo-svg/javascript-js-seeklogo.com.svg';
import css from '../logo-svg/css-3.svg';
import gitbash from'../logo-svg/gitbash.svg';
import AWS from '../logo-svg/Amazon_Web.svg'
const skillImages = {
  Java: java,
  JavaScript: javascript,
  Css: css,
  GitBash: gitbash,
 AWSServices:AWS,
 };

function Skills() {
  const skillsList = [
    'Java',
    'JavaScript',
    'Css',
    'GitBash',
    'AWSServices'
  ];


  return (
    <div className="skills">
      <h2>My Skills</h2>
      <ul>
        {skillsList.map((skill, index) => (
          <ol key={index}>
            <img
              src={skillImages[skill]} 
              alt={`${skill} logo`}
              style={{ width: '52px', marginRight: '10px', padding:'4px' }} 
            />
            {skill}
          </ol>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
