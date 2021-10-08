import React, { useEffect, useState } from 'react';
import MiniCard from '../MiniCard/MiniCard';
import './Renter.css';

const Renter = (props) => {
    const [list,setList]= useState([]);
    let flat= 0;
    const addToList = () => {
        <MiniCard prop={list}></MiniCard>
    };
    useEffect{ () => {
        setList(props);
    }
        
    };
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
            <button onClick={addToList}>COLLECT RENT</button>
            <br />

            

        </div>
    );
};

function setList(props){

}
export default Renter;