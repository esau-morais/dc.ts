import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { firestore } from 'firebase'

import { ReactComponent as PlusIcon } from '../../assets/icons/plusIcon.svg'
import { ReactComponent as DeafenIcon } from '../../assets/icons/headsetIcon.svg'
import { ReactComponent as UnmuteIcon } from '../../assets/icons/mutedIcon.svg'
import { ReactComponent as UserSettingsIcon } from '../../assets/icons/settingsIcon.svg'
import db, { auth } from '../../config/firebase'
import { setChannelInfo } from '../../redux/channel'
import { selectUser } from '../../redux/user'
import ChannelItem from './channel'
import {
  SideBarContainer,
  ChannelTitleHeader,
  Channels,
  UserButton
} from './sidebar'

type Channels =
  { id: string; channel: firestore.DocumentData; }[]

const SideBar = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const location = useLocation()
  const [channels, setChannels] = useState<Channels>([])

  useEffect(() => {
    const unsubscribe = db.collection('channels').onSnapshot(snapshot =>
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          channel: doc.data()
        }))
      )
    )

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const channelId = params.get('channel')
    
    if (channelId && channels.length > 0) {
      const channel = channels.find(c => c.id === channelId)
      if (channel) {
        dispatch(setChannelInfo({
          channelId: channel.id,
          channelName: channel.channel.channelName
        }))
        document.title = channel.channel.channelName
      }
    }
  }, [location.search, channels, dispatch])

  const handleAddChannel = () => {
    const channelName = prompt('Channel name')
    if (channelName) {
      // Keep channel information in the collection
      db.collection('channels').add({
        channelName: channelName
      })
    }
  }

  return (
    <SideBarContainer>
      {/* Channel header (title) */}
      <nav>
        <ChannelTitleHeader>
          <header>
            <h1>Discord</h1>

            <PlusIcon onClick={handleAddChannel} />
          </header>
        </ChannelTitleHeader>
      </nav>
      {/* Channels list */}
      <Channels>
        <div className="container">
          {channels.map(({ id, channel }) => {
            const params = new URLSearchParams(location.search)
            const selectedChannelId = params.get('channel')
            
            return (
              <ChannelItem
                key={id}
                id={id}
                channelName={channel.channelName}
                isSelected={selectedChannelId === id}
              />
            )
          })}
        </div>
      </Channels>
      {/* User section */}
      <section>
        <div className="user__section_container">
          {/* Left → User image */}
          <div className="avatar__wrapper">
            <img
              role="presentation"
              src={user?.photo || ''}
              alt={user?.displayName || 'User'}
              onClick={() => auth.signOut()}
              title="Logout"
            />
          </div>
          {/* Middle → Info */}
          <div className="name__tag">
            <div className="name__tag_nickname">
              <div>
                {user?.displayName}
              </div>
            </div>
            <div>
              <div className="name__tag_hover_roll">
                <div className="name__tag_code">#{user?.uid.substring(0, 5)}</div>
                <div className="name__tag_custom_status">
                  <span>Learning and coding</span>
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
            >
              <div>
                <UnmuteIcon />
              </div>
            </UserButton>
            {/* Deafen */}
            <UserButton
              aria-label=""
              role="switch"
              aria-checked="true"
            >
              <DeafenIcon />
            </UserButton>
            {/* User settings */}
            <UserButton
              aria-label=""
              aria-checked="false"
            >
              <UserSettingsIcon />
            </UserButton>
          </div>
        </div>
      </section>
    </SideBarContainer>
  )
}

export default SideBar
