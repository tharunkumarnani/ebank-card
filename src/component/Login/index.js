import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {userId: '', pin: '', isError: false, errorMsg: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const userDetails = {
      user_id: userId,
      pin,
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/Json',
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      const errMsg = data.error_msg
      this.setState({isError: true, errorMsg: errMsg})
    }
  }

  render() {
    const {userId, pin, errorMsg, isError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-route">
        <div className="img-form">
          <div className="img-cont">
            <img
              className="login-img"
              alt="website login"
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            />
          </div>
          <form className="form-cont" onSubmit={this.onSubmitForm}>
            <h1 className="form-head">Welcome Back!</h1>
            <label className="label-style" htmlFor="userId">
              User ID
            </label>
            <input
              id="userId"
              type="text"
              value={userId}
              className="input-style"
              onChange={this.onChangeUserId}
              placeholder="Enter User ID"
            />
            <label className="label-style" htmlFor="userPin">
              PIN
            </label>
            <input
              type="password"
              value={pin}
              id="userPin"
              className="input-style"
              onChange={this.onChangePin}
              placeholder="Enter PIN"
            />
            <button className="login-btn" type="submit">
              Login
            </button>
            {isError && <p className="err-msg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
