import React from 'react';
import axios from 'axios';
import './style.css';

class AltMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: [],
      pokemonLis: [],
    }
  }

  generateLis(){
    let pokemonLis = this.state.pokemon.map((pokeType, index) => (
      <li key={`pokemon-${index}`}>
        {pokeType.name}
      </li>
    ));
    this.setState({pokemonLis})
  }

  async componentDidMount(){
    let pokemon = (await axios.get('https://pokeapi.co/api/v2/pokemon')).data.results;
    this.setState({pokemon}, this.generateLis);
  }

  render() {

    return (
      <main>
        <h3>Available Pokemon</h3>
        <ul>
          {this.state.pokemonLis}
        </ul>
      </main>
    );
  }
}

export default AltMain;
