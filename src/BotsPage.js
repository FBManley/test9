import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  // start here with your code for step one
  const [collection, setCollection] = useState([]);
  const [army, setArmy] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:3001/bots')
      .then(resp => resp.json())
      .then(collection => setCollection(collection))
    }, [])

    function handleDraftBot(bot){
        setArmy([...army, bot])
    }

    function handleDeleteBot(id) {
     const updatedArmyArray= army.filter((bot) => bot.id !== id);
        setArmy(updatedArmyArray);
    }
  
  return (
    <div>
      <YourBotArmy army={army} onDeleteBot={handleDeleteBot}/> 
      <BotCollection collection={collection} onDraftBot={handleDraftBot}/> 
    </div>
  )
}

export default BotsPage;