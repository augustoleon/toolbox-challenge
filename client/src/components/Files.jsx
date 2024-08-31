import React from 'react'
import PropTypes from 'prop-types'

const Files = ({ file, lines }) => {
  return (
    <>
      {lines.length > 0
        ? (
            lines.map((line, index) => (
              <tr key={`${line.text}-${index}`} role='gridcell'>
                <td>{file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          )
        : (
          <tr>
            <td colSpan='4'>No data available</td>
          </tr>
          )}
    </>
  )
}

Files.propTypes = {
  file: PropTypes.string.isRequired,
  lines: PropTypes.array.isRequired
}

export default Files
