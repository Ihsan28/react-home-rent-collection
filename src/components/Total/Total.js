import React, { useEffect, useState } from 'react';
import './Total.css';
import MiniCard from '../MiniCard/MiniCard'

const Total = (props) => {
    
    const renterGroups = props.renterGroups;
    const length=renterGroups.length;


    console.log(renterGroups);
    

    
    
    return (
        <div className="total">
            <h2>Total: <span id="total">{length}</span></h2>
            <h2>Total: {props.total}</h2>
            {
                renterGroups.map(renterGroup =><MiniCard renterGroup={renterGroup}></MiniCard>)
            }
        </div>
    );
};

export default Total;