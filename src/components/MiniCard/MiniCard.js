import React from 'react';

const MiniCard = (props) => {
    return (
        <div className="mini-card">
            <br />
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Flat No: <span className="focused">{props.flatNo}</span></p>
            <p>Phone: {props.phone}</p>
            <p>Rent: <span className="focused">{props.rent}</span></p>
            <br />
            <button onClick="{}">COLLECT RENT</button>
            <br />
        </div>
    );
};

export default MiniCard;