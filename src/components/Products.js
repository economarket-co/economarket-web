import {Grid, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import generic from "../assets/Generic.png"
import { useStatevalue } from '../StateProvider'
import GenericPantalla from './GenericPantalla'

const Products = () => {

  const [{products, selectedCategoria}, dispatch] = useStatevalue();
  const [filtrado, setFiltrado] = useState([]);

  useEffect(()=>{

    if(selectedCategoria){

      const filteredResult = products.filter((p) =>
        p.Categoria === selectedCategoria
      );
      setFiltrado(filteredResult)

    }else{

      setFiltrado(products);
    }

  },[selectedCategoria, filtrado, products])

  const comprobarImagen = (product) =>{

    if("Carulla" in product && "img" in product.Carulla){

      return product.Carulla.img
    }else{
      if("Exito" in product && "img" in product.Exito){

        return product.Exito.img
      }else{
        if("Olimpica" in product && "img" in product.Olimpica){

          return product.Olimpica.img
        }else{
          return generic
        }
      }
    }
  }
  return (

    <>
    <GenericPantalla />
    <Grid container marginTop="5%" spacing={3}>
      {

          filtrado.map(product =>(
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product key={product.id} unidad={product.unidades} id = {product.id} descripcion={product.Descripcion} disp={product.disponibilidad} imagen={comprobarImagen(product)} />
          </Grid>
        ))
      }
    </Grid>
    <Grid container marginTop="5%" justifyContent="center" textAlign="center">
      
      <Grid item>
        <Typography variant='h6' fontFamily="Quicksand" fontWeight={600} color="#434343">
        Estamos trabajando para agregar más productos
        </Typography>
      </Grid>
      <Grid item>
        <Typography marginTop="5%" variant='body2' fontFamily="Quicksand" fontWeight={500} color="#646464">
        Suscríbete a nuestro News Letter para estar al tanto de <br/>
        nuestras últimas actializaciones.
        </Typography>
      </Grid>
    </Grid>
    </>
  )
}

export default Products