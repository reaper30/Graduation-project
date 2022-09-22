import React from "react";

const BookMark = ({status, id, onBookMark, ...rest}) => {
  
  return( 
    <>
      {status === false ? 
        <i className="bi bi-bookmark-heart" style={{fontSize: 2 + "em"}} onClick={() => onBookMark(id)}></i>
        : 
        <i className="bi bi-bookmark-heart-fill" style={{fontSize: 2 + "em"}} onClick={() => onBookMark(id)}></i>
      }
    </>
  )
  
}

export default BookMark