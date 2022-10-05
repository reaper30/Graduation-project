import React from "react"
import PropTypes from "prop-types"

const SearchStatus = ({ length }) => {
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
      <span className={"m-2 badge bg-" + (length > 0 ? "primary" : "danger")}>
        <h5>{renderPhrase(length)}</h5>
      </span>
    </>
  )
}

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired
}

export default SearchStatus
