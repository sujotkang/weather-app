import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Title from './Components/Title.js';
import Form from './Components/Form.js';
import Weather from './Components/Weather.js';

const API_KEY = "649c234adc10dc8fe19ab1327c198b64";


class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""

      });
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: ". . . enter the walues . . ."

      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Title />
            <Form getWeather={this.getWeather} />
          </div>
          <div className="col">
            <Weather temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
