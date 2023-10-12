import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import SignUp from '../../components/login/SignUp'
import bg from "../../assets/LoginBG.jpeg"


const Registro = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <Grid container component="main" maxWidth="xs" sx={{
        backgroundImage: `url("${bg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
    }}>
        <SignUp />
    </Grid>
  )
}

export default Registro