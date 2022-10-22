import React from "react"
import Users from "./users"
import { useParams } from "react-router-dom"
import User from "./user"

const UserList = () => {
  const params = useParams()
  const { userId } = params

  return <>{userId ? <User userId={userId} /> : <Users id={userId} />}</>
}

export default UserList
