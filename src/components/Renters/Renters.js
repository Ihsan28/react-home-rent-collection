import from './Renters.css';
import React, { useEffect, useState } from 'react';
import Renter from '../Renter/Renter';


const Renters = () => {
    const [renter, setRenter] = useState([]);

    useEffect{
        fetch("../../../public/tools.JSON")
        .then(res=>res.json)
        .then(data=>setRenter(data));
    }
    return (
        <div>
            renter.map(<Renter img={renter.image} name={renter.name} age={renter.age} phone={renter.phone} flatNo={renter.flatNo} rent={renter.rent}></Renter>)
        </div>
    );
};

export default Renters;