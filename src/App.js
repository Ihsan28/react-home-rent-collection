import './App.css';
import Top from './components/Top/Top';
import Renters from './components/Renters/Renters';
import Total from './components/Total/Total';



function App() {
  
  return (
    <div className="App">
      <Top></Top>

      <div className="container">
        
        <div className="renters-card">
        
          <Renters></Renters>
        </div>
        <div className="total">
          <Total></Total>
        </div>
      </div>
    </div>

  );
}

export default App;
