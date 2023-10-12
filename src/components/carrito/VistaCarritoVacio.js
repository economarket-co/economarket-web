import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { AddShoppingCart} from '@mui/icons-material'

const VistaCarritoVacio = () => {
  return (

    <Grid container sx={{
      alignItems: "flex-start",
      backgroundColor: "#ededed",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      minHeight: "500px", 
      padding: "5%",  
      marginTop: "0.1%"
  }} spacing={2}>

    <Grid item
      sx={{
        width: "60%",
        height: "100%",
        textAlign: "center"
      }}
    >
      <Paper sx={{
        width: "100%",
        height: "100%",
        padding:"10% 20% 10% 20%",
        justifyItems: "center",
        alignItems: "center"
      }}>

        <Grid container sx={{marginBottom: "5%",alignContent: "center", justifyContent: "center"}}>
          <AddShoppingCart sx={{
            width: "90px",
            height: "90px"
          }} />
        </Grid>

        <Grid container sx={{alignContent: "center", justifyContent: "center"}}>

          <Grid item>
            <Typography color="#434343" variant='h6' fontFamily="Quicksand" fontWeight={600}>
            ¡Empieza a agregar productos!
            </Typography>
          </Grid>

          <Grid item sx={{marginTop: "5%"}}>

            <Typography variant="p" color="#646464" fontFamily="Quicksand" fontWeight={500}>
            Suma productos y descubre la manera más conveniente de comprarlos
            </Typography>
          </Grid>
        </Grid>


        <Grid container sx={{
          marginTop: "10%",
          justifyContent: "center",
          
        }}>

          <Link to="/productos">
            <Button sx={{
              backgroundColor: "#01CC5E",
              color: "white",
              fontFamily: "Quicksand",
              fontWeight: 600,
            }}>
              ver todos los productos
            </Button>
          </Link>
        </Grid>
      </Paper>
    </Grid>

    <Grid item
      sx={{
        width: "35%",
        height: "100%",
        textAlign: "center",
        alignSelf: "end"
      }}
    >

      <Paper sx={{
              width: "100%",
              height: "40%",
              padding:"10% 10% 10% 10%",
              justifyItems: "start",
              alignItems: "start",
              textAlign: "start"
      }}>

        <Grid container>

          <Grid item>
            <Typography color="#9D9D9D" fontFamily="Quicksand" fontWeight={600} variant='h6'>
            Resumen de compra
            </Typography>
          </Grid>
          <Grid item sx={{
            width: "100%",
            height: 1.5,
            marginTop :"2%",
            marginBottom: "2%",
            backgroundColor: "#B4B4B4"
          }}>
          </Grid>

          <Grid item>

            <Typography variant='p' color="#9D9D9D" fontFamily="Quicksand" fontWeight={500}>
            Aquí verás información de tu carrito a medida en que ingreses productos
            </Typography>
          </Grid>

        </Grid>
      </Paper>
    </Grid>
  </Grid>
  )
}

export default VistaCarritoVacio