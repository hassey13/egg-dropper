import React from 'react'

import Egg from './Egg'

const Eggs = props => {

  const eggs = props.eggs

  return (
    <div className='egg-holder'>
      { eggs.map( ( egg, i ) => <Egg key={i} status={ egg } /> ) }
    </div>
  )

}

export default Eggs
