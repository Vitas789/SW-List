import React, { Component } from "react";
import axios from "axios";

export default class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      class: ["modal"],
    };
  }

  componentDidMount() {
    if (this.props.url.length > 0) {
      this.props.url.forEach((io) => {
        axios.get(io).then((res) => {
          this.setState((state) => {
            return { vehicles: state.vehicles.concat(res.data) };
          });
        });
      });
    }
  }

  render() {
    const { vehicles } = this.state;
    if (this.props.url.length > 0) {
      return (
        <div className="vehicle">
          <button
            onClick={() => {
              this.setState({ class: "modal_active" });
            }}
          >
            Vehicle
          </button>
          <div className={this.state.class}>
            <div className="modal__content">
              <h2>Vehicle list of {this.props.name}</h2>
              <button
                onClick={() => {
                  this.setState({ class: "modal" });
                }}
                className="button_close"
              >
                Close
              </button>
              {vehicles.map((vehicle) => (
                <ol key={vehicle.name} className="vehicle__list">
                  <h3>Name : {vehicle.name}</h3>
                  <p>Cargo capacity : {vehicle.cargo_capacity}</p>
                  <p>Crew: {vehicle.crew}</p>
                  <p>Vehicle class: {vehicle.vehicle_class}</p>
                  <p>Model: {vehicle.model}</p>
                  <p>Max atmosphering speed: {vehicle.max_atmosphering_speed}</p>
                  <p>Passengers: {vehicle.passengers}</p>
                  <p>Manufacturer: {vehicle.manufacturer}</p>
                  <p>Cost in credits: {vehicle.cost_in_credits}</p>
                </ol>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return <p>The character does not own any vehicle</p>;
    }
  }
}
