import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import corazon from "../../assets/Vector.svg"
import { Link } from 'react-router-dom'

const SinFavoritos = () => {
  return (
    <Grid container direction="column" marginTop = "5%" alignItems="center" textAlign="center">
        <Grid item paddingTop="3%">
            <img alt='' src={corazon} />
        </Grid>
        <Grid item paddingTop="3%">
            <Typography color="#434343" fontWeight={600} variant='h5' fontFamily="Quicksand">
                No haz agregado nada aún
            </Typography>
        </Grid>

        <Grid item paddingTop="3%" width="50%">
            <Typography color="#434343" fontWeight={500} variant='p' fontFamily="Quicksand">
                Aprovecha tus favoritos para guardar productos que podrías comprar nuevamente
            </Typography>
        </Grid>

        <Grid item paddingTop="3%" width="35%">
            <Link to="/productos">
                <Button sx={{
                    fontFamily: "Quicksand",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    backgroundColor: "#01CC5E",
                    width: "100%"
                }}>
                    Empezar a agregar productos
                </Button>
            </Link>
        </Grid>
    </Grid>
  )
}

export default SinFavoritos