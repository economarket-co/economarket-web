import { AddShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material'
import { Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
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

  return (
    <>
        <Card onClick={selectProduct} sx={{ maxWidth: 229, maxHeight:400, position: 'relative' }}>

            <CardMedia
                    component="img"
                    alt="Imagen"
                    width="200" // Ajusta el ancho para que se ajuste a la tarjeta
                    height="200"
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
                <Typography color="#343434" variant='body2' fontFamily="Quicksand" fontWeight="500">
                {descripcion}
                </Typography>
                </Link>
                <Typography variant='caption' fontWeight={400} fontFamily="Quicksand" color="#646464">
                {unidad !== " " ? unidad : "1 unidad" }
                </Typography>
                <Grid container width="100%" height="1%" direction="row">
                    <Grid width="10%" item><img alt='' src={tagIcon}/></Grid>
                    <Grid item width="90%" sx={{marginTop:"3%"}}>
                        <Typography 
                                    color="#646464" 
                                    fontFamily="Quicksand" 
                                    fontWeight="400"
                                    fontSize="9.04px"
                                >
                        {disponibilidad()}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center" marginTop="5%" marginBottom ="-5%">
                    <Button onClick={addToBasket} variant="contained" sx={{width: "100%", fontFamily: "Quicksand", fontWeight: "600", color:"#FFFFFF", backgroundColor:"#01CC5E"}}>
                    Agregar <AddShoppingCart sx={{marginLeft: "5%"}}/>
                    </Button>
                </Grid>

            </CardContent>

        </Card>
    </>
  )
}

export default Product