import React, { useState } from 'react'

export default () => {
  const [Income, setIncome] = useState('')
  const [Outcome, setOutcome] = useState('')
  return (
    <div>
      <div style={{textAlign:"right"}} className='row'>
        <div className='six columns'>
          <label>הכנסות העסק</label>
          <input
            style={{textAlign:"right"}}
            className='u-full-width'
            placeholder='₪'
            onChange={e => setIncome(e.target.value)}
            value={Income}
            type='text'
          />
        </div>
      </div>
      <div style={{textAlign:"right"}} className='row'>
        <div className='six columns'>
          <label>הוצאות העסק</label>
          <input
            style={{textAlign:"right"}}
            className='u-full-width'
            placeholder='₪'
            value={Outcome}
            onChange={e => setOutcome(e.target.value)}
            type='text'
          />
        </div>
      </div>
      <div style={{textAlign:"right"}} className='row'>
        <div className='six columns'>
          <label style={{color:"green"}}> {Income - Outcome} רווח של </label>
        </div>
      </div>
     

    </div>
  )
}
