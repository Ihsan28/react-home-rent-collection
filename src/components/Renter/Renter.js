import React, { useEffect, useState } from 'react';
import Total from '../Total/Total';
import MiniCard from '../MiniCard/MiniCard';

import './Renter.css';

const Renter = (props) => {
    const clicked=()=> addToList(props);
    return (
        
        <div className="renter">
            
            <br />
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Flat No: <span className="focused">{props.flatNo}</span></p>
            <p>Phone: {props.phone}</p>
            <p>Rent: <span className="focused">{props.rent}</span></p>
            <br />
            <button onClick={clicked}>COLLECT RENT</button>
            <br />
        </div>
    );
};

const addToList = (props) => {
    console.log(props);
   <Total ><MiniCard key={props.flatNo} name={props.name} image={props.image} rent={props.rent}></MiniCard></Total>
};
export default Renter;