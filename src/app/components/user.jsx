import React from "react"
import BookMark from "./bookmark"
import Qualitie from "./qualitie"
import PropTypes from "prop-types"

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  onBookMark,
  onDelete
}) => {
  return (
    <>
      <tr>
        <th scope="row">{name}</th>
        <td>
          {qualities.map((quality) => (
            <Qualitie key={quality._id} {...quality} />
          ))}
        </td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate}</td>
        <td>
          <BookMark status={bookmark} onClick={() => onBookMark(_id)} />
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

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  bookmark: PropTypes.bool.isRequired,
  onBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default User
