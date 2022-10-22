import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import api from "../api"

const User = ({ userId }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  }, [])
  console.log(user)
  return (
    <>
      <h1>{user ? user._id : `User with id ${user._id} not found`}</h1>
    </>
  )
}

User.propTypes = {
  userId: PropTypes.string
}

export default User
