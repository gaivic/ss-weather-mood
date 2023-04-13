import React from 'react';
import PropTypes, { array } from 'prop-types';

import './ForecastDisplay.css';
const days = ['Sun: ', 'Mon: ', 'Tue: ', 'Wed: ', 'Thur: ', 'Fri: ', 'Sat: '];
const now = new Date();
const day = now.getDay();

export default class WeatherDisplayForecast extends React.Component {
    // TODO
    static propTypes = {
        masking: PropTypes.bool,
        group: PropTypes.string,
        description: PropTypes.string,
        temp: PropTypes.number,
        unit: PropTypes.string
    };



    constructor(props) {
        super(props);
    }

    render() {
        // TODO

        return (
            <div>
                <div className={`weatherF-display ${this.props.masking ? 'masking' : ''}`}>
                    <div className='container'>
                        <img src={`images/w-${this.props.forecast[0].group}.png`} />
                        <p className='description'>Tomorrow:
                            {this.props.forecast[0].description}
                        </p>&nbsp;
                        <h1 className='temp'>
                            <div className='tomorrowtmp'>
                                <span className='display-3'>{this.props.forecast[0].temp.toFixed(0)}&ordm;</span>
                                &nbsp;{(this.props.unit === 'metric')
                                    ? 'C'
                                    : 'F'}
                            </div>
                        </h1>
                    </div>
                </div>
                <div className='container fourdaycontainer'>
                    <div className='row fourday'>
                        <div className="col">
                            <span className='display-5'>{days[(day + 1) % 7]}{this.props.forecast[1].temp.toFixed(0)}&ordm;</span>
                            <i className={`owf owf-${this.props.forecast[1].code} owf-3x`} alt="..." style={{ maxHeight: '10px' }} />

                        </div>
                        <div className="col">
                            <span className='display-5'>{days[(day + 2) % 7]}{this.props.forecast[2].temp.toFixed(0)}&ordm;</span>
                            <i className={`owf owf-${this.props.forecast[2].code} owf-3x`} alt="..." style={{ maxHeight: '10px' }} />

                        </div>
                        <div className="col hideMobileDevices">
                            <span className='display-5 '>{days[(day + 3) % 7]}{this.props.forecast[3].temp.toFixed(0)}&ordm;</span>
                            <i className={`owf owf-${this.props.forecast[3].code} owf-3x`} alt="..." style={{ maxHeight: '10px' }} />

                        </div>
                        <div className="col hideMobileDevices">
                            <span className='display-5 '>{days[(day + 4) % 7]}{this.props.forecast[4].temp.toFixed(0)}&ordm;</span>
                            <i className={`owf owf-${this.props.forecast[4].code} owf-3x`} alt="..." style={{ maxHeight: '10px' }} />

                        </div>
                    </div>
                </div>
            </div>
        );
        // return (
        //     <div className={`weather-display ${this.props.masking ? 'masking' : ''}`}>
        //         <img src={`images/w-${this.props.forecast[0].group}.png`} />
        //         <p className='description'>{this.props.forecast[0].description}</p>&nbsp;
        //         <h1 className='temp'>
        //             <span className='display-3'>{this.props.forecast[0].temp.toFixed(0)}&ordm;</span>
        //             &nbsp;{(this.props.unit === 'metric')
        //                 ? 'C'
        //                 : 'F'}
        //         </h1>
        //     </div>
        // );
    }
}