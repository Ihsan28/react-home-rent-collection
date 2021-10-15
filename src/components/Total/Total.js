import "./Total.css";
import MiniCard from "../MiniCard/MiniCard";

const Total = (props) => {
  const renterGroups = props.renterGroups;
  const length = renterGroups.length;
  console.log(renterGroups);

  return (
    <div className="total">
      
        <div className="">
          <h2>
            Total: <span id="total">{length}</span>
          </h2>
          <h2>Total: {props.total}</h2>
        </div>
        <div className="content">
          {renterGroups.map((renterGroup) => (
            <MiniCard
              key={renterGroup.flatNo}
              renterGroup={renterGroup}
            ></MiniCard>
          ))}
        </div>

    </div>
  );
};

export default Total;
