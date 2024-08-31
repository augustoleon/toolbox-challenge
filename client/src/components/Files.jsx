import React from 'react'
import PropTypes from 'prop-types'

const Files = ({ file, lines, error }) => {
  
  return (
    <>
      {lines.length > 0
        && (
            lines.map((line, index) => (
              <tr key={`${line.text}-${index}`} role='gridcell'>
                <td>{file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          )
        }
    </>
  )
}

Files.propTypes = {
  file: PropTypes.string.isRequired,
  lines: PropTypes.array.isRequired
}

export default Files
