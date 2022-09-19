import React, { useState } from "react"
import Users from "./components/users"
import SearchStatus from "./components/searchStatus"
import api from "./api"
import { fetchAll } from "./api/fake.api/user.api"
import Qualitie from "./components/qualitie"

function Api() {
  const [users, setUsers] = useState(fetchAll(api.users.fetchAll()))

  return (
    <div>
      <SearchStatus length={users.length} />
      <Qualitie />
      {users.length ? (
        <Users 
          users={users}
          id={users._id}
          // onDelete={handleDelete}
          // onToggleBookMark={handleToggleBookMark}
        />
       ) : null} 
    </div>
  )
}

export default Api