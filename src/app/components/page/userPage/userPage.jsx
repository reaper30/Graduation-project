import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import api from "../../../api"
import Qualities from "../../ui/qualities"
import { useHistory } from "react-router-dom"

const UserPage = ({ userId }) => {
  const [user, setUser] = useState()
  const history = useHistory()

  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  }, [])

  const handleEdit = () => {
    history.push(`/users/${userId}/edit`)
  }

  return (
    <>
      {user ? (
        <>
          <h1>{user.name}</h1>
          <h2>Профессия: {user.profession.name}</h2>
          {<Qualities qualities={user.qualities} />}
          <p>completedMeetings: {user.completedMeetings}</p>
          <h2>Rate: {user.rate}</h2>

          <button onClick={handleEdit} className="m-2">
            Изменить
          </button>
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
