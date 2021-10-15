import "./App.css";
import Top from "./components/Top/Top";
import Renters from "./components/Renters/Renters";
import Total from "./components/Total/Total";
import { useState } from "react";

function App() {
  const [renterGroups,setRenterGroups] = useState([]);
  const[total,setTotal]= useState(0);
    

  function renterCart(newRenter){

    const update= [...renterGroups,newRenter];
    const filtered= [...new Set(update)];
    const rentList= filtered.map(filter => {return filter.rent;});
    let sum= 0;
    rentList.map(rent =>{sum = sum + parseInt(rent); })
    setTotal(sum);
      setRenterGroups(filtered);
     
  }
    
  return (
    <div className="App">

      <Top></Top>
      <div className="container">
        <div><Renters renterCart={renterCart}></Renters></div>
        <div ><Total total={total} renterGroups={renterGroups}></Total></div>
      </div>
    </div>
  );
}

export default App;
