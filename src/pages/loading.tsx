// Components
import { LoadingContainer } from '../components/loading'

const Loading = () => {
  return (
    <LoadingContainer>
      <div>
        <img
          src="/discordspinner.gif"
          alt="Logo"
        />
        <div className="loading__text">
          <div className="loading__tip_title">Did you know</div>
          <div className="loading__tip">
            There are a bunch of hidden &quot;Easter Eggs&quot; in the app that happen when you click certain things...
          </div>
        </div>
      </div>
    </LoadingContainer>
  )
}

export default Loading
