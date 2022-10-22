import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import api from "../api"
import QualitiesList from "./qualitiesList"
import { useHistory } from "react-router-dom"

const User = ({ userId }) => {
  const [user, setUser] = useState()
  const history = useHistory()

  const handleBackToUsers = () => {
    history.push("/users")
  }

  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  }, [])
  console.log(user)

  return (
    <>
      {user
        ? <>
          <h1>{user.name}</h1>
          <h2>Профессия: {user.profession.name}</h2>
          <h5>{<QualitiesList qualities={user.qualities} />}</h5>
          <h5>completedMeetings: {user.completedMeetings}</h5>
          <h2>Rate: {user.rate}</h2>
          <button onClick={handleBackToUsers}>
            Все пользователи
          </button>
        </>
        : <h2>Loading</h2>
      }
    </>
  )
}

User.propTypes = {
  userId: PropTypes.string
}

export default User
