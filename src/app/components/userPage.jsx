import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import api from "../api"
import QualitiesList from "./qualitiesList"
import { useHistory } from "react-router-dom"

const UserPage = ({ userId }) => {
  const [user, setUser] = useState()
  const history = useHistory()

  const handleClick = () => {
    history.push("/users")
  }

  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  })
  console.log(user)

  return (
    <>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <h2>Профессия: {user.profession.name}</h2>
          {<QualitiesList qualities={user.qualities} />}
          <p>completedMeetings: {user.completedMeetings}</p>
          <h2>Rate: {user.rate}</h2>
          <button onClick={handleClick}>Все пользователи</button>
        </>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  )
}

UserPage.propTypes = {
  userId: PropTypes.string
}

export default UserPage
