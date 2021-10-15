import React from 'react';
import './MiniCard.css';

const MiniCard = (props) => {
    return (
        <div className="mini-card">
            <div><br />
            <img src={props.renterGroup.image} alt="" /></div>
            
            <div className="text">
            <h2 className="adjust">{props.renterGroup.name}</h2>
            <p className="adjust"><span className="focused">{props.renterGroup.flatNo}</span></p>
            <p className="adjust">Rent:<span className="focused">{props.renterGroup.rent}</span></p>
            <br />
            </div>

            <div className="btnCancel"><button ></button></div>
            
        </div>
    );
};

export default MiniCard;