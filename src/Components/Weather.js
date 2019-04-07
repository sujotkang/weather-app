import React, { Component } from 'react';
import '../Styles/Weather.css';

const Weather = props => (
    <div id="weather">
        <div id="location">{props.city && props.country && <p><span id="loc">Location:</span> {props.city}, {props.country}</p>}</div>
        <div id="temperature">{props.temperature && <p><span id="temp">Temperature:</span> {props.temperature.toFixed(2) * (9/5) + 32}°F | {props.temperature}°C</p>}</div>
        <div id="humidity">{props.humidity && <p><span id="hum">Humidity:</span> {props.humidity}</p>}</div>
        <div id="description">{props.description && <p><span id="desc">Conditions:</span> {props.description}</p>}</div>
        <div id="err">{props.error && <p className="alert alert-warning" role="alert">{props.error}</p>}</div>
    </div>
);

export default Weather;