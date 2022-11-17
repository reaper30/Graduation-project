import React from "react"
import PropTypes from "prop-types"

const TextField = ({ label, name, value, onChange, type }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        onChange={handleChange}
        type={type}
        id={name}
        value={value}
        name={name}
      />
    </div>
  )
}

TextField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default TextField
