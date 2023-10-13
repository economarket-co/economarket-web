import { AddShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material'
import { Button, Card, CardContent, CardMedia, Grid, IconButton, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import tagIcon from "../assets/tag_icon.svg"
import { useStatevalue } from '../StateProvider'
import { actionTypes } from '../reducer'
import { Link } from 'react-router-dom'


const Product = ({imagen, descripcion, id, isFavorite=false, unidad, disp}) => {

   const [favorite, setFavorite] = useState(isFavorite)
   const [{basket, products}, dispatch] = useStatevalue();

   const disponibilidad = () =>{

    if(disp){
        let str = ""
        disp.forEach(m =>{
            str += m+", "
        })
        return str.slice(0,-2)
    }else{
        return ""
    }
    

   }

   const clickFavorite = () =>{
        if(isFavorite){
            dispatch({
                type: actionTypes.REMOVE_FAVORITE,
                id: id
            })
            setFavorite(!favorite)
        }
        else{
            dispatch({
                type: actionTypes.ADD_FAVORITE,
                item: products[id - 1]
            })
            setFavorite(!favorite);
        }
   }

   const addToBasket = () =>{

        let producto = products[id - 1]

        let bobject = basket.find((p) => producto.id === p.id)

        if(bobject){

            basket.forEach(p => {
                if(p.id === id){
                    p.cantidad +=1
                }
            });
            dispatch({
                type: actionTypes.PUT_THE_BASKET,
                item: basket
            })
        }else{
            bobject = producto
            bobject.cantidad = 1
            dispatch({
                type: actionTypes.ADD_TO_BASKET,
                item: bobject
            })
        }
   }

   const selectProduct = () =>{dispatch({
    type: actionTypes.SELECT_PRODUCTS,
    item: products[id - 1]
   })}

   const isMobile = useMediaQuery("(max-width: 768px)")
   const widthCard = !isMobile ? 229: 80;
   const heightCard =!isMobile ? 400: 180;
   const fontMobile = isMobile ? "7.4px": "";
   const widthMobile = isMobile ? "10px": "";
   const heightMobile = isMobile ? "10px": "";

  return (
    <>
        <Card onClick={selectProduct} maxWidth={widthCard} maxHeight={heightCard} sx={{position: 'relative' }}>

            <CardMedia
                    component="img"
                    alt="Imagen"
                    maxWidth= {!isMobile ? "200" : "80"}   // Ajusta el ancho para que se ajuste a la tarjeta
                    maxHeight={!isMobile ? "200": "80" } 
                    image={imagen}
                    title={descripcion}
                    sx={{
                    position: 'relative',
                    }}
                />
            <IconButton
                sx={{
                position: 'absolute',
                top: '2%', // Ajusta la posición vertical dentro de la tarjeta
                right: '2%', // Ajusta la posición horizontal dentro de la tarjeta
                zIndex: 1, // Asegura que el IconButton esté por encima de la image
                }}
                aria-label="Favorito"
                onClick={clickFavorite}
            >
                {favorite ? <Favorite/> : <FavoriteBorder />}
            </IconButton>
            <CardContent width= "100%" height = "50%">
                <Link to="/comparador" style={{textDecoration: 'none'}} onClick={selectProduct}>
                <Typography fontSize={isMobile && "8.4px"} color="#343434" variant={!isMobile ? 'body2': "subtitle2" } fontFamily="Quicksand" fontWeight="500">
                {descripcion}
                </Typography>
                </Link>
                <Typography fontSize={isMobile && "8.4px"} variant='caption' fontWeight={400} fontFamily="Quicksand" color="#646464">
                {unidad !== " " ? unidad : "1 unidad" }
                </Typography>
                <Grid container width="100%" height="1%" direction="row">
                    <Grid width="10%" item><img width={isMobile && "5px"} height={isMobile &&"5px"} alt='' src={tagIcon}/></Grid>
                    <Grid item width="90%" sx={{marginTop:"3%"}}>
                        <Typography 
                                    color="#646464" 
                                    fontFamily="Quicksand" 
                                    fontWeight="400"
                                    fontSize={!isMobile ? "9.04px": "6px" }
                                >
                        {disponibilidad()}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center" marginTop="5%" marginBottom ="-5%">
                    <Button onClick={addToBasket} variant="contained" 
                    sx={{
                        fontSize: fontMobile,
                        width: "100%", 
                        fontFamily: "Quicksand", 
                        fontWeight: "600", 
                        color:"#FFFFFF", 
                        backgroundColor:"#01CC5E"}}>
                    Agregar <AddShoppingCart sx={{marginLeft: "5%", width: widthMobile, height: heightMobile}}/>
                    </Button>
                </Grid>

            </CardContent>

        </Card>
    </>
  )
}

export default Product