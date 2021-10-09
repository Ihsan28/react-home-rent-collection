import React from 'react';

const MiniCard = (props) => {
    return (
        <div className="mini-card">
            <br />
            <img src={props.renterGroup.image} alt="" />
            <h2>{props.renterGroup.name}</h2>
            <p>Flat No: <span className="focused">{props.renterGroup.flatNo}</span></p>
            <p>Rent: <span className="focused">{props.renterGroup.rent}</span></p>
            <br />
            
        </div>
    );
};

export default MiniCard;