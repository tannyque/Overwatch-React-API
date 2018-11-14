import React, {Component} from 'react';
import HeroList from './HeroList';

class OverwatchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heroes: []
    }
  }

  componentDidMount(){
    fetch("https://overwatch-hero-api.herokuapp.com/api/v1/heroes")
    .then(res => res.json())
    .then(heroes => this.setState({heroes: heroes}))
  }

  render(){
    return (
      <div className="hero-container">
        <img src="images/logo.png" className="logo" alt="Overwatch Logo"/>
        <HeroList className="hero-list" heroes={this.state.heroes}/>
      </div>
    );
  }
}

export default OverwatchContainer;
