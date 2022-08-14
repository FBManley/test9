import React from "react";
import BotCard from "./BotCard";

function BotCollection({collection, onDraftBot, onDeleteBot}) {
  // Your code here

  const botList = collection.map((bot) => {
    return <BotCard key={bot.id} bot={bot} onDraftBot={onDraftBot} onDeleteBot={onDeleteBot}/>
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