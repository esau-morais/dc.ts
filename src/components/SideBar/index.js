import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Styles
import {
  SideBarContainer,
  ChannelTitleHeader,
  Channels,
  UserButton
} from './sidebar';
// Components (icons/images)
import { ReactComponent as ArrowDown } from '../../assets/icons/arrowDown.svg';
import { ReactComponent as MyAvatar } from '../../assets/avatarMe.svg';
import { ReactComponent as UnmuteIcon } from '../../assets/icons/mutedIcon.svg';
import { ReactComponent as DeafenIcon } from '../../assets/icons/headsetIcon.svg';
import { ReactComponent as UserSettingsIcon } from '../../assets/icons/settingsIcon.svg';
// Components (child)
import ChannelItem from './channel';
// Redux → Dispatch/actions
import { selectUser } from '../../redux/user';
// Firebase → Logout authentication
import { auth } from '../../config/firebase';

export default function SideBar() {
  const user = useSelector(selectUser);

  return (
    <SideBarContainer>
      {/* Channel header (title) */}
      <nav>
        <ChannelTitleHeader>
          <header>
            <h1>frombluetogreene</h1>

            <ArrowDown />
          </header>
        </ChannelTitleHeader>
      </nav>
      {/* Channels list */}
      <Channels>
        <div className="container">
          <ChannelItem />
        </div>
      </Channels>
      {/* User section */}
      <section>
        <div className="user__section_container">
          {/* Left → User image */}
          <div className="avatar__wrapper">
            <div>
              <img
                src={user.photo}
                alt={user.displayName}
                onClick={() => auth.signOut()}
              />
            </div>
          </div>
          {/* Middle → Info */}
          <div className="name__tag">
            <div className="name__tag_nickname">
              <div>
                {user.displayName}
              </div>
            </div>
            <div>
              <div className="name__tag_hover_roll">
                <div className="name__tag_code">#{user.uid.substring(0, 5)}</div>
                <div className="name__tag_custom_status">
                  <div>
                    <img
                      aria-label=":computer:"
                      src="/assets/509dd485f6269e2521955120f3e8f0ef.svg"
                      alt="💻"
                      draggable="false"
                    />
                    <span>Learning and coding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* Right → Settings */}
        <div className="settings__wrapper">
          {/* Unmute */}
          <UserButton
            aria-label="Mute"
            role="switch"
            aria-checked="true"
              type="button">
              <div>
                <UnmuteIcon />
              </div>
            </UserButton>
            {/* Deafen */}
            <UserButton
              aria-label=""
              role="switch"
              aria-checked="true"
              type="button"
            >
              <DeafenIcon />
            </UserButton>
            {/* User settings */}
            <UserButton
              aria-label=""
              role="open"
              aria-checked="false"
              type="button"
            >
              <UserSettingsIcon />
            </UserButton>
          </div>
        </div>
      </section>
    </SideBarContainer>
  )
}
