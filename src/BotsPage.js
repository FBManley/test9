import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [collection, setCollection] = useState([]);
  // const [army, setArmy] = useState([])
  
    // useEffect(() => {
    //   fetch('http://localhost:3001/bots')
    //   .then(resp => resp.json())
    //   .then(collection => setCollection(collection))
    // }, [])

    useEffect(() => {
      fetch("http://localhost:3001/bots"
      , {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
      )
        .then((resp) => resp.json())
        .then((bots) => {
          const updatedBots = bots.map((bot) => {
            return {...bot, drafted: false};
          });
          setCollection(updatedBots)
        })
    }, [])


    // function handleDraftBot(bot){
    //     setArmy([...army, bot])
    // } onDraftBot={handleDraftBot}

    function handleBotClick(draftedBot) {
      const updatedBot = collection.map((toBeDrafted) => {
        if(toBeDrafted.id === draftedBot.id) return {...toBeDrafted, drafted: true};
        console.log("I was drafted")
        return toBeDrafted
          console.log("BotsPage",toBeDrafted)
      })
      setCollection(updatedBot)
    } 
    const alreadyDrafted = collection.filter((bot) => bot.drafted);
    console.log(alreadyDrafted)

    function handleDeleteBot(id) {
     const updatedArmyArray= collection.filter((bot) => bot.id !== id);
        setCollection(updatedArmyArray);
    }
  
  return (
    <div>
      <YourBotArmy 
      setCollection={setCollection}
      collection={collection} 
      onDeleteBot={handleDeleteBot} 
      handleBotClick={handleBotClick}  
      alreadyDrafted={alreadyDrafted}
      /> 
      <BotCollection collection={collection}  handleBotClick={handleBotClick}/> 
    </div>
  )
}

export default BotsPage;