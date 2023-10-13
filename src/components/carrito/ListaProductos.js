import { Delete, ShoppingCartCheckout } from '@mui/icons-material'
import { Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Comparaciones from './Comparaciones';
import { useStatevalue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import { Link } from 'react-router-dom';
import { comprobarImagen } from '../utilities/GlobalFunctions';


const ListaProductos = ({data}) => {

  const [deleteButtom, setDeletebuttom] = useState(false)
  const [{basket, products}, dispatch] = useStatevalue()

  const [mostrarSegundoComponente, setMostrarSegundoComponente] = useState(false);

  const toggleSegundoComponente = () => {
    setMostrarSegundoComponente(!mostrarSegundoComponente);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  const deleteItem = (p) =>{
    let newBasket = basket;
    let id = null;
    newBasket.forEach(bP =>{
      if(bP.id === p.id){
        if(bP.cantidad > 1){
          bP.cantidad -= 1
        }else{
          id = bP.id
        }
      }
    });

    if (id){
      dispatch({
        type: actionTypes.REMOVE_ITEM,
        id: id
      });
    }else{
      dispatch({
        type: actionTypes.PUT_THE_BASKET,
        item: newBasket
      })
    }

  }



    const getDisponibilidad = () =>{

        let count = 0;
        let mercado = ["Olimpica", "Exito", "Carulla", "Jumbo"]

        data.forEach(p => {

            mercado.forEach(m =>{
                if(p.hasOwnProperty(m) && Object.keys(p[m]).length === 0){
                    count += 1;
                }
            })
        })

        return count;
    }

    const selectProduct = (id) =>{dispatch({
      type: actionTypes.SELECT_PRODUCTS,
      item: products[id - 1]
     })}
  return (
    <>
    
      <Grid container sx={{
          alignItems: "flex-start",
          backgroundColor: "#ededed",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          minHeight: "500px", 
          padding: "5%",  
          marginTop: "0.1%"
      }} spacing={!isMobile ?2 : 0}>

        {
          isMobile && <Grid item
          sx={{
            width: "100%",
            textAlign: "center",
            alignSelf: "end"
          }}
        >
    
          <Paper sx={{
                  width: "100%",
                  minHeight: "65%",
                  padding:"10% 10% 10% 10%",
                  justifyItems: "start",
                  alignItems: "start",
                  textAlign: "start"
          }}>
    
            <Grid container>
    
              <Grid item>
                <Typography color="#9D9D9D" fontFamily="Quicksand" fontWeight={600} variant='h6'>
                Resumen de compra
                </Typography>
              </Grid>
              <Grid item sx={{
                width: "100%",
                height: 1.5,
                marginTop :"2%",
                marginBottom: "2%",
                backgroundColor: "#B4B4B4"
              }}>
              </Grid>
    
              <Grid item>
    
                <Typography variant='p' color="#9D9D9D" fontFamily="Quicksand" fontWeight={500}>
                  Tienes {data.length } items en tu carrito.
                  <br/>
                  <br/>
                  {getDisponibilidad()} de tus productos no se encuentran en algunos supermercados. Revisa las listas y verifica que las alternativas sean de tu agrado.
                </Typography>
              </Grid>
    
            </Grid>

            <Grid item sx={{marginTop: "10%", width:"80%", height:"20%"}}>
              <Button sx={{
                  height: "70%",
                  width: "100%",
                  color: "#fff",
                  fontFamily: "Quicksand",
                  fontWeight: 500,
                  backgroundColor: "#01CC5E", 
                  "&:hover": {
                      backgroundColor: "#01CC5E", // Fondo del botón en estado hover
                      color: "#fff", // Color del texto en estado hover
                  }}}
                onClick={toggleSegundoComponente}
              >
                 ver comparaciones
              </Button>
            </Grid>
          </Paper>
        </Grid>
        }
    
        <Grid item
          marginTop={isMobile && "5%"}
          marginBotton={isMobile && "5%"}
          width={isMobile ? "100%" : "60%"}
          sx={{
            textAlign: "center"
          }}
        >
          <Paper sx={{
            width: "100%",
            height: "100%",
            padding:"2% 4% 2% 4%",
            justifyItems: "center",
            alignItems: "center"
          }}>
              <TableContainer >
                  <Table sx={{width: "100%"}}>
                      <TableHead>
                          <TableRow>
                              <TableCell sx={{
                                  fontFamily: "Quicksand",
                                  fontWeight: "600",
                                  color: "#646464",
                              }}>
                              Producto
                              </TableCell>
                              <TableCell align='right' sx={{
                                  fontFamily: "Quicksand",
                                  fontWeight: "500",
                                  color: "#646464",
                              }}>
                              Cantidad
                          </TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {
                              data.map(p =>(
                                  <TableRow key={p.Descripcion}>
                                      <TableCell 
                                      onMouseEnter={() => setDeletebuttom(true)} 
                                      onMouseLeave={() => setDeletebuttom(false)}
                                      component="th" sx={{
                                          fontFamily: "Quicksand",
                                          fontWeight: 500,
                                          color: "#646464",
                                          width: "100%"
                                      }}>
                                      <Grid container direction="row" alignItems="center">
                                      {deleteButtom && 
                                        <Grid item sx={{width: "7%", height: "7%",marginRight: "3%"}}>
                                          <IconButton onClick={() => deleteItem(p)}><Delete /></IconButton>
                                        </Grid>
                        
                                      }
                                      <Grid item sx={{width: "7%", height: "7%",marginRight: "3%"}}>
                                          <img alt='' src={comprobarImagen(p)} width={"100%"} height={"100%"}/>
                                      </Grid>
                                      <Grid item width="10 0%" height="100%">
                                          {p.Descripcion} 
                                      </Grid>
                                      </Grid>
                                      </TableCell>
                                      <TableCell align="right" >
                                      <Grid container direction="row" alignItems="center">
                                          <Grid item>
                                            {p.cantidad}
                                          </Grid>
                                          <Grid item marginLeft="25%">

                                            <Link to="/comparador" onClick={()=>selectProduct(p.id)}> 
                                              <IconButton sx={{width: 15, height: 15}} >
                                              <ShoppingCartCheckout sx={{color: "#01CC5E"}}/>
                                              </IconButton>
                                            </Link>
                                          </Grid>
                                      </Grid>
                                      </TableCell>
                                  </TableRow>
                              ))
                          }
                      </TableBody>
                  </Table>
              </TableContainer>
          </Paper>
        </Grid>

        {
          !isMobile && <Grid item
          sx={{
            width: "35%",
            height: "100%",
            textAlign: "center",
            alignSelf: "end"
          }}
        >
    
          <Paper sx={{
                  width: "100%",
                  minHeight: "65%",
                  padding:"10% 10% 10% 10%",
                  justifyItems: "start",
                  alignItems: "start",
                  textAlign: "start"
          }}>
    
            <Grid container>
    
              <Grid item>
                <Typography color="#9D9D9D" fontFamily="Quicksand" fontWeight={600} variant='h6'>
                Resumen de compra
                </Typography>
              </Grid>
              <Grid item sx={{
                width: "100%",
                height: 1.5,
                marginTop :"2%",
                marginBottom: "2%",
                backgroundColor: "#B4B4B4"
              }}>
              </Grid>
    
              <Grid item>
    
                <Typography variant='p' color="#9D9D9D" fontFamily="Quicksand" fontWeight={500}>
                  Tienes {data.length } items en tu carrito.
                  <br/>
                  <br/>
                  {getDisponibilidad()} de tus productos no se encuentran en algunos supermercados. Revisa las listas y verifica que las alternativas sean de tu agrado.
                </Typography>
              </Grid>
    
            </Grid>

            <Grid item sx={{marginTop: "10%", width:"80%", height:"20%"}}>
              <Button sx={{
                  height: "70%",
                  width: "100%",
                  color: "#fff",
                  fontFamily: "Quicksand",
                  fontWeight: 500,
                  backgroundColor: "#01CC5E", 
                  "&:hover": {
                      backgroundColor: "#01CC5E", // Fondo del botón en estado hover
                      color: "#fff", // Color del texto en estado hover
                  }}}
                onClick={toggleSegundoComponente}
              >
                 ver comparaciones
              </Button>
            </Grid>
          </Paper>
        </Grid>
        }
    
        
      </Grid>

      <Comparaciones data={data} />
    </>
  )
}

export default ListaProductos