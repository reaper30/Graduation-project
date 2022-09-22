import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";

const User = ({user, onDelete, onBookMark}) => {
  
  return (
    <>
      <tr>
        <th scope="row" >
          {user.name}
        </th>
        <td>
          {user.qualities.map(quality => (
            <Qualitie key={quality._id} color={quality.color} name={quality.name} id={quality._id} />
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
          <BookMark key={user._id} status={user.bookmark} onDelete={onDelete} id={user._id} onBookMark={onBookMark} />
        </td>
        <td>
          <button 
          type="button" 
          className="btn btn-danger" 
          onClick={() => onDelete(user._id)}
          >
            Delete
          </button>
        </td>
      </tr>
  </>
  )
}

export default User