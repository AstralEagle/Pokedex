import React from 'react';
import {KelvinToCelcus} from '../../utils/KelvinToCelcus'

const WeatherDisplay = ({info}) => {
    if (!info) return (<div></div>)
    return (<div>
        <div className="d-flex align-center" style={{minWidth: 350}}>
            <h1>{info.name}</h1>
            <p>{info.weather.map((x, i) => (
                <img style={{height: 35}} src={`https://openweathermap.org/img/wn/${x.icon}@2x.png`} alt={x.name}
                     key={i}/>))}</p>
        </div>
        <div>
            <p><span className="txt-bold-6">Temperature: </span> {KelvinToCelcus(info.main.temp)}°C
                (<span style={{color: "blue"}}>{KelvinToCelcus(info.main.temp_min)} °C</span>
                {" / "}
                <span style={{color: "red"}}>{KelvinToCelcus(info.main.temp_max)}°C</span>)
            </p>
        </div>
        <div className="d-flex justify-betewn">
            <p><span className="txt-bold-6">Humidity: </span> {info.main.humidity}%</p>
            <p><span className="txt-bold-6">Atmospheric pressure: </span> {info.main.pressure}mbar</p>
        </div>
        <div className="d-flex justify-betewn">
            <div>
                <p><span className="txt-bold-6">Wind speed: </span>{info.wind.speed}m/s</p>
                <p><span className="txt-bold-6">Wind direction: </span>{info.wind.deg}°</p>
            </div>
            <div>
                <p><span className="txt-bold-6">Wind gust speed: </span>{info.wind.gust}m/s</p>
                <p><span className="txt-bold-6">Clouds: </span>{info.clouds.all}%</p>
            </div>
        </div>
        <div>
            <h2>Weather:</h2>
            {info.weather.map((x, i) => (
            <div key={i} className="mt-1 mb-1 radius-5">
                <h4 className="mb-1 mt-3 ml-3">{x.main}</h4>
                <p className="mt-0 mb-3 ml-6">{x.description}</p>
                <div style={{height: 1, backgroundColor: "#000000"}}/>
            </div>
        ))}
        </div>
    </div>);
}

export default WeatherDisplay