import React, { useState, useEffect } from "react"
import TextField from "../../common/form/edit/textField"
import SelectField from "../../common/form/edit/selectField"
import api from "../../../api"
import RadioField from "../../common/form/edit/radioField"
import MultiSelectField from "../../common/form/edit/multiSelectField"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"

const EditUserPage = () => {
  //const getProfessionById = (id) => {
  //  for (const prof of professions) {
  //    if (prof.value === id) {
  //      return { _id: prof.value, name: prof.label }
  //    }
  //  }
  //}
  //const getQualities = (elements) => {
  //  const qualitiesArray = []
  //  for (const elem of elements) {
  //    for (const quality in qualities) {
  //      if (elem.value === qualities[quality].value) {
  //        qualitiesArray.push({
  //          value: qualities[quality].value,
  //          label: qualities[quality].label
  //        })
  //      }
  //    }
  //  }
  //  return qualitiesArray
  //}

  const userId = useParams().userId

  const [professions, setProfession] = useState({})
  const [qualities, setQualities] = useState([])
  const [data, setData] = useState({
    name: "",
    email: "",
    profession: "",
    sex: "",
    qualities: []
  })

  console.log(data)
  useEffect(() => {
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
    api.users.getById(userId).then((data) => {
      setData({
        ...data,
        profession: data.profession._id,
        qualities: data.qualities.map((quality) => ({
          label: quality.name,
          value: quality._id,
          color: quality.color
        }))
      })
    })
  }, [])

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  console.log(Object.values(data).length !== 0)
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {data.profession ? (
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
                value={data.profession}
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
              <button className="btn btn-primary w-100 mx-auto">
                Обновить
              </button>
            </form>
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  )
}

EditUserPage.propTypes = {
  userId: PropTypes.string
}

export default EditUserPage
