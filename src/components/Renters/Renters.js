import React, { useEffect, useState } from 'react';
import Renter from '../Renter/Renter';
import './Renters.css';


const Renters = (props) => {
    const [renters, setRenters] = useState([]);
    
    useEffect(() => {
        fetch("./renters.json")
        .then(res=>res.json())
        .then(data =>setRenters(data));
    },[]);

    return (
        <div className="renters">
            {
                renters.map(renter => 
                    <Renter renterCart={props.renterCart} key={renter.flatNo} renter={renter} ></Renter>
                )
            }
        </div>
    );
};

export default Renters;

// img={renter.image} name={renter.name} age={renter.age} phone={renter.phone} flatNo={renter.flatNo} rent={renter.rent}