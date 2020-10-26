import React, { useState } from 'react'

export default () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <div style={{textAlign:"right"}}>
      <div className='row'>
        <div className='six columns'>
          <label>שם</label>
          <input
            style={{textAlign:"right"}}
            className='u-full-width'
            placeholder='שם'
            type='text'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            autoFocus
       
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>שם משפחה</label>
          <input
                 style={{textAlign:"right"}}
            className='u-full-width'
            placeholder='שם משפחה'
            type='text'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>
    </div>
  )
}
