import React from "react";

const BookMark = ({status, id, onBookMark, ...rest}) => {
  
  return( 
    <>
      {status === false ? 
        <button 
          onClick={() => onBookMark(id)}
          className="btn btn-dark btn-sm"
        >
          <i className="bi bi-bookmark-heart" style={{fontSize: 1.1 + "em"}} ></i>
        </button>
        : 
        <button 
         onClick={() => onBookMark(id)}
         className="btn btn-outline-danger btn-sm"
        >
          <i className="bi bi-bookmark-heart-fill" style={{fontSize: 1.1 + "em"}} ></i>
        </button>
      }
    </>
  )
  
}

export default BookMark