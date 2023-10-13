import {Grid, Typography, useMediaQuery} from '@mui/material'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import generic from "../assets/Generic.png"
import { useStatevalue } from '../StateProvider'
import GenericPantalla from './GenericPantalla'

const Products = () => {

  const [{products, selectedCategoria, selectedFiltroTiendas}, dispatch] = useStatevalue();
  const [filtrado, setFiltrado] = useState([]);

  useEffect(()=>{

    let filt = []
        
    if(selectedCategoria){

      const filteredResult = products.filter((p) =>
        p.Categoria === selectedCategoria
      );
      filt = filteredResult
      setFiltrado(filteredResult)

    }else{
      filt = products
      setFiltrado(products);
    }

    if(selectedFiltroTiendas){

      const filter = filt.filter((p) =>
          p.disponibilidad.includes(selectedFiltroTiendas)
      );
      setFiltrado(filter)
    }else{
      setFiltrado(filt);
    }
    // if(selectedFiltroTiendas.length > 0){

    //   const filtered = []

    //   filtrado.forEach(p =>{

    //     selectedFiltroTiendas.forEach(t =>{

    //       if(p.disponibilidad.includes(t) && !filtered.includes(p)){

    //         filtered.push(p);
    //       }
    //     })
    //   })
    //   setFiltrado(filtered)
    // }

  },[selectedCategoria, products, selectedFiltroTiendas])

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
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (

    <>
    <GenericPantalla />
    <Grid container marginTop="5%" spacing={!isMobile ? 3 : 2}>
      {

          filtrado.map(product =>(
          <Grid item xs={4} sm={3} md={4} lg={3}>
            <Product key={product.id} unidad={product.unidades} id = {product.id} descripcion={product.Descripcion} disp={product.disponibilidad} imagen={comprobarImagen(product)} />
          </Grid>
        ))
      }
    </Grid>
    <Grid container display="flow" direction="colum" marginTop="5%" justifyContent="center" alignItems="center" textAlign="center">
      
      <Grid item>
        <Typography variant='h6' fontFamily="Quicksand" fontWeight={600} color="#434343">
        Estamos trabajando para agregar más productos
        </Typography>
      </Grid>
      <Grid item>
        <Typography marginTop="1%" variant='body2' fontFamily="Quicksand" fontWeight={500} color="#646464">
        Suscríbete a nuestro News Letter para estar al tanto de <br/>
        nuestras últimas actializaciones.
        </Typography>
      </Grid>
    </Grid>
    </>
  )
}

export default Products