import React from 'react';
import Hero from '../components/Hero';

const HeroList = props => {
  return (
    <div className="hero-list">
      {props.heroes.map((hero, index) => {
        return <Hero hero={hero} key={index}/>
      })}
    </div>
  );
}

export default HeroList;
