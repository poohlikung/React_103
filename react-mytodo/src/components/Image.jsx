import React from 'react'
import PropTypes from 'prop-types'
export default function Image({imageUrl}) {
  return (
    <div>
    
        <img src={imageUrl} width="100px" height="100px" alt="" />
    </div>
  )
}

Image.propTypes = {
  imageUrl: PropTypes.string
}