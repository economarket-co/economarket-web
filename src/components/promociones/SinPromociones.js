import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const SinPromociones = () => {
  return (
    <Grid container direction="column" marginTop = "5%" alignItems="center" textAlign="center">
        <Grid item paddingTop="3%">
            <Typography color="#B6B6B6" fontWeight={600} variant='h1' fontFamily="Quicksand">
                :(
            </Typography>
        </Grid>
        <Grid item paddingTop="3%">
            <Typography color="#434343" fontWeight={600} variant='h5' fontFamily="Quicksand">
                Hoy no tenemos promociones
            </Typography>
        </Grid>

        <Grid item paddingTop="3%" width="50%">
            <Typography color="#434343" fontWeight={500} variant='p' fontFamily="Quicksand">
                Suscríbete a nuestro News Letter para enterarte de nuevas promociones y no perderte precios bajos
            </Typography>
        </Grid>

        <Grid item paddingTop="3%" width="19%">
            <Button sx={{
                fontFamily: "Quicksand",
                fontWeight: 600,
                color: "#FFFFFF",
                backgroundColor: "#01CC5E",
                width: "100%"
            }}>
                suscribirme
            </Button>
        </Grid>
    </Grid>
  )
}

export default SinPromociones