import React from 'react';

const Country = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <p>Population: {props.population}</p>
        </div>
    );
};

export default Country;