import React from 'react';
import PropTypes from 'prop-types';

import ForecastDisplay from 'components/ForecastDisplay.jsx';
import WeatherForm from 'components/WeatherForm.jsx';
import {getForecast,cancelWeather} from 'api/open-weather-map.js';

import './weather.css';

export default class Forecast extends React.Component {
// TODO 

    constructor(props) {
        super(props);

        this.state = {
// TODO 
            loading: false,
            masking: false
        };
// TODO 
    }

// TODO 

    render() {
        return (
            <div className={`forecast weather-bg ${this.state.forecast[0].group}`}>
                <div className={`mask ${this.state.masking ? 'masking' : ''}`}>
                    <WeatherForm city={this.state.forecast[0].city} unit={this.props.unit} onQuery={this.handleFormQuery}/>
                    <ForecastDisplay {...this.state}/>
                </div>
            </div>
        );
    }
// TODO
}