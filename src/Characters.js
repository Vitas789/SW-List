import React, { Component } from 'react'

export default class Chars extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/?page=1')
    .then(res => res.json())
    .then(res => {
        this.setState({
          items: res.results,
        });
      });
  }


  render() {
    const {items} = this.state;
    return (
      <main>
        <h1>Characters:</h1>
          <ul>
            {items.map(character => (
              <li key={character.name}>
              <p>Name : {character.name}</p>
              <p>Birth year : {character.birth_year}</p>
              <p>Gender : {character.gender}</p>
              <p>Eye color : {character.eye_color}</p>
              <p>Height : {character.height}</p>
              <p>Mass : {character.mass}</p>
              <p>Skin color : {character.skin_color}</p>
              </li>
            ))}
          </ul>
        </main>
    )
  }
}