import { formatDistanceToNow } from 'date-fns'
import { firestore } from 'firebase'

type MessageProps = {
  user: {
    photo: string | null
    displayName: string | null
  }
  timestamp: firestore.Timestamp | null
  message: string
}

const Message = ({ user, timestamp, message }: MessageProps) => {
  const formatTimestamp = () => {
    if (!timestamp) return ''
    
    try {
      const date = timestamp.toDate()
      return formatDistanceToNow(date, { addSuffix: true })
    } catch {
      return ''
    }
  }

  return (
    <div className="message__content">
      <img
        src={user.photo || ''}
        alt={user.displayName || 'User'}
      />
      <h2>
        <span className="message__headerText">
          {user.displayName}
        </span>
        <span className="message__timestamp">
          {formatTimestamp()}
        </span>
      </h2>
      <div className="message__content_text">
        {message}
      </div>
    </div>
  )
}

export default Message
