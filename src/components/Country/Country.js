import React from 'react';
import './Country.css'


const Country = (props) => {
    const { name, flag, capital, population, nativeName, region } = props.country;
    // console.log(props.country);
    return (
        <div className="country">
            <h4>Countries : {name}</h4>
            <img src={flag} alt="" />
            <p>NativeName: {nativeName}</p>
            <p>Capital : {capital} </p>
            <p> Population: {population}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;