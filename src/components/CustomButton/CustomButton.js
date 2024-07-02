import { Button } from '@mui/material'
import React from 'react'

export default function CustomButton(props) {
  return (
    <div>
<Button color='success' fullWidth sx={{backgroundColor:"red", padding:"10px"}}>{props.content}</Button>

    </div>
  )
}
