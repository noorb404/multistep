import React, { useState } from 'react'

export default () => {
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')

  return (
    <div>
      <div style={{textAlign:"right"}} className='row'>
        <div className='six columns'>
          <label>שם עסק</label>
          <input
            style={{textAlign:"right"}}
            className='u-full-width'
            placeholder='שם עסק'
            type='text'
            onChange={e => setEmailConfirm(e.target.value)}
            value={emailConfirm}
          />
        </div>
      </div>
      <div style={{textAlign:"right"}} className='row'>
        <div className='six columns'>
          <label>בחר סוג עסק</label>
          <select class="custom-select">
          <option value="1">עוסק מורשה</option>
          <option value="2">עוסק פטור</option>
          <option value="3">חברה</option>
        </select>
        </div>
      </div>
    </div>
  )
}
