import React from 'react';
import './Total.css';

const Total = (props) => {
    return (
        <div className="total">
            <h2>total amount: {props.total}</h2>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
        </div>
    );
};

export default Total;