import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, onDraftBot, onDeleteBot }) {
 const {id, name, health, damage, armor } = bot
    function handleDraftBotClick(){
        onDraftBot(bot)
    }
  
    function handleDeleteBotClick(){
        fetch(`http://localhost:3001/bots/${id}`, {
            method: "DELETE",
        });
        onDeleteBot(id);
    }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={(e) => handleDraftBotClick(e.target.value)}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {health}
          </span>

          <span>
            <i className="icon lightning" />
            {damage}
          </span>
          <span>
            <i className="icon shield" />
            {armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(e) =>
                 
                    handleDeleteBotClick(e.target.value)
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;