import { AppBar, Button, InputBase, InputLabel, makeStyles, Theme, Toolbar } from '@mui/material'
import React from 'react'

interface IStyle {
    backgroundColor: string
}


const UI = () => {
    
  return (
    <div>
        <AppBar>
      <Toolbar>
          <InputBase className='bg-white'/>
          <Button variant='contained' color='primary'>Submit</Button>
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default UI
