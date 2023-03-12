// Redux
import { useDispatch } from 'react-redux'

// Components (Images/Icons)
import { ReactComponent as ChannelIcon } from '../../assets/icons/channelIcon.svg'
// Reducer
import { setChannelInfo } from '../../redux/channel'

type ChannelItemProps = {
  id: number
  channelName: string
}

const ChannelItem = ({ id, channelName }: ChannelItemProps) => {
  const dispatch = useDispatch()

  return (
    <div>
      <div
        className="content"
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          e.preventDefault()
          dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName
          }))
          document.title = `${channelName}`

        }}
        onClick={() => {
          dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName
          }))
          document.title = `${channelName}`
        }
        }
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
