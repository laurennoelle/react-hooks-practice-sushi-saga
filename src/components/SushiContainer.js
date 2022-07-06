import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( {sushis, nextSushis, eatSushi} ) {
  return (
    <div className="belt">
      {sushis.map(s => <Sushi key={s.id} sushi={s} eatSushi={eatSushi} />)}
      <MoreButton handleClick={nextSushis}/>
    </div>
  );
}

export default SushiContainer;
