import React, { useRef, useEffect } from 'react'
import lottie from 'lottie-web-light'
import spinner from '../assets/json/spinner.json'

function Loader () {
  const newLoaderRef = useRef(null)

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: newLoaderRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: spinner
    })

    return () => {
      animation.destroy()
    }
  }, [])

  return <div className='loader' ref={newLoaderRef} />
}

export default React.memo(Loader)
