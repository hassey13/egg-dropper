import React from 'react'

const Egg = props => {

  const message = props.status.broken ? 'I am broken!' : 'I am ready to drop!'

  return (
    <div className='egg'>
      {message}
    </div>
  )

}

export default Egg
