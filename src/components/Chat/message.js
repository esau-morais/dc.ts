import React from 'react';

export default function Message() {
  return (
    <div className="message__content">
      <img
        src="https://cdn.discordapp.com/avatars/458350813560176652/1722bdca1c0764a6facaeea8fb672b6c.png?size=128"
        alt="egonpax"
      />
      <h2>
        <span className="message__headerText">
          egonpax
        </span>
        <span className="message__timestamp">
          Today at 1:11 PM
        </span>
      </h2>
      <div className="message__content_text">
        Don't Cry, November Rain (or any other popular song) - Guns N' Roses
      </div>
    </div>
  )
}
