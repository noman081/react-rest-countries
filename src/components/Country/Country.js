import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props);
    return (
        <div className="country">
            <img src={props.imgUrl} alt="" />
            <h1>Name: {props.name}</h1>
            <p>Population: {props.population}</p>
            <p>Area: {props.area}</p>
        </div>
    );
};

export default Country;