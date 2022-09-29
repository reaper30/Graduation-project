import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
  return (
    <>
      <button
        className={"btn-sm btn btn" + (status ? "-danger" : "-dark")}
        {...rest}
      >
        <i
          className={"bi bi-bookmark" + (status ? "-heart-fill" : "-heart")}
          style={{ fontSize: 1.1 + "em" }}
        ></i>
      </button>
    </>
  );
};

BookMark.propTypes = {
  status: PropTypes.bool.isRequired
};

export default BookMark;
