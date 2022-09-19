import React, {useState} from "react";
import api from '../api'
import User from "./user";

const Users = ({users, ...rest},) => {
  // const [users, setUsers ] = useState(api.users.fetchAll())
  // const tableQualityBadge = (item) => {
  //   let classes = 'm-1 badge bg-'
  //   return  classes+=item
  // }

  // const handleDelete = (userId) => {
  //   setUsers(users.filter(user => user._id !== userId))
  // }

  // const renderPhrase = (number) => {
  //  const n = number % 10
  //  if (number === 0) {
  //    return `Никто с тобой не тусанет`
  //  } else if (number >= 11 && number <= 19) {
  //     return `${number} Человек тусанет с тобой сегодня`
  //  } else if (n === 1 || n === 0 || (n >= 5 && n <= 9)) {
  //     return `${number} Человек тусанет с тобой сегодня`
  //  } else if (n >= 2 && n <= 4) {
  //   return `${number} Человека тусанет с тобой сегодня`
  //  }
  // }

  return (
    <>
      {/* <span className={
        'm-2 badge bg-' +
        (users.length > 0 ? 'primary' : 'danger')
        }
        >
          <h5>{renderPhrase(users.length)}</h5>
        </span> */}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <User key={user._id} user={user} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Users