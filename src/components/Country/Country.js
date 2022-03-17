import React from 'react';
import './Country.css';
const Country = (props) => {
    const { name, population, area, flags } = props.country;
    // console.log(props);
    return (
        <div className="country">
            <img src={flags.png} alt="" />
            <h1>{name.common}</h1>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;