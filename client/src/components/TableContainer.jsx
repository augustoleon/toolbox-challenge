import React from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table'
import Files from './Files'

function TableContainer ({ files, error }) {
  return (
    <div>
      <h5 className='text-left title'>{error ? `Error: ${error.msg}` : 'React Test App'}</h5>
      <Table responsive striped bordered>
        <thead>
          <tr style={{ 'border-bottom': '2px solid black'}}>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
            {
                files?.data && files?.data?.map(({ file, lines }, index) =>
                    <Files key={`${index + 1}`} file={file} lines={lines} />
                )
            }
        </tbody>
      </Table>
    </div>
  )
}

TableContainer.propTypes = {
  files: PropTypes.shape({}),
  error: PropTypes.string
}

TableContainer.defaultProps = {
  files: {},
  error: null
}

export default TableContainer
