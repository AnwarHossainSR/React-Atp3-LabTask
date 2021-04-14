import React from 'react'
/* import {users} from './components/UserList'
import User from './components/User'
 */
import { Route, Switch } from 'react-router-dom';
import Home from './components/Task/Home'
import Form from './components/Task/Form'
const App = () => {
  return (
    <>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Form} />
      </Switch>


      {/* {
        users.map((user, index)=>{
          return <User key={index} {...user} />
        })
      } */}
    </>
  )
}

export default App
