const Message = ({ user, timestamp, message }: any) => {
  return (
    <div className="message__content">
      <img
        src={user.photo}
        alt={user.displayName}
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

export default Message
