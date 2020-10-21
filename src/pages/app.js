import React from 'react';
// Components
import { MainContainer } from '../components/app';
import SideBar from '../components/SideBar';
import Chat from '../components/Chat';

export default function Main() {
  return (
    <MainContainer>
      <SideBar />
      <Chat />
    </MainContainer>
  )
}
