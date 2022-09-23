import React from "react";

const BookMark = ({status, id, onBookMark, ...rest}) => {
  return( 
    <>
      <button 
        onClick={() => onBookMark(id)}
        className={"btn-sm btn btn" + (status ? "-danger" : "-dark")}
      >
        <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "-heart")} style={{fontSize: 1.1 + "em"}} ></i>
      </button>
   
    </> 
  )
  
}

export default BookMark