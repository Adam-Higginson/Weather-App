import React from 'react';
import WeatherForm from "./WeatherForm";
import WeatherCard from "./WeatherCard";
import {getWeatherForCityName} from "../services/WeatherService";

export default class WeatherFormHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldDisplayWeatherCards: false,
            selectedCity: null
        };

        this.onCitySelected = this.onCitySelected.bind(this);

    }

    onCitySelected(cityName) {
        getWeatherForCityName(cityName)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else
                    return Promise.reject();
            })
            .then(data => this.setState({
                shouldDisplayWeatherCards: true,
                selectedCity: cityName,
                currentWeather: data
            }), () => this.setState({
                shouldDisplayWeatherCards: false,
                selectedCity: cityName,
                currentWeather: null
            }))
            .catch(console.log);
    }

    render() {
        const showWeather = this.state.shouldDisplayWeatherCards;

        return (
            <div className="surveyHolder">
                <h1 className="title">Forecast Generator</h1>
                <WeatherForm onCitySelected={this.onCitySelected}/>

                {showWeather === true && <WeatherCard weather={this.state.currentWeather}/>}
            </div>
        );
    }
}