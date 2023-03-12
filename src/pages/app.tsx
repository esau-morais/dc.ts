// Components
import { MainContainer } from '../components/app'
import Chat from '../components/Chat'
import SideBar from '../components/SideBar'

const Main = () => {
  return (
    <MainContainer>
      <SideBar />
      <Chat />
    </MainContainer>
  )
}

export default Main
