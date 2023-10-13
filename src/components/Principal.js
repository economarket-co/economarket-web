import React from 'react'
import { Button, Grid, Typography, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import bg from "../assets/Fondoeconomarket.mov"
 // import bienvenida from "../assets/Bienvenida.png"

export const Principal = () => {
  const isMobile = useMediaQuery("(max-width: 768px)"); 
  return (
    <Grid container paddingBottom={isMobile ? "16%": "10%" } sx={{
      justifyContent: 'center',
      paddingLeft: "16.66%",
      paddingRight: "16.66%",
      paddingTop: "10%",
      textAlign: "center",
      }}>
          <video src={bg} autoPlay muted loopc height={isMobile ? '110%' : "100%"} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}>
          Your browser does not support the video tag.
        </video>
        <Grid item direction="column" sx ={{color: "white", width: "100%", height: "auto" }}>
          <Typography fontFamily="DM Serif Display" variant={!isMobile ?'h1': "h4"} fontWeight={400}>
          Lo que buscas, al mejor precio 
          </Typography>
        </Grid>

        <Grid item direction="column" sx ={{color: "white", marginTop: "3.32%", width: "100%", height: "auto"}}>
          <Typography variant={!isMobile ? 'h6': "body2"} fontFamily="Quicksand">
          En Economarket puedes comparar los precios del mismo producto en diferentes supermercados. Añade productos a tu carrito y encuentra los precios perfectos para tu mercado.
          </Typography>
        </Grid>
        <Grid item direction="column" sx= {{marginTop: "5.8%"}}>
        
        <Link to="/productos">
          <Button variant="contained" sx={{maxHeight: "100%",fontFamily: "Quicksand", color: "#033E8C" ,backgroundColor: "white"}}>Empieza a mercar</Button>
        </Link>
        </Grid>
    </Grid>
  )
}
