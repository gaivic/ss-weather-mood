import axios from 'axios';

// TODO replace the key with yours
const key = '2d430ea463341a503a0d623ae65ea8fd';
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${key}`;
// TODO
const baseUrlFore = `http://api.openweathermap.org/data/2.5/forecast?appid=${key}`;

export function getWeatherGroup(code) {
    let group = 'na';
    if (200 <= code && code < 300) {
        group = 'thunderstorm';
    } else if (300 <= code && code < 400) {
        group = 'drizzle';
    } else if (500 <= code && code < 600) {
        group = 'rain';
    } else if (600 <= code && code < 700) {
        group = 'snow';
    } else if (700 <= code && code < 800) {
        group = 'atmosphere';
    } else if (800 === code) {
        group = 'clear';
    } else if (801 <= code && code < 900) {
        group = 'clouds';
    }
    return group;
}

// TODO

export function capitalize(string) {
    return string.replace(/\b\w/g, l => l.toUpperCase());
}

let weatherSource = axios.CancelToken.source();

export function getWeather(city, unit) {
    var url = `${baseUrl}&q=${encodeURIComponent(city)}&units=${unit}`;

    console.log(`Making request to: ${url}`);

    return axios.get(url, { cancelToken: weatherSource.token }).then(function (res) {
        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            return {
                city: capitalize(city),
                code: res.data.weather[0].id,
                group: getWeatherGroup(res.data.weather[0].id),
                description: res.data.weather[0].description,
                temp: res.data.main.temp,
                unit: unit // or 'imperial'
            };
        }
    }).catch(function (err) {
        if (axios.isCancel(err)) {
            console.error(err.message, err);
        } else {
            throw err;
        }
    });
}

export function cancelWeather() {
    weatherSource.cancel('Request canceled');
}

export function getForecast(city, unit) {
    // TODO 
    var url = `${baseUrlFore}&q=${encodeURIComponent(city)}&units=${unit}`;

    console.log(`Making request to: ${url}`);

    return axios.get(url, { cancelToken: weatherSource.token }).then(function (res) {
        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            return {
                // city: capitalize(city),
                // code: res.data.list[9].weather[0].id,
                // group: getWeatherGroup(res.data.list[9].weather[0].id),
                // description: res.data.list[9].weather[0].description,
                // temp: res.data.list[9].main.temp,
                // unit: unit // or 'imperial'
                forecast: [
                    {
                        city: capitalize(city),
                        code: res.data.list[7].weather[0].id,
                        group: getWeatherGroup(res.data.list[7].weather[0].id),
                        description: res.data.list[7].weather[0].description,
                        temp: res.data.list[7].main.temp,
                        unit: unit // or 'imperial'
                    },
                    {
                        city: capitalize(city),
                        code: res.data.list[15].weather[0].id,
                        group: getWeatherGroup(res.data.list[15].weather[0].id),
                        description: res.data.list[15].weather[0].description,
                        temp: res.data.list[15].main.temp,
                        unit: unit // or 'imperial'
                    },
                    {
                        city: capitalize(city),
                        code: res.data.list[23].weather[0].id,
                        group: getWeatherGroup(res.data.list[23].weather[0].id),
                        description: res.data.list[23].weather[0].description,
                        temp: res.data.list[23].main.temp,
                        unit: unit // or 'imperial'
                    },
                    {
                        city: capitalize(city),
                        code: res.data.list[31].weather[0].id,
                        group: getWeatherGroup(res.data.list[31].weather[0].id),
                        description: res.data.list[31].weather[0].description,
                        temp: res.data.list[31].main.temp,
                        unit: unit // or 'imperial'
                    },
                    {
                        city: capitalize(city),
                        code: res.data.list[39].weather[0].id,
                        group: getWeatherGroup(res.data.list[39].weather[0].id),
                        description: res.data.list[39].weather[0].description,
                        temp: res.data.list[39].main.temp,
                        unit: unit // or 'imperial'
                    }
                ]

            };
        }
    }).catch(function (err) {
        if (axios.isCancel(err)) {
            console.error(err.message, err);
        } else {
            throw err;
        }
    });

}