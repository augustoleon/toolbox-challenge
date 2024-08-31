import React from 'react'
import PropTypes from 'prop-types'
import Loader from './Loaders'

function LoaderBoundary ({ children, loading }) {
  if (!loading) return children
  return (
    <div>
      <Loader />
    </div>
  )
}

LoaderBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool.isRequired
}

export default LoaderBoundary
