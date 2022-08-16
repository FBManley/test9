import React, {useState, useEffect} from "react";
import BotCard from "./BotCard";

function YourBotArmy({ onDeleteBot, alreadyDrafted}) {

      
  const displayDraftedBots = alreadyDrafted.map(bot => 
    <BotCard bot={bot} id={bot.id} key={bot.id} onDeleteBot={onDeleteBot}/>
        )
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row"> 
          Your Bot Army
          {displayDraftedBots}
        </div>
        {/* {NewBotForm?} */}
      </div>
    </div>
  );
}

export default YourBotArmy;