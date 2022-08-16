import React from 'react'

 const NewBotForm = () => {
    const [name, setName] = useState("");
    const [health, setHealth] = useState("");
    const [damage, setDamage] = useState("");
    const [armor, setArmor] = useState("");
    const [botclass, setBotclass] = useState("");
    const [catchphrase, setCatchphrase] = useState("");
    //set up form to add new w POST request bots to db.json
    
      function handleSubmit(){
        fetch("http://localhost:3001/bots")
      }
  return (
    <div>NewBotForm
        <form>
          <label type="letter">Name:</label>
          <input></input>
          <label>Health:</label>
          <input placeholder="Health" type="number"></input>
          <label>Damage:</label>
          <input placeholder="Damage" type="number"></input>
          <label>Armor:</label>
          <input></input>
          <label>Class:</label>
          <input></input>
          <label>Catchphrase:</label>
          <input></input>
          <button onClick={handleSubmit}>Submit New Bot</button>
        </form>
    </div>
    //dropdown to filter by class
  )
}
export default NewBotForm
// "id": 116,
//       "name": "o-44",
//       "health": 51,
//       "damage": 90,
//       "armor": 36,
//       "bot_class": "Assault",
//       "catchphrase": "10001111010110110100111010011000011001100",