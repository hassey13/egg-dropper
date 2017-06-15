import React from 'react'

const EndOfGameOverlay = props => {

  const message = props.message

  return (
    <div className='eog-overlay'>
      {message}
    </div>
  )

}

export default EndOfGameOverlay
