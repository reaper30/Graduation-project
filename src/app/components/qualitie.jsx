import React from "react";

const Qualitie = ({color, name}) => {
  const tableQualityBadge = (item) => {
    let classes = 'm-1 badge bg-'
    return  classes+=item
  }
  
  return (
    <>
      <span className={tableQualityBadge(color)}>{name}</span>
    </>
  )
}

export default Qualitie