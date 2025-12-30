import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { ReactComponent as ChannelIcon } from '../../assets/icons/channelIcon.svg'
import { setChannelInfo } from '../../redux/channel'

type ChannelItemProps = {
  id: string
  channelName: string
  isSelected?: boolean
}

const ChannelItem = ({ id, channelName, isSelected }: ChannelItemProps) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const handleChannelSelect = () => {
    dispatch(setChannelInfo({
      channelId: id,
      channelName: channelName
    }))
    
    const params = new URLSearchParams(location.search)
    params.set('channel', id)
    history.replace(`${location.pathname}?${params.toString()}`)
    
    document.title = `${channelName}`
  }

  return (
    <div>
      <div
        className={`content ${isSelected ? 'selectedChannel' : ''}`}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleChannelSelect()
          }
        }}
        onClick={handleChannelSelect}
      >
        <ChannelIcon />

        <div className="content__name">
          {channelName}
        </div>
      </div>
    </div>
  )
}

export default ChannelItem
