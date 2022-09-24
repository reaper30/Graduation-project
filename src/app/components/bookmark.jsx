import React from "react";

const BookMark = ({status, ...rest}) => {

  return( 
    <>
      <button 
        className={"btn-sm btn btn" + (status ? "-danger" : "-dark")}
        {...rest}
      >
        <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "-heart")} style={{fontSize: 1.1 + "em"}} ></i>
      </button>
   
    </> 
  )
  
}

export default BookMark