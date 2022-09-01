import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

function ForgetPassword() {
  return (
    <div className='forgetpasswordform'>
        <h1>Login</h1>
        <form>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <br/>
          <Button variant="contained">
            Send Otp
          </Button>
        </form>
    </div>
  )
}

export default ForgetPassword