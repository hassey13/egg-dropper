import React from 'react'

const Output = props => {

  const message = props.message

  return (
    <div className='output'>
      {message}
    </div>
  )

}

export default Output
