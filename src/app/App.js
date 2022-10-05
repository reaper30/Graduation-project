import React, { useState } from "react"
import Users from "./components/users"
import api from "./api"
import { fetchAll } from "./api/fake.api/user.api"

function App() {
  const [users, setUsers] = useState(fetchAll(api.users.fetchAll()))
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          // eslint-disable-next-line no-unused-expressions
          user.bookmark = !user.bookmark
        }
        return user
      })
    )
  }

  return (
    <div>
      <Users
        users={users}
        onDelete={handleDelete}
        onBookMark={handleToggleBookMark}
      />
    </div>
  )
}
export default App
