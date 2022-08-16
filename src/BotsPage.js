import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import NewBotForm from "./NewBotForm";

function BotsPage() {
  const [collection, setCollection] = useState([]);
  // const [category, setCategory] = useState("All")

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
            return {...bot, drafted: false}; //add key value pair to updatedBots
          });
          setCollection(updatedBots)
        })
    }, []) //only run on initial mount, runs only after every single render. A way to define a function that runs only when we want. 


    function handleBotClick(draftedBot) {
      const updatedBot = collection.map((toBeDrafted) => {
        if(toBeDrafted.id === draftedBot.id) return {...toBeDrafted, drafted: true};
        console.log("I was drafted")
        return toBeDrafted
        
      })
      setCollection(updatedBot)
    } 

    const alreadyDrafted = collection.filter((bot) => bot.drafted);
    

    function handleDeleteBot(id) {
     const updatedArmyArray= collection.filter((bot) => bot.id !== id);
        setCollection(updatedArmyArray);
    }

    function handleAddBot(newBot){
      setCollection([...collection, newBot])
    }
    // function handleCategoryChange(){
    //   setCollection(collection === )
    // }
    // const botsToDisplay = collection.filter((bot) => {
    //   if(selectedCategory === "All") return true;
    //   return bot.category ===selectedCategory
    // })
  return (
    <div>
      <NewBotForm onAddBot={handleAddBot}/>
      <YourBotArmy 
      setCollection={setCollection}
      collection={collection} 
      onDeleteBot={handleDeleteBot} 
      handleBotClick={handleBotClick}  
      alreadyDrafted={alreadyDrafted}
      /> 
      <BotCollection 
      // category={selectedCategory} 
      // onCategoryChange={handleCategoryChange} 
      collection={collection}  
      handleBotClick={handleBotClick}/> 
    </div>
  )
}

export default BotsPage;