import React from "react"
import PropTypes from "prop-types"
import TableBody from "./tableBody"
import TableHeader from "./table-header"

const Table = ({ onSort, selectedSort, columns, data, children }) => {
  return (
    <table className="table">
      {children || (
        <>
          <TableHeader {...{ onSort, selectedSort, columns }} />
          <TableBody {...{ data, columns }} />
        </>
      )}
    </table>
  )
}

Table.propTypes = {
  onSort: PropTypes.func,
  selectedSort: PropTypes.object,
  columns: PropTypes.object,
  data: PropTypes.array,
  children: PropTypes.array
}

export default Table
