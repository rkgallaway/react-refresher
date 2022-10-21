import React from 'react';
import axios from 'axios';
import './style.css';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: [],
    }
  }

  async componentDidMount(){
    let pokemon = (await axios.get('https://pokeapi.co/api/v2/pokemon')).data.results;
    this.setState({pokemon});
  }

  render() {

    let pokemonList = this.state.pokemon.map((pokeType, index) => (
      <li key={`pokemon-${index}`}>
        {pokeType.name}
      </li>
    ));

    return (
      <main>
        <h3>Available Pokemon</h3>
        <ul>
          {pokemonList}
        </ul>
      </main>
    );
  }
}

export default Main;
