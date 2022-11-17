import React, { useState, useEffect } from "react"
import TextField from "../../common/form/edit/textField"
import SelectField from "../../common/form/edit/selectField"
import api from "../../../api"
import RadioField from "../../common/form/edit/radioField"
import MultiSelectField from "../../common/form/edit/multiSelectField"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"

const EditUserPage = () => {
  const [professions, setProfession] = useState({})
  const [qualities, setQualities] = useState([])
  const [data, setData] = useState({
    name: "",
    email: "",
    profession: "",
    sex: "",
    qualities: []
  })

  useEffect(() => {
    api.users.getById(...userId).then((data) => setData(data))
    api.professions.fetchAll().then((data) => {
      const professionsList = Object.keys(data).map((professionName) => ({
        label: data[professionName].name,
        value: data[professionName]._id
      }))
      setProfession(professionsList)
    })
    api.qualities.fetchAll().then((data) => {
      const qualitiesList = Object.keys(data).map((optionName) => ({
        label: data[optionName].name,
        value: data[optionName]._id,
        color: data[optionName].color
      }))
      setQualities(qualitiesList)
    })
  }, [])
  console.log(data)
  const userId = Object.values(useParams())

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <form>
            <TextField
              label="Имя"
              name="name"
              value={data.name}
              onChange={handleChange}
              type="text"
            />
            <TextField
              label="Электронная почта"
              name="email"
              type="text"
              value={data.email}
              onChange={handleChange}
            />
            <SelectField
              label="Выберите свою профессию"
              name="profession"
              value={data.profession._id}
              onChange={handleChange}
              options={professions}
              defaultOption="Choose..."
            />
            <RadioField
              options={[
                { name: "Male", value: "male" },
                { name: "Female", value: "female" },
                { name: "Other", value: "other" }
              ]}
              name="sex"
              value={data.sex}
              onChange={handleChange}
              label="Выберите пол"
            />
            <MultiSelectField
              defaultValue={data.qualities}
              options={qualities}
              onChange={handleChange}
              name="qualities"
              label="Выберите ваши качества"
            />
            <button className="btn btn-primary w-100 mx-auto">Обновить</button>
          </form>
        </div>
      </div>
    </div>
  )
}

EditUserPage.propTypes = {
  userId: PropTypes.string
}

export default EditUserPage
