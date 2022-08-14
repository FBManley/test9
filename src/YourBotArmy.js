import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({army, onDeleteBot }) {
  //your bot army code here...
    // console.log("in BotsArmy", army)
    const armyList = army.map((bot) => {
    return <BotCard key={bot.id} bot={bot} onDeleteBot={onDeleteBot}/>
    
      })
      

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row"> 
          Your Bot Army
          {armyList}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;