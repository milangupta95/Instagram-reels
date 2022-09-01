import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

function ResetPassword() {
  return (
    <div className='resetpasswordform'>
        <h1>Reset Password</h1>
        <form>
          <TextField id="outlined-basic" label="Otp" variant="outlined" />
          <br/>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <br/>
          <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
          <br/>
          <Button variant="contained">
            Reset Password
          </Button>
        </form>
    </div>
  )
}

export default ResetPassword