/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import ListaProductos from '../../components/carrito/ListaProductos'
import VistaCarritoVacio from '../../components/carrito/VistaCarritoVacio'
import { Grid } from '@mui/material'
import Sugerencias from '../../components/carrito/Sugerencias'
import { useStatevalue } from '../../StateProvider'
import { actionTypes } from '../../reducer'

const VistaCarrito = () => {

  const [isproduct, setIsproduct] = useState(false);

  const [{basket, products, tiendas}, dispatch] = useStatevalue();

  useEffect(() =>{
    window.scrollTo(0, 0);

    if (basket.length > 0) {
      setIsproduct(true);
      let disp = {}
      tiendas.forEach(m => {disp[m] = []})
      basket.forEach(p =>{
        tiendas.forEach(m =>{
          if(Object.keys(p[m]).length !== 0){
            disp[m].push(p)
          }
        })
      });
      dispatch({
        type: actionTypes.ADD_DISPONIBILIDAD,
        item: disp
      })
    }
    else{
      setIsproduct(false);
    }
  }, [isproduct, basket, dispatch])

  return (
    <Grid container>
        {
          isproduct ? <ListaProductos data={basket}/> : <VistaCarritoVacio />
        }
        <Sugerencias data={products.slice(0, 4)} />
    </Grid>
  )
}

export default VistaCarrito