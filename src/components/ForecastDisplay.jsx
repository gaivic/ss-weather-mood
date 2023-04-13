import React from 'react';
import PropTypes, { array } from 'prop-types';

import './ForecastDisplay.css';

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

        // return (
        //     <div>
        //         <div className={`weatherF-display ${this.props.masking ? 'masking' : ''}`}>
        //             <div className='container'>
        //                 {/* // TODO */}
        //                 <p className='description'>Tomorrow:
        //                     {/* // TODO */}
        //                 </p>&nbsp;
        //                 <h1 className='temp'>
        //                     <div className='tomorrowtmp'>
        //                         {/* // TODO */}
        //                     </div>
        //                 </h1>
        //             </div>
        //         </div>
        //         <div className='container fourdaycontainer'>
        //             <div className='row fourday'>
        //                 {/* // TODO */}
        //             </div>
        //         </div>
        //     </div>
        // );
        return (
            <div className={`weather-display ${this.props.masking
                ? 'masking'
                : ''}`}>
                <img src={`images/w-${this.props.group}.png`} />
                <p className='description'>{this.props.description}</p>&nbsp;
                <h1 className='temp'>
                    <span className='display-3'>{this.props.temp.toFixed(0)}&ordm;</span>
                    &nbsp;{(this.props.unit === 'metric')
                        ? 'C'
                        : 'F'}
                </h1>
            </div>
        );
    }
}