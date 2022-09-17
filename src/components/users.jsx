import React, {useState} from "react";
import api from '../api'

const Users = () => {
  const [users, setUsers ] = useState(api.users.fetchAll())
  const tableQualityBadge = (item) => {
    let classes = 'm-1 badge bg-'
    return  classes+=item
  }

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user._id !== user.userId))
  }

  const renderPhrase = (number) => {
   const n = number % 10
   if (number === 0) {
     return `Никто с тобой не тусанет`
   } else if (number >= 11 && number <= 19) {
      return `${number} Человек тусанет с тобой сегодня`
   } else if (n === 1 || n === 0 || (n >= 5 && n <= 9)) {
      return `${number} Человек тусанет с тобой сегодня`
   } else if (n >= 2 && n <= 4) {
    return `${number} Человека тусанет с тобой сегодня`
   }
  }

  return (
    <>
      <span className={
        'm-2 badge bg-' +
        (users.length > 0 ? 'primary' : 'danger')
        }><h3>{renderPhrase(users.length)}</h3></span>

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
            <tr key={user._id}>
              <th scope="row" >
                {user.name}
              </th>
              <td>
                {user.qualities.map(quality => (
                  <span 
                  className={tableQualityBadge(quality.color)}
                  key = {quality.color}
                  >
                    <h6>{quality.name}</h6>
                  </span>
                ))}
              </td>
              <td>
                {user.profession.name} 
              </td> 
              <td>
                {user.completedMeetings}
              </td>
              <td>
                {user.rate}
              </td>
              <td>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(user._id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Users