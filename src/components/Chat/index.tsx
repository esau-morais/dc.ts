import { useState, useEffect, SyntheticEvent } from 'react'
// Redux
import { useSelector } from 'react-redux'

import firebase from 'firebase'

// Components (icons/images)
import { ReactComponent as ChannelIcon } from '../../assets/icons/channelIcon.svg'
// Components (child)
import db from '../../config/firebase'
import { selectChannelId, selectChannelName } from '../../redux/channel'
import { selectUser } from '../../redux/user'
import { ChatContainer } from './chat'
import Message from './message'
// Styles
// Dispatch
// Firebase database

const Chat = () => {
  // User information
  const user = useSelector(selectUser)
  // Channel information
  const channelId = useSelector(selectChannelId)
  const channelName = useSelector(selectChannelName)
  // Messages state
  const [messages, setMessages] = useState([])
  const [messageInput, setMessageInput] = useState('')
  // Keep message on the collection and filter by timestamp
  useEffect(() => {
    if (channelId) {
      db
        .collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot =>
          setMessages(snapshot.docs.map(doc => doc.data()))
        )
    }
  }, [channelId])
  // Handle messages sending
  const handleMessagesSending = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add timestamp, message content and user
    db
      .collection('channels')
      .doc(channelId)
      .collection('messages')
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: messageInput,
        user: user
      })
    // Back to blank after submited
    setMessageInput('')
  }

  return (
    <ChatContainer>
      <section>
        {/* Left → Channel info */}
        <div className="chat__header_children">
          <div className="chat__icon_wrapper">
            <ChannelIcon />
          </div>
          <h3>{channelName}</h3>
          <div className="chat__divider" />
          <div className="chat__channel_topic">
            If you have any song suggestions, this is the place to put them!
          </div>
        </div>
        {/* Right → Toolbar */}
        <div className="chat__header_toolbar" />
      </section>
      {/* Messages list */}
      <div className="chat__messages">
        {
          messages.map(message =>
            <Message
              key={message.id}
              user={message.user}
              timestamp={message.timestamp}
              message={message.message}
            />
          )
        }
      </div>
      {/* Text messages form */}
      <div className="chat__text_area">
        <form onSubmit={handleMessagesSending}>
          {/* Dynamic placeholder → Channel name */}
          <input
            type="text"
            disabled={!channelId}
            placeholder={channelName ?
              `Message ${channelName}`
              : 'Choose a channel to text a message'
            }
            value={messageInput}
            onChange={e => setMessageInput(e.target.value)}
          />
          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </ChatContainer>
  )
}

export default Chat
