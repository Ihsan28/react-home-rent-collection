import React, { useEffect, useState } from 'react';
import Total from '../Total/Total';
import MiniCard from '../MiniCard/MiniCard';
import './Renter.css';

const Renter = (props) => {
    const {name,image,age,flatNo,rent,phone}= props.renter;
    console.log(props.renter);

    return (
        <div className="renter">
            <br />
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Flat No: <span className="focused">{flatNo}</span></p>
            <p>Phone: {phone}</p>
            <p>Rent: <span className="focused">{rent}</span></p>
            <br />
            <button onClick={()=>props.renterCart(props.renter)}>COLLECT RENT</button>
            <br />
        </div>
    );
};

export default Renter;