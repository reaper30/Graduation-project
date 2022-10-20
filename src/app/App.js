import React from "react"
import Users from "./components/users"
import NavBar from "./components/navBar"
import { Route, Switch } from "react-router-dom"
import Main from "./components/main"
import Login from "./components/login"

function App() {
  return (
    <>
      <NavBar />
      <Users />

      <Switch>
        <Route path="/" component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  )
}
export default App
