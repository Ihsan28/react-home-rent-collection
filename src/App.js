import "./App.css";
import Top from "./components/Top/Top";
import Renters from "./components/Renters/Renters";
import Total from "./components/Total/Total";
import { useState } from "react";

function App() {
  const [renterGroup,setRenterGroup] = useState([]);
    
    function renterCart(newRenter){
      const update= [...renterGroup,newRenter];
      const filtered= [...new Set(update)];
        setRenterGroup(filtered);
    }

  return (
    <div className="App">

      <Top></Top>

      <div className="container">
        <div><Renters renterCart={renterCart}></Renters></div>
        <div><Total renterGroup={renterGroup}></Total></div>
        
      </div>
    </div>
  );
}

export default App;
