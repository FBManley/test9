import React from "react";
import BotCard from "./BotCard";

function BotCollection({collection,  onDeleteBot,  handleBotClick}) {
  const botList = collection.map((bot) => {
    return <BotCard key={bot.id} bot={bot}  onDeleteBot={onDeleteBot} handleBotClick ={handleBotClick }/>
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots
        {botList}
      </div>
    </div>
  );
}

export default BotCollection;