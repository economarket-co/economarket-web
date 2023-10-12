import { Grid } from '@mui/material'
import React from 'react'
import aliados from "../assets/Sección de aliados.png"

export const Aliances = () => {
  return (
    <Grid container sx={{
        width: "100%",
        height: "auto",
    }}>

        <img alt='' src={aliados} width={"100%"} height={"100%"}/>
    </Grid>
  )
}
