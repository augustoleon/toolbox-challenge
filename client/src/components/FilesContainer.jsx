import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import LoaderBoundary from './LoaderBoundary'
import TableContainer from './TableContainer'
// import FileLines from "./FileLines";

import { fetchFiles } from '../slices/filesSlices'
import PropTypes from 'prop-types'

function FilesContainer () {
  const dispatch = useDispatch()
  const files = useSelector((state) => state.files.files)
  const loading = useSelector((state) => state.files.loading)
  const error = useSelector((state) => state.files.error)

  useEffect(() => {
    dispatch(fetchFiles())
  }, [dispatch])
  return (
    <section>
      <LoaderBoundary loading={loading}>
        <div className='overlay'>
          <div className='challenge-inner'>
            <div className='content-challenge'>
              <TableContainer files={files} error={error} />
            </div>
          </div>
        </div>
      </LoaderBoundary>
    </section>
  )
}

FilesContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.shape({ msg: PropTypes.string })
}

const mapStateToProps = state => ({
  files: state.files.files,
  loading: state.files.loading,
  error: state.files.error
})

export default connect(mapStateToProps)(FilesContainer)
