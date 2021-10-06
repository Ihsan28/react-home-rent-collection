import React, { useEffect, useState } from 'react';
import Renter from '../Renter/Renter';
import './Renters.css';


const Renters = () => {
    const [renters, setRenters] = useState([]);

    useEffect(() => {
        fetch("../../../public/renters.json")
        .then(res=>res.json)
        .then(data =>console.log(data));
    },[]);
    return (
        <div>
            
            {
                renters.map(renters => 
                    <Renter img={renters.image} name={renters.name} age={renters.age} phone={renters.phone} flatNo={renters.flatNo} rent={renters.rent}></Renter>
                )
            }
        </div>
    );
};

export default Renters;