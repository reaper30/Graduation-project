import React from "react"
//import Users from "./components/users"
import NavBar from "./components/navBar"
import { Redirect, Route, Switch } from "react-router-dom"
import Main from "./components/main"
import Login from "./components/login"
import UserList from "./components/userList"
import NotFound from "./components/notFound"

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={UserList} />
        <Route path="/404" component={NotFound} />

        <Redirect to="/404" />
      </Switch>
    </>
  )
}
export default App
