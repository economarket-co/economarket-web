import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
// import bienvenida from "../assets/Bienvenida.png"

export const Principal = () => {
  return (
    <Grid container position="static" sx={{
      width: "fixed" , 
      Height: "fixed",
      display: 'flex',
      justifyContent: 'center',
      backgroundImage: `url("https://s3-alpha-sig.figma.com/img/ea21/a301/996251dd5ef07c126479287e69cc5e17?Expires=1696809600&Signature=O7KyI9Qg4cdeQFGOmoRUfpCESx~7XIdVRvXwN2a5X5w5q9mwrfey31eOcigq9EAvt3aGaC~itRegcNSOjyf4fZNhw3YLEqGGefY8zKVlcSOllnPnzU3VXKWYdo2jS5kDGy89MKYgv-H1S4I~~AcrAPLu0iFsXDDSz-yZvmjMLfehbfRD~lxquzsrN2ToO0XB2~mkc4VpM2fH-Wc16N8kqtakYfwerF~M7YgUzLDKLg11yCwEVFNKxnGi6G7yVWkIxwMU5IUmfDY6Qp5QMux8RJ2IoZpUEusgg6nrFJcUIDuwlTSLQmhVlEF-Fv6N7iQHywrs2Ql5MFL6UEw3jVNnZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")`,
      paddingLeft: "16.66%",
      paddingRight: "16.66%",
      paddingBottom: "16.66%",
      paddingTop: "16.66%",
      backgroundPosition: 'center',
      backgroundSize: "cover",
      boxSizing: "inherit",
      textAlign: "center"
      }}>

        <Grid item direction="column" sx ={{color: "white", width: "100%", height: "auto" }}>
          <Typography fontFamily="DM Serif Display" variant='h2' fontWeight={400}>
          Lo que buscas, al mejor precio 
          </Typography>
        </Grid>

        <Grid item direction="column" sx ={{color: "white", marginTop: "3.32%", width: "100%", height: "auto"}}>
          <Typography fontFamily="Quicksand">
          En Economarket puedes comparar los precios del mismo producto en diferentes supermercados. Añade productos a tu carrito y encuentra los precios perfectos para tu mercado.
          </Typography>
        </Grid>
        <Grid item direction="column" sx= {{marginTop: "12.8%"}}>
        
        <Link to="/productos">
          <Button variant="contained" sx={{fontFamily: "DM Serif Display", backgroundColor: "#F28705"}}>Empieza a mercar</Button>
        </Link>
        </Grid>
    </Grid>
  )
}
