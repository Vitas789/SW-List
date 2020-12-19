import React, { Component } from "react";
import axios from "axios";
import Vehicles from "./Vehicles";

export default class Chars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios.get("https://swapi.dev/api/people/?page=2").then((res) => {
      this.setState({
        items: res.data.results,
      });
    });
  }

  render() {
    const { items } = this.state;
    return (
      <main>
        <h1>Characters:</h1>
        <ul>
          {items.map((character) => (
            <li key={character.name} className="characters__list">
              <p>Name : {character.name}</p>
              <p>Birth year : {character.birth_year}</p>
              <p>Gender : {character.gender}</p>
              <p>Eye color : {character.eye_color}</p>
              <p>Height : {character.height}</p>
              <p>Mass : {character.mass}</p>
              <p>Skin color : {character.skin_color}</p>
              <Vehicles url={character.vehicles} name={character.name} />
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
