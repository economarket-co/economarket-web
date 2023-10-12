import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import bg from "../../assets/LoginBG.jpeg"
import SignIn from '../../components/login/SignIn'

const Login = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <Grid container component="main" maxWidth="xs" sx={{
        backgroundImage: `url("${bg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
    }}>
        <SignIn />
    </Grid>
  )
}

export default Login