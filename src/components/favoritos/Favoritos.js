import { Grid } from '@mui/material'
import React from 'react'
import Product from '../Product'
import { useStatevalue } from '../../StateProvider'
import { comprobarImagen } from '../utilities/GlobalFunctions'

const Favoritos = () => {
    const [{favoritos}, dispatch] = useStatevalue();


  return (
    <Grid container marginTop="5%" spacing={3}>
      {
          favoritos.map(product =>(
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product key={product.id} isFavorite= {true} id = {product.id} descripcion={product.Descripcion} imagen={comprobarImagen(product)} />
          </Grid>
        ))
      }

    </Grid>
  )
}

export default Favoritos