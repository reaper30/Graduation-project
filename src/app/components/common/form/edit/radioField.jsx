import React from "react"
import PropTypes from "prop-types"

const RadioField = ({ label, name, options, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: name, value: target.value })
  }

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <div>
        {options.map((option) => (
          <div className="form-check" key={option.name + "_" + option.value}>
            <input
              className="form-check-input"
              checked={value === option.value}
              type="radio"
              name={name}
              id={option.name + "_" + option.value}
              value={option.value}
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor={option.name + "_" + option.value}
            >
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

RadioField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default RadioField
