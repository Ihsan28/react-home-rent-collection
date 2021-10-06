import React from 'react';
import './Renter.css';

const Renter = (props) => {
    return (
        <div className="renter">
            <img src={props.img} alt="" />

        </div>
    );
};

export default Renter;