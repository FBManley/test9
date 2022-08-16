import React, {useState} from 'react'

 const NewBotForm = ({onAddBot}) => {
    const [name, setName] = useState("");
    const [health, setHealth] = useState("");
    const [damage, setDamage] = useState("");
    const [armor, setArmor] = useState("");
    const [botclass, setBotclass] = useState("");
    const [catchphrase, setCatchphrase] = useState("");
    
      function handleSubmit(e){
        e.preventDefault();
        const formData = {
            name: name, 
            health: health, 
            damage: damage, 
            armor: armor,
            bot_class: botclass,
            catchphrase: catchphrase,
            avatar_url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31112add-759a-4d7c-9989-679cc3bdd91d/deo7nwh-a47a7ee7-044d-4bac-87d6-48320a29fb45.png/v1/fit/w_300,h_698,strp/battle_bot_by_cs234477fromscratch_deo7nwh-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njk4IiwicGF0aCI6IlwvZlwvMzExMTJhZGQtNzU5YS00ZDdjLTk5ODktNjc5Y2MzYmRkOTFkXC9kZW83bndoLWE0N2E3ZWU3LTA0NGQtNGJhYy04N2Q2LTQ4MzIwYTI5ZmI0NS5wbmciLCJ3aWR0aCI6Ijw9NzA5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iZWyE3MGwBDWK-mJp8G8p0MBWzmL5YYT73MrqU-5BLA"
        }
        fetch("http://localhost:3001/bots", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((newBot) => onAddBot(newBot))

        setName("");
        setHealth("");
        setDamage("");
        setArmor("");
        setBotclass("");
        setCatchphrase("");
      }

  return (
    <div>NewBotForm
        <form>
          <input 
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ></input>
          <input 
          placeholder="Health"
          type="number"
          name="health"
          onChange={(e) => setHealth(e.target.value)}
          ></input>
          <input 
          placeholder="Damage"
          type="number"
          name="damage"
          onChange={(e) => setDamage(e.target.value)}
          ></input>
          <input
          placeholder="Armor"
          type="number"
          name="armor"
          onChange={(e) => setArmor(e.target.value)}
          ></input>
          <input
          placeholder="Class"
          type="text"
          name="bot_class"
          onChange={(e) => setBotclass(e.target.value)}
          ></input>
          <input
          placeholder="Catchphrase"
          type="text"
          name="catchphrase"
          onChange={(e) => setCatchphrase(e.target.value)}
          ></input>
          <button onClick={handleSubmit}>Submit New Bot</button>
        </form>
    </div>
    
  )
}
export default NewBotForm
