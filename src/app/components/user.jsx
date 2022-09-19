import React from "react";
import Qualitie from "./qualitie";

const Users = ({users, onDelete}) => {
  return (
    <>
      return (
        {/* {users.map(user => (
          <User key={user._id} {...user}/>
        ))} */}
        {users.map(user => (
          <tr key={user._id}>
            <th scope="row" >
              {user.name}
            </th>
            <td>
              {user.qualities.map(quality => (
                <span 
                // className={tableQualityBadge(quality.color)}
                key = {quality.color}
                >
                  {quality.name}
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
              <button type="button" className="btn btn-danger" onClick={() => user.onDelete(user._id)}>delete</button>
            </td>
          </tr>
        ))}
      )
    </>
  )
}

export default Users