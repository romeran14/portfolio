import React from 'react'
import TextSpan from './TextSpan'

const WelcomeTItle = () => {
    const firstsentence = 'Hellou,'.split('')
    const secondsentence = 'Im Romeran'.split('')
    const thirdsentence = 'Frontend Developer.'.split('')
  return (
    <div className="welcometitle">
      <div>
        {firstsentence.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? <p>&nbsp;</p> : letter}
            </TextSpan>
          );
        })}
      </div>
      <div>
        {secondsentence.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? <p>&nbsp;</p> : letter}
            </TextSpan>
          );
        })}
      </div>
      <div>
        {thirdsentence.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? <p>&nbsp;</p> : letter}
            </TextSpan>
          );
        })}
      </div>
    </div>
  );
}

export default WelcomeTItle