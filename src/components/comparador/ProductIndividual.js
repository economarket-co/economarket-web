import { Button, CardMedia, Grid, IconButton, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useStatevalue } from '../../StateProvider'
import { comprobarImagen } from '../utilities/GlobalFunctions'
import { AddShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material'
import { actionTypes } from '../../reducer'
import CardComparador from './CardComparador'

const ProductIndividual = () => {

    const [isFavorite, setIsFavorite] = useState(false)
    const [{selectedProduct,products, favoritos, tiendas, basket}, dispatch] = useStatevalue()

    useEffect(() =>{

        if(!selectedProduct){
            dispatch({
                type: actionTypes.SELECT_PRODUCTS,
                item: products[0]
            })
        }
        
        if(favoritos.find((p) => p.id === selectedProduct.id)){
            setIsFavorite(true)
        }else{
            setIsFavorite(false)
        }
    }, [isFavorite, favoritos, selectedProduct])

    const clickFavorite = () =>{
        if(isFavorite){
            dispatch({
                type: actionTypes.REMOVE_FAVORITE,
                id: selectedProduct.id
            })
            setIsFavorite(!isFavorite)
        }
        else{
            dispatch({
                type: actionTypes.ADD_FAVORITE,
                item: selectedProduct
            })
            setIsFavorite(!isFavorite);
        }
   }

   const  addToBasket = () =>{

    let producto = selectedProduct.id

    let bobject = basket.find((p) => producto.id === p.id)

    if(bobject){

        basket.forEach(p => {
            if(p.id === selectedProduct.id){
                p.cantidad +=1
            }
        });
        dispatch({
            type: actionTypes.PUT_THE_BASKET,
            item: basket
        })
    }else{
        bobject = selectedProduct
        bobject.cantidad = 1
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: bobject
        })
    }

   }

  return (
    <>
        {
            selectedProduct &&
        <Grid container spacing={5} alignItems="flex-start">
            <Grid item lg={6}>
                <Grid container width="100%" height="70%">


                    <Paper sx={{position: 'relative', width: "100%"}} >

                        <CardMedia
                            component="img"
                            alt="Imagen"
                            width="100%"
                            height="100%"
                            image={comprobarImagen(selectedProduct)}
                            sx={{position: "relative"}}
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
                                {isFavorite ? <Favorite/> : <FavoriteBorder />}
                            </IconButton>
                            
                    </Paper>
                </Grid>

                <Grid container justifyContent="center" marginTop="4%" height="15%">
                    <Button onClick={addToBasket} variant="contained" sx={{width: "100%", fontFamily: "Quicksand", fontWeight: "600", color:"#FFFFFF", backgroundColor:"#01CC5E"}}>
                    Agregar <AddShoppingCart sx={{marginLeft: "5%"}}/>
                    </Button>
                </Grid>

            </Grid>
            <Grid item lg={6} height="100%">
                <Typography marginTop="-1%" variant='h6' fontFamily="Quicksand" fontWeight={500} color="#646464">
                    {selectedProduct.Descripcion}
                </Typography>

                <Grid container spacing={3} marginTop="2%">
                    {
                        tiendas.map((m) =>(
                            <Grid item lg = {6} md = {12} sx = {6} xs ={12}>
                                <CardComparador key={m} tienda={m} />
                            </Grid>
                        ))
                        
                    }
                </Grid>
            </Grid>
        </Grid>
        }       
    </>
  )
}

export default ProductIndividual