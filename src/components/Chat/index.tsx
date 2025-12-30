import { useState, useEffect, SyntheticEvent } from 'react'
// Redux
import { useSelector } from 'react-redux'

import firebase, { firestore } from 'firebase'

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
  const user = useSelector(selectUser)
  const channelId = useSelector(selectChannelId)
  const channelName = useSelector(selectChannelName)

  const [messages, setMessages] = useState<Array<{ id: string; data: firestore.DocumentData }>>([])
  const [messageInput, setMessageInput] = useState('')
  const [channelTopic, setChannelTopic] = useState('')
  const [typingUsers, setTypingUsers] = useState<string[]>([])

  useEffect(() => {
    if (channelId) {
      const unsubscribe = db
        .collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot =>
          setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        )
      
      return () => unsubscribe()
    } else {
      setMessages([])
    }
  }, [channelId])

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .get()
        .then(doc => {
          const data = doc.data()
          setChannelTopic(data?.channelTopic || '')
        })
    } else {
      setChannelTopic('')
    }
  }, [channelId])

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .get()
        .then(doc => {
          const data = doc.data()
          setChannelTopic(data?.channelTopic || '')
        })
    }
  }, [channelId])
  useEffect(() => {
    if (channelId && user) {
      const unsubscribe = db
        .collection('channels')
        .doc(channelId)
        .collection('typing')
        .where('uid', '!=', user.uid)
        .onSnapshot(snapshot => {
          const typing = snapshot.docs
            .map(doc => doc.data())
            .filter(data => data.timestamp?.toDate() > new Date(Date.now() - 3000))
            .map(data => data.displayName)
          setTypingUsers(typing)
        })
      
      return () => unsubscribe()
    }
  }, [channelId, user])

  const handleTyping = () => {
    if (channelId && user) {
      db.collection('channels')
        .doc(channelId)
        .collection('typing')
        .doc(user.uid)
        .set({
          uid: user.uid,
          displayName: user.displayName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
  }

  const handleMessagesSending = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!messageInput.trim() || !channelId || !user) return
    
    db
      .collection('channels')
      .doc(channelId)
      .collection('messages')
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: messageInput,
        user: user
      })
    
    db.collection('channels')
      .doc(channelId)
      .collection('typing')
      .doc(user.uid)
      .delete()
    
    setMessageInput('')
  }

  if (!channelId) {
    return (
      <ChatContainer>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%',
          flexDirection: 'column',
          gap: '1rem',
          color: 'var(--interactive-normal)'
        }}>
          <ChannelIcon style={{ width: '4rem', height: '4rem', opacity: 0.3 }} />
          <p style={{ fontSize: '1.25rem', fontWeight: 500 }}>Select a channel to start messaging</p>
        </div>
      </ChatContainer>
    )
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
            {channelTopic || 'No topic set'}
          </div>
        </div>
        {/* Right → Toolbar */}
        <div className="chat__header_toolbar" />
      </section>
      {/* Messages list */}
      <div className="chat__messages">
        {
          messages.map(({ id, data }) =>
            <Message
              key={id}
              user={data.user}
              timestamp={data.timestamp}
              message={data.message}
            />
          )
        }
        {typingUsers.length > 0 && (
          <div style={{ 
            padding: '0.5rem 1rem', 
            fontSize: '0.875rem',
            fontStyle: 'italic',
            opacity: 0.7
          }}>
            {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
          </div>
        )}
      </div>
      {/* Text messages form */}
      <div className="chat__text_area">
        <form onSubmit={handleMessagesSending}>
          <input
            type="text"
            disabled={!channelId}
            placeholder={channelName ?
              `Message ${channelName}`
              : 'Choose a channel to text a message'
            }
            value={messageInput}
            onChange={e => {
              setMessageInput(e.target.value)
              handleTyping()
            }}
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
