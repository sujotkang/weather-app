import React, { Component } from 'react';
import '../Styles/Form.css';
import App from '../App.js';

const Form = props => (
    <div id="form">
    <form onSubmit={props.getWeather}>
        <input id="city" type="text" name="city" placeholder="CITY" />
        <input id="country" type="text" name="country" placeholder="COUNTRY" />
        <br/>
        <button id="button-form" className="btn btn-primary">Get Weather</button>
    </form>
    </div>
);
    

export default Form;