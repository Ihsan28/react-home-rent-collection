import React from 'react';
import './Total.css';
import MiniCard from '../MiniCard/MiniCard'

const Total = (props) => {
    return (
        <div className="total">
            <h2>Total: <span id="total">{props.renterGroup.length}</span></h2>
            {/* <MiniCard></MiniCard> */}
        </div>
    );
};

export default Total;