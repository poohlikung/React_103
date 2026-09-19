import React from 'react'

function Image({imageUrl}) {
  return (
    <div>
        <img src={imageUrl} width="300px" height="300px" alt="" />
    </div>
  )
}

export default Image