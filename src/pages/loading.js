import React from 'react';
// Components
import { LoadingContainer } from '../components/loading';

export default function Loading() {
  return (
    <LoadingContainer>
      <div>
        <video autoPlay loop playsInline>
          <source
            src="https://discord.com/assets/0bdc0497eb3a19e66f2b1e3d5741634c.webm"
            type="video/webm"
          />
          <source
            src="https://discord.com/assets/ffac5bb3fb919ce8bf7137d79e9defc9.mp4"
            type="video/mp4"
          />
          <img
            alt="Logo"
            src="https://discord.com/assets/5ccabf62108d5a8074ddd95af2211727.png"
          />
        </video>
        <div className="loading__text">
          <div className="loading__tip_title">Did you know</div>
          <div className="loading__tip">
            There are a bunch of hidden "Easter Eggs" in the app that happen when you click certain things...
          </div>
        </div>
      </div>
    </LoadingContainer>
  )
}
