import { Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Product from "../Product"
import { useStatevalue } from '../../StateProvider'
import { comprobarImagen } from '../utilities/GlobalFunctions'

// import { useStatevalue } from '../../StateProvider';

const Sugerencias = () => {
  //const [{basket},dispatch] = useStatevalue();

  const [{products}, dispatch] = useStatevalue();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (

    <Grid containera sx={{
      padding:"3% 5% 3% 5%",
      justifyContent:"start",
      backgroundColor: "#F6F6F6",
      overflow: "auto",
      maxHeight: "500px"
    }}>

      <Grid item>
        <Typography variant="h6" fontFamily="Quicksand" color="#434343" fontWeight={500}>
        Productos que te  pueden interesar
        </Typography>
      </Grid>

      <Grid item marginTop="2%">
          <Grid container spacing={2} alignItems="center">
            {
              products.slice(0,6).map(p => (
                <Grid item lg={2} md={4} sm = {2} xs = {4}>
                  <Product key={p.id} disp = {p.disponibilidad} unidad={p.unidades} descripcion={p.Descripcion} imagen={comprobarImagen(p)} id={p.id} /> 
                </Grid>  
              ))
            }
          </Grid>
      </Grid>
    </Grid>
  )
}

export default Sugerencias