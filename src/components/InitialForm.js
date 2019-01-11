import React from "react";
import axios from "axios";
import PassForm from "./PassForm";
const API_KEY = "768b7affacfcf020fbfd4f8ac847d932";

class InitialForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",

      min_temp: "",
      max_temp: ""
    };

    this.fetchLocation = this.fetchLocation.bind(this);
  }
  onChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  fetchLocation = e => {
    e.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          this.state.input
        }&APPID=${API_KEY}`
      )

      .then(response => {
        // handle success
        let min_temp = (response.data.main.temp_min - 273.15).toFixed(2);
        let max_temp = (response.data.main.temp_max - 273.15).toFixed(2);
        this.setState({
          min_temp,
          max_temp
        });
        console.log(response.data.main);
      });
  };

  render() {
    return (
      <div className="ui search ">
        <form onSubmit={this.fetchLocation}>
          <br />
          <h2>Enter the city name</h2>
          <div className="ui icon input">
            <input onChange={this.onChange} className="prompt" />
            <i class="search icon" />
          </div>
          <br />
          <br />

          <button className="ui secondary button">Submit</button>
        </form>
        <PassForm
          min_value={this.state.min_temp}
          max_value={this.state.max_temp}
        />
      </div>
    );
  }
}

export default InitialForm;
