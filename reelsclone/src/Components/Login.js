import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system';
function Login() {
  return (
    <div>
      <div className='corousel'>
      </div>
      <div className='loginform'>
        <h1>Login</h1>
        <form>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <br/>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <br/>
          <Button variant="contained">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login