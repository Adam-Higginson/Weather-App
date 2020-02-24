import React from 'react';

export default class WeatherCard extends React.Component {

    getIconForWeather() {
        switch (this.props.weather.weather[0].main) {
            case "Cloudy" : return "☁️";
            case "Rain" : return "🌧️";
            case "Clear" : return "☀️";
            default : return "?";
        }
    }

    render() {
        return (
            <div className="weatherCard">
                <h2>{this.props.weather && this.props.weather.name}</h2>
                <h3>{this.props.weather && this.props.weather.weather[0].main}</h3>
                <div className="weatherIconContainer">
                    <p className="weatherIcon">{this.getIconForWeather()}</p>
                </div>
            </div>
        );
    }
}