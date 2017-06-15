import React from 'react'

import Output from './Output'

const OutputList = props => {

  const outputs = props.outputs

  return (
    <div className='output'>
      { outputs.map( (output, i) => <Output  key={i} message={output.message} /> ) }
    </div>
  )

}

export default OutputList
