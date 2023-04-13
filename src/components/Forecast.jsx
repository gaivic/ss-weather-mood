import React from 'react';
import PropTypes from 'prop-types';

import ForecastDisplay from 'components/ForecastDisplay.jsx';
import WeatherForm from 'components/WeatherForm.jsx';
import { getForecast, cancelWeather } from 'api/open-weather-map.js';
// import { getWeather, cancelWeather } from 'api/open-weather-map.js';

import './weather.css';

export default class Forecast extends React.Component {
    // TODO 
    static propTypes = {
        masking: PropTypes.bool,
        group: PropTypes.string,
        description: PropTypes.string,
        temp: PropTypes.number,
        unit: PropTypes.string
    };

    static getInitWeatherState() {
        return {
            city: 'na',
            code: -1,
            group: 'na',
            description: 'N/A',
            temp: NaN
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            // TODO 
            forecast: [
                {
                    city: 'na',
                    code: -1,
                    group: 'na',
                    description: 'N/A',
                    temp: NaN
                },
                {
                    city: 'na',
                    code: -1,
                    group: 'na',
                    description: 'N/A',
                    temp: NaN
                },
                {
                    city: 'na',
                    code: -1,
                    group: 'na',
                    description: 'N/A',
                    temp: NaN
                },
                {
                    city: 'na',
                    code: -1,
                    group: 'na',
                    description: 'N/A',
                    temp: NaN
                },
                {
                    city: 'na',
                    code: -1,
                    group: 'na',
                    description: 'N/A',
                    temp: NaN
                }

            ],
            loading: false,
            masking: false
        };
        // TODO 
        this.handleFormQuery = this.handleFormQuery.bind(this);

    }

    // TODO 
    componentDidMount() {
        this.getForecast('Hsinchu', 'metric');
    }

    componentWillUnmount() {
        if (this.state.loading) {
            cancelWeather();
        }
    }

    render() {
        return (
            <div className={`forecast weather-bg ${this.state.forecast[0].group}`}>
                <div className={`mask ${this.state.masking ? 'masking' : ''}`}>
                    <WeatherForm city={this.state.forecast[0].city} unit={this.props.unit} onQuery={this.handleFormQuery} />
                    <ForecastDisplay {...this.state} />
                </div>
            </div>
        );
    }
    // render() {
    //     return (
    //         <div className={`forecast weather-bg ${this.state.group}`}>
    //             <div className={`mask ${this.state.masking ? 'masking' : ''}`}>
    //                 <WeatherForm city={this.state.city} unit={this.props.unit} onQuery={this.handleFormQuery} />
    //                 <ForecastDisplay {...this.state} />
    //             </div>
    //         </div>
    //     );
    // }
    // render() {
    //     return (
    //         <div className={`today weather-bg ${this.state.group}`}>
    //             <div className={`mask ${this.state.masking ? 'masking' : ''}`}>
    //                 <WeatherDisplay {...this.state} />
    //                 <WeatherForm city={this.state.city} unit={this.props.unit} onQuery={this.handleFormQuery} />
    //             </div>
    //         </div>
    //     );
    // }
    // TODO
    getForecast(city, unit) {
        this.setState({
            loading: true,
            masking: true,
            city: city // set city state immediately to prevent input text (in WeatherForm) from blinking;
        }, () => { // called back after setState completes
            getForecast(city, unit).then(weather => {
                this.setState({
                    ...weather,
                    loading: false
                }, () => this.notifyUnitChange(unit));
            }).catch(err => {
                console.error('Error getting weather', err);

                this.setState({
                    ...Forecast.getInitWeatherState(unit),
                    loading: false
                }, () => this.notifyUnitChange(unit));
            });
        });

        setTimeout(() => {
            this.setState({
                masking: false
            });
        }, 600);
    }
    // getWeather(city, unit) {
    //     this.setState({
    //         loading: true,
    //         masking: true,
    //         city: city // set city state immediately to prevent input text (in WeatherForm) from blinking;
    //     }, () => { // called back after setState completes
    //         getWeather(city, unit).then(weather => {
    //             this.setState({
    //                 ...weather,
    //                 loading: false
    //             }, () => this.notifyUnitChange(unit));
    //         }).catch(err => {
    //             console.error('Error getting weather', err);

    //             this.setState({
    //                 ...Today.getInitWeatherState(unit),
    //                 loading: false
    //             }, () => this.notifyUnitChange(unit));
    //         });
    //     });

    //     setTimeout(() => {
    //         this.setState({
    //             masking: false
    //         });
    //     }, 600);
    // }

    handleFormQuery(city, unit) {
        this.getForecast(city, unit);
    }

    notifyUnitChange(unit) {
        if (this.props.units !== unit) {
            this.props.onUnitChange(unit);
        }
    }
}