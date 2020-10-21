import React from 'react';
// Components (icons/images)
import { ReactComponent as ChannelIcon } from '../../assets/icons/channelIcon.svg';
// Components (child)
import Message from './message';
// Styles
import { ChatContainer } from './chat';

export default function Chat() {
  return (
    <ChatContainer>
      <section>
        {/* Left → Channel info */}
        <div className="chat__header_children">
          <div className="chat__icon_wrapper">
            <ChannelIcon />
          </div>
          <h3>⭐-welcome-⭐</h3>
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
        <Message />
      </div>
      {/* Text messages form */}
      <div className="chat__text_area">
        <form>
          {/* Dynamic placeholder → Channel name */}
          <input type="text" placeholder="Message ⭐-welcome-⭐" />
          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </ChatContainer>
  )
}
