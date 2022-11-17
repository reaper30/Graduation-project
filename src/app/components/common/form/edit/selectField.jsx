import React from "react"
import PropTypes from "prop-types"

const SelectField = ({
  label,
  value,
  name,
  onChange,
  options,
  defaultOption
}) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.values(options)
      : options

  const handleChange = ({ target }) => {
    onChange({ name: name, value: target.value })
  }

  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optionsArray.length > 0 &&
          optionsArray.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  )
}

export default SelectField

SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
