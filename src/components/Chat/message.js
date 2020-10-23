import React from 'react';

export default function Message({ user, timestamp, message }) {
  return (
    <div className="message__content">
      <img
        src={user.photo}
        alt="egonpax"
      />
      <h2>
        <span className="message__headerText">
          {user.displayName}
        </span>
        <span className="message__timestamp">
          {
            new Date(timestamp?.toDate()).toUTCString()
          }
        </span>
      </h2>
      <div className="message__content_text">
        {message}
      </div>
    </div>
  )
}
