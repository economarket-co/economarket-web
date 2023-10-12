import { Grid, Switch, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardSupermercado from '../CardSupermercado';
import { useStatevalue } from '../../StateProvider';
import {DataService} from "../utilities/DataService"
import { actionTypes } from '../../reducer';
import Loading from '../utilities/Loading';


const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#F5F5F5',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#F5F5F5' : '#033E8C',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? '#F5F5F5' : '#033E8C',
      boxSizing: 'border-box',
    },
  }));


const Comparaciones = () => {

    const [activo, setActivo] = useState(true);
    const [cargando, setCargando] = useState(false);
    const [{tiendas,basket, totalBasket, barato}, dispatch] = useStatevalue();
    
    useEffect(() =>{

      let basketId = []

      basket.forEach(p => {
          basketId.push(p.id)
      });

      DataService("/tiendas/product", "POST", {"lista_id": basketId})
          .then(r =>{   
              setCargando(true);
              console.log("Estoy Cargando??????", cargando);
              let total = {Exito:0, Olimpica:0, Jumbo:0,Carulla:0} 
              r?.data.forEach(p =>{
                  let bitem = basket.find(bp => p.id === bp.id)
                  p.cantidad = bitem.cantidad
                  tiendas.forEach(m =>{
                      if(Object.keys(p[m]).length !== 0){
                          console.log("Price >>>>", p[m].price);
                          console.log("Cantidad >>>>", p.cantidad);
                          total[m] += (p[m].price * p.cantidad)
                      }
                  })
                  dispatch({
                      type: actionTypes.PUT_TOTAL_BASKET,
                      item: total
                  })
                  dispatch({
                    type: actionTypes.ADD_BARATO,
                    item: total
                })
                  console.log(totalBasket);
              })
              console.log("Estoy Cargando??????", cargando);
              setCargando(false);
          })
          .catch(e =>{
              console.log("Error al obtener los datos", e);
              setCargando(false);
          })

  }, [cargando, dispatch, basket])
    

  return (
      <>
      {
        !cargando ?
        <Grid
        container
        sx={{
          width: "100%",
          padding: "5%",
        }}
      >
        <Grid container item direction="column" alignItems="center">
          <Grid item>
            <Typography variant='h3' fontFamily="DM Serif Display" fontWeight={400}>
              Compara los precios
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" alignItems="center" marginTop="2%">
            <Grid item>
              <Typography color="#434343" variant='p' fontFamily="Quicksand" fontWeight={500}>
                Comprando todo en el mismo supermercado
              </Typography>
            </Grid>
            <Grid item marginLeft={"1%"}>
              <AntSwitch
                checked={activo}
                onChange={(event) => setActivo(event.target.checked)}
                color="primary"
              />
              </Grid>
          </Grid>
          <Grid item marginTop="1%">
              <Typography variant='body2' color="#9D9D9D" fontFamily="Quicksand" fontWeight={500}>
              Presiona el switch para ver los precios dividiendo la compra por supermercados
              </Typography>
          </Grid>

          <Grid item marginTop = "5%">
            <Grid container justifyContent="center" spacing={3} sx={{
              paddingTop: "0"
            }}>
              {
                tiendas.map(m =>(
                  <Grid sx={
                    m === barato ? {transform: 'translateY(-12.5%)'} : {}
                  } item lg = {3} md = {6} marginTop={"5%"}>
                      <CardSupermercado key={m} tienda={m} />
                    </Grid>
                ))
              }
              </Grid>
              {/* <Frame /> */}
          </Grid>
        </Grid>
      </Grid>
      : <Loading />
    }
    </>
  )
}

export default Comparaciones