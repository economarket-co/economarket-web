import React  from 'react'
import exito from "../../assets/ExitoCard.png"
import jumbo from "../../assets/JumboCard.png"
import olimpica from "../../assets/OlimpicaCard.png"
import carulla from "../../assets/CarullaCard.png"
import { Card, CardContent, CardMedia, Grid, Typography, useMediaQuery } from '@mui/material'
import { useStatevalue } from '../../StateProvider'

const CardComparador = ({tienda}) => {

    const [{selectedProduct}, dispatch ] = useStatevalue();

    const priceObject = "price" in selectedProduct[tienda]

    const calcularUnidad = () =>{

        if (priceObject){

            if (selectedProduct.unidades !== " "){
                
                const expresionRegular = /(\d+)\s+(.+)/;

                let unidad =  selectedProduct.unidades.match(expresionRegular)
                if (unidad){

                    let numero = parseInt(unidad[1])
                    return `${unidad[2]} `+formatPrice((selectedProduct[tienda].price/numero))
                }
            }else{

                return "Unidad a" + formatPrice(selectedProduct[tienda].price)
            }
        }else{

            return "No disponible"
        }

    }

    const formatPrice = (price) =>{

        return price.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
        })
    }

    const getImage = () =>{

        switch(tienda){

            case "Exito":
                return exito
            case "Olimpica":
                return olimpica
            case "Carulla":
                return carulla
            case "Jumbo":
                return jumbo
            default : 
        }
    }

    const getColor = () =>{

        switch(tienda){

            case "Exito":
                return "#ffe701"
            case "Olimpica":
                return "#C20012"
            case "Carulla":
                return "#8DBB00"
            case "Jumbo":
                return "#009541"
            default : 
        }
    }
    const isMobile = useMediaQuery("(max-width: 768px)"); 

  return (
    <Card sx={{
        position: 'relative',
        borderRadius: "20px",
        width: "100%",
        height: "100%"
    }}>

        <Grid container height={!isMobile ? 100 : 50} sx={{width:"100%", backgroundColor: getColor() }}>
                <CardMedia
                    component="img"
                    image={getImage()}
                    height="100%"
                    width= {50}
                />
        </Grid>

        <CardContent>
            <Typography variant='h6' color={priceObject ? "#434343" : "red"} fontFamily="Quicksand" fontWeight={500}>
                {priceObject ? formatPrice(selectedProduct[tienda].price).replace(/,00$/, '') : formatPrice(0) }
            </Typography>

            <Typography variant='subtitle1' color="#646464" fontFamily="Quicksand" fontWeight={500}>
                {selectedProduct.unidades !== " " ? selectedProduct.unidades: "1 unidad"}
            </Typography>

            <Typography variant='body2' color="#646464" fontFamily="Quicksand" fontWeight={500}>
                {calcularUnidad()}
            </Typography>

        </CardContent>
    </Card>
  )
}

export default CardComparador