import React from 'react';

const Hero = props => {
  console.log(props);
  return (
    <div className="hero">
      <h2>{props.hero.name}</h2>
      <p>{props.hero.description}</p>
      <p>{props.hero.role}</p>
      <p>{props.hero.secondary}</p>
      <img src={props.hero.image} alt={props.hero.name} className="image"/>
      <p>{props.hero.difficulty} stars</p>
    </div>
  );
}

export default Hero;
