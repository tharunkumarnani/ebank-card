import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './component/Login'
import Home from './component/Home'
import NotFound from './component/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route path="/ebank/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
