import { Button, Card, CardContent, CardMedia, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React  from 'react'
import star from "../assets/star_.svg"
import { useStatevalue } from '../StateProvider'
import exito from "../assets/ExitoCard.png"
import jumbo from "../assets/JumboCard.png"
import olimpica from "../assets/OlimpicaCard.png"
import carulla from "../assets/CarullaCard.png"
import error from "../assets/Error.png"
import { comprobarImagen } from './utilities/GlobalFunctions'

const CardSupermercado = ({tienda}) => {

    const [{basket, totalBasket, barato, disponibilidad}, dispatch] = useStatevalue();

    const getDisponibilidad = (p) =>{

        let disponible = disponibilidad[tienda].find( (pD) => p.id === pD.id)

        if(disponible){
            return true;
        } else{
            return false;
        }
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

  return (
    <Card sx={{
        maxWidth: 383, 
        maxHeight: 903, 
        position: 'relative',
        borderRadius: "20px",
    }
    }>
        {
            barato === tienda &&
            <Grid container sx={{ 
                justifyContent: "center",
                alignContent: "center",
                width:"100%", 
                backgroundColor: "#01CC5E", 
                height: "50.55px" }}
            >
                <Grid item>
                    <Typography color="#FFFFFF" fontFamily="Quicksand" fontWeight={600} >
                    Opción más económica 
                    </Typography>
                </Grid>
                <Grid item sx={{marginLeft: "3%", marginTop: "0.7%"}}> 
                    <img alt='' src={star} />
                </Grid>
            </Grid>
        }
        <Grid container sx={{width:"100%", height:95 , backgroundColor: getColor() }}>
                <CardMedia
                    component="img"
                    image={getImage()}
                    height="100%"
                />
        </Grid>
        <CardContent>
            <Grid container>
                <Grid item>

                    <TableContainer >
                        <Table  sx={{width: "100%", maxHeight: "60",  borderCollapse: 'collapse'}}>
                            <TableBody>
                                {
                                    basket.map(p =>(
                                        <TableRow key={p.id}>
                                            <TableCell component="th" sx={{
                                                fontFamily: "Quicksand",
                                                fontWeight: 500,
                                                color: "#646464",
                                                maxHeight: "5%",
                                                border: 'none'
                                            }}>
                                            <Grid container direction="row" alignItems="center" sx={{
                                            }}>
                                            <Grid item sx={{width: "7%", height: "7%",marginRight: "3%"}}>
                                                <img alt='' src={comprobarImagen(p)} width={"100%"} height={"100%"}/>
                                            </Grid>
                                            <Grid item width="90%" height="100%" sx={!getDisponibilidad(p) ? {color: "red"} : {}}>
                                                {p.Descripcion} {!getDisponibilidad(p) ? <img alt='' src={error} style={{width: "7%", height: "7%"}} /> : ""}
                                            </Grid>
                                            </Grid>
                                            </TableCell>
                                            <TableCell align="right" sx={{border: 'none'}} >
                                                {p.cantidad}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Grid item sx={{
                    backgroundColor: "#E3E3E3",
                    width: "100%",
                    height: "1px",
                    marginTop: "5%"
                }}></Grid>

                <Grid container direction="column" sx ={{
                    alignContent: "end",
                    textAlign: "end",
                    marginTop: "2%"
                }}>
                    <Grid item>    
                        <Typography color="#9D9D9D" variant='body2' fontFamily="Quicksand" fontWeight="500">
                        {basket.length} productos de tu lista
                        </Typography>
                    </Grid>

                    <Grid item>    
                        <Typography color="#434343" variant='h5' fontFamily="Quicksand" fontWeight={500}>
                        {totalBasket[tienda]}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item width={"100%"} height={"20%"} marginTop="5%">

                    <Grid container justifyContent="center">
                        <Button sx={{
                            backgroundColor: "#01CC5E",
                            fontFamily: "Quicksand",
                            width: "90%",
                            color: "white",
                            height: "100%"
                        }}>
                            Compra la lista
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

        </CardContent>
    </Card>
  )
}

export default CardSupermercado