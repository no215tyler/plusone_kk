import { Box } from '@mui/material'
import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <Box component='footer' flexGrow={0}>
      <div className={classes.footer}>
        ©Plus One Co., Ltd.
      </div>
    </Box>
  )
}

export default Footer
