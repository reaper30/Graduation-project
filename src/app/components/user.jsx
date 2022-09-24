import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onBookMark,
  onDelete,
}) => {
  
  return (
    <>
      <tr>
        <th scope="row" >
          {name}
        </th>
        <td>
          {qualities.map(quality => (
            <Qualitie key={quality._id} {...quality} />
          ))}
        </td>
        <td>{profession.name}</td> 
        <td>{completedMeetings}</td>
        <td>{rate}</td>
        <td>
          <BookMark 
            status={bookmark}
            onClick={() => onBookMark(_id)} 
          />
        </td>
        <td>
          <button 
          type="button" 
          className="btn btn-danger" 
          onClick={() => onDelete(_id)}
          >
            Delete
          </button>
        </td>
      </tr>
  </>
  )
}

export default User