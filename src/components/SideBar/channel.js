import React from 'react';
// Redux
import { useDispatch } from 'react-redux';
// Components (Images/Icons)
import { ReactComponent as ChannelIcon } from '../../assets/icons/channelIcon.svg';
// Reducer
import { setChannelInfo } from '../../redux/channel';

export default function ChannelItem({ id, channelName }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="content"
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
