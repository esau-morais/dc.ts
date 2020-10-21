import React, { useState, useEffect } from 'react';
// Components (Images/Icons)
import { ReactComponent as ChannelIcon } from '../../assets/icons/channelIcon.svg';

export default function ChannelItem({ id, channel }) {
  const [selected, setSelected] = useState(true);

  useEffect(() => {
    if (selected) {
      document.title = `#${channel}`
    }
  }, [])

  return (
    <div>
      <div className={selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
      <div className={!selected ? "content selectedChannel" : "content"}>
        <ChannelIcon />

        <div className="content__name">
          ⭐-welcome-⭐
        </div>
      </div>
    </div>
  )
}
