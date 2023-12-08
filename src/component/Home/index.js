import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const {history} = props
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  const onLogOut = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <div className="home-bg">
      <nav className="nav-bar">
        <img
          className="logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        />
        <button onClick={onLogOut} className="log-out" type="button">
          Logout
        </button>
      </nav>
      <div className="home-card">
        <h1 className="heading">Your Flexibility, Our Excellence</h1>
        <img
          className="card"
          alt="digital card"
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        />
      </div>
    </div>
  )
}

export default Home
