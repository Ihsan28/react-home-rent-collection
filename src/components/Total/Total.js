import React, { useState } from 'react';
import './Total.css';
import MiniCard from '../MiniCard/MiniCard'

const Total = (props) => {
    const[total,setTotal]= useState(0);
    console.log(props.renterGroup);
    const renterGroups = props.renterGroup;
    // const addRent = (x)=> {let sum = sum+ x;setTotal(sum)}
    
    return (
        <div className="total">
            {renterGroups.map(renterGroup => renterGroup)}
            <h2>Total: <span id="total">{props.renterGroup.length}</span></h2>
            <h2>Total: {total}</h2>
            {
                renterGroups.map(renterGroup =><MiniCard renterGroup={renterGroup}></MiniCard>)
            }
        </div>
    );
};

export default Total;