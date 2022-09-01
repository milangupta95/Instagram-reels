import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

function SignUp() {
  return (
    <div className='signupform'>
        <h1>Sign Up</h1>
        <form>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <br/>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <br/>
          <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
          <br/>
          <Button variant="contained">
            Sign Up
          </Button>
        </form>
    </div>
  )
}

export default SignUp