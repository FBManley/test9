import React from "react";
import BotCard from "./BotCard";
// category, onCategoryChange,
function BotCollection({ collection,  onDeleteBot,  handleBotClick}) {
  const botList = collection.map((bot) => {
    return <BotCard key={bot.id} bot={bot}  onDeleteBot={onDeleteBot} handleBotClick ={handleBotClick }/>
  })
//dropdown to filter by class
 
  return (
    <div className="ui four column grid">
      <select
      // value={category}
      // onChange={(e) => onCategoryChange(e.target.value)}
      >
      <option 
      value="All"
      >Filter by class</option>
      <option value="Captain">Captain</option>
      <option value="Defender">Defender</option>
      <option value="Assault">Assault</option>
      <option value="Support">Support</option>
      <option value="Medic">Medic</option>
      </select>
      <div className="row">
        Collection of all bots
        {botList}
      </div>
    </div>
  );
}

export default BotCollection;