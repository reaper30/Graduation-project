import React, { useState, useEffect } from "react"
import UserTable from "./usersTable"
import Pagination from "./pagination"
import { paginate } from "../utils/paginate"
import PropTypes from "prop-types"
import GroupList from "./groupList"
import SearchStatus from "./searchStatus"
import api from "../api"
import _ from "lodash"
import UserSearchField from "./searchUser"

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfession] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({ path: "name", order: "" })
  const [searchUser, setSearchUser] = useState("")
  const pageSize = 8

  const [users, setUsers] = useState()

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          user.bookmark = !user.bookmark
        }
        return user
      })
    )
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
    setSearchUser("")
  }

  const handleSort = (item) => {
    setSortBy(item)
  }

  const handleUserSearch = ({ target }) => {
    setSearchUser(target.value)
  }

  if (users) {
    const filteredUsers = selectedProf
      ? users.filter((user) => _.isEqual(user.profession, selectedProf))
      : users

    const searchFilterUsers = users.filter((user) => {
      const splitName = user.name.toLowerCase().split("")
      return splitName.includes(searchUser.toLowerCase())
    })

    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])

    const count = searchUser ? searchFilterUsers.length : filteredUsers.length

    const userCrop = paginate(
      searchUser ? searchFilterUsers : sortedUsers,
      currentPage,
      pageSize
    )

    const clearFilter = () => {
      setSelectedProf()
    }

    return (
      <div className="d-flex">
        {professions && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList
              items={professions}
              selectedItem={selectedProf}
              onItemSelect={handleProfessionSelect}
            />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              Очистить
            </button>
          </div>
        )}

        <div className="d-flex flex-column">
          <SearchStatus length={userCrop.length} />
          <UserSearchField
            type="text"
            name="user-search"
            placeholder="Search..."
            value={searchUser}
            onChange={handleUserSearch}
          />

          {count > 0 && (
            <UserTable
              users={userCrop}
              onSort={handleSort}
              selectedSort={sortBy}
              onDelete={handleDelete}
              onToggleBookMark={handleToggleBookMark}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    )
  }
  return "Loading"
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UsersList
