import React from "react"
import NavBar from "./components/ui/navBar"
import { Redirect, Route, Switch } from "react-router-dom"
import Main from "./layouts/main"
import Login from "./layouts/login"
import UserList from "./layouts/users"
import EditUserPage from "./components/page/editUserPage"

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/users/:userId/edit" component={EditUserPage} />
        <Route path="/users/:userId?" exact component={UserList} />

        <Redirect to="/" />
      </Switch>
    </>
  )
}
export default App
