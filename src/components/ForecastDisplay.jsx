import React from 'react';
import PropTypes, { array } from 'prop-types';

import './ForecastDisplay.css';

export default class WeatherDisplayForecast extends React.Component {
    // TODO

    constructor(props) {
        super(props);
    }

    render() {
        // TODO

        return (
            <div>
                <div className={`weatherF-display ${this.props.masking ? 'masking' : ''}`}>
                    <div className='container'>
                    {/* // TODO */}
                        <p className='description'>Tomorrow: 
                        {/* // TODO */}
                        </p>&nbsp;
                        <h1 className='temp'>
                            <div className='tomorrowtmp'>
                            {/* // TODO */}
                            </div>
                        </h1>
                    </div>
                </div>
                <div className='container fourdaycontainer'>
                    <div className='row fourday'>
                    {/* // TODO */}
                    </div>
                </div>
            </div>
        );
    }
}