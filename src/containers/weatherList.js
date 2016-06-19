import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from './../components/chart';
import GoogleMap from './../components/googleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temperature = cityData.list.map(function(weather) {
      let temp = Number(weather.main.temp);
      temp = kelvinToFahrenheit(temp);
      temp = String(temp);
      return temp;
    });
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={ cityData.city.id }>
        <td>
          <GoogleMap lon={ lon } lat={ lat } />
        </td>
        <td>
          <Chart data={ temperature } color="orange" units="°F"/>
        </td>
        <td>
          <Chart data={ humidity } color="red" units="%"/>
        </td>
        <td>
          <Chart data={ pressure } color="blue" units="hPa" />
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table> 
    )
  }
}

function kelvinToFahrenheit(temp) {
  return Math.floor(temp * 9/5 - 459.67);
}

// normally state would be our parameter
function mapStateToProps({ weather }) {
  // coming from the weather key: (in combined reducers)
  // can replace { weather: state.weather } w/ { weather }
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);