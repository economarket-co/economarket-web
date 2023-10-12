import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Banners from '../../components/Banners'
import bg from "../../assets/BackgroundComparador.jpeg"
import Comparador from '../../components/Comparador'
import Sugerencias from '../../components/carrito/Sugerencias'
import { useStatevalue } from '../../StateProvider'
import { DataService } from '../../components/utilities/DataService'
import { actionTypes } from '../../reducer'


const VistaComparador = () => {
  const [loading, setLoading] = useState(false);
    const [{selectedProduct}, dispatch ] = useStatevalue();

    useEffect(()=>{
      window.scrollTo(0, 0);
      if(selectedProduct){
        DataService(`/tiendas/product/${selectedProduct.id}`, "GET")
            .then((r) =>{

                setLoading(true)

                dispatch({
                    type: actionTypes.SELECT_PRODUCTS,
                    item: r.data
                })

                setLoading(false);
            })

            .catch((e) =>{

                console.log("Error al traer los datos!");
                setLoading(false);
            })
      }
    },[loading])
  return (
    <Grid container>
        <Banners title="Comparador de precios" imagen={bg} />
        <Comparador />
        <Sugerencias/>
    </Grid>
  )
}

export default VistaComparador