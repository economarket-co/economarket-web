import { Grid, Typography } from '@mui/material'
import React from 'react'
import Product from "../Product"
import { useStatevalue } from '../../StateProvider'

// import { useStatevalue } from '../../StateProvider';

const Sugerencias = () => {
  //const [{basket},dispatch] = useStatevalue();

  const [{products}, dispatch] = useStatevalue();

  return (

    <Grid container sx={{
      padding:"3% 5% 3% 5%",
      justifyContent:"start",
      backgroundColor: "#F6F6F6"
    }}>

      <Grid item>
        <Typography variant="h6" fontFamily="Quicksand" color="#434343" fontWeight={500}>
        Productos que te  pueden interesar
        </Typography>
      </Grid>

      <Grid item marginTop="2%">
        <Grid container spacing={2}>
          {
            products.slice(0,5).map(p => (
              <Grid item xs = {8} md={6} sm={6} lg = {2}>
                <Product key={p.id} disp = {p.disponibilidad} unidad={p.unidades} descripcion={p.Descripcion} imagen={p.Carulla.img} id={p.id} /> 
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Sugerencias