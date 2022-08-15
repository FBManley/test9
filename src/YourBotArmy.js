import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ onDeleteBot, alreadyDrafted}) {
  //your bot army code here...
    // console.log("in BotsArmy", army)
    // const armyList = army.map((bot) => {
    // return <BotCard key={bot.id} bot={bot} onDeleteBot={onDeleteBot}/>
    
    //   })
    // const armyBots = collection.map(bot => 
    //   <BotCard 
    //   bot={bot}
    //   id={bot.id}
    //   key={bot.id}
    //   />
    //   )
      
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
      </div>
    </div>
  );
}

export default YourBotArmy;