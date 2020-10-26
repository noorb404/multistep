import React, { useState } from 'react'

export default () => {
  const [Income, setIncome] = useState('')
  const [Outcome, setOutcome] = useState('')
  var result = 'רווח של'

  function check(){
    if(Income-Outcome>=0){
      return result
    }else{
      return 'הפסד של'
    }

  }

  return (
    <div>
      <div style={{textAlign:"right"}} className='row'>
        <div className='six columns'>
          <label>הכנסות העסק חודשית</label>
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
          <label>הוצאות העסק חודשית</label>
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
          <label>₪ {Math.abs(Income - Outcome)} {check()} </label>
        </div>
      </div>
     

    </div>
  )


}
