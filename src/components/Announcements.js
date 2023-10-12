import { Grid, Typography, Paper, Card, CardMedia } from '@mui/material'
import React from 'react'
import imagen1 from "../assets/Ejemplo2.png"
import imagen2 from "../assets/ejemplo3.png"
import imagen3 from "../assets/ejemplo7.png"
import imagen4 from "../assets/ejemplo4.png"
import imagen5 from "../assets/ejemplo5.png"
import imagen6 from "../assets/ejemplo.png"

const Announcements = () => {
  return (
    <Grid container
    alignItems="center"
    sx={{
        backgroundColor: "white",
        justifyContent: "center",
        boxSizing: "inherit",
        }}>

        <Grid container spacing={0.5}
            sx = {{
                justifyContent: "center",
                paddingLeft: "7.6%",
                paddingRight: "7.6%",
                paddingTop: "7.6%",
                paddingBottom: "10%",
                cursor: "pointer"
            }}
        >
            <Grid item xs={6} direction="column" sx={{overflow: "hidden"}}>
                <Paper elevation={3} 
                sx={{
                    background: "linear-gradient(45deg, rgb(217, 4, 62), transparent)", 
                    // width: "100%", 
                    minHeight: 200,
                    left: 0,
                    top: 0,
                }}
                >
                {/* <Card elevation={0} sx={{alignContent: "unset "}}>
                    <CardMedia 
                        component="img"
                        alt="Imagen superpuesta"
                        image={imagen6}
                        width="100"
                        height="100"
                    >
                    </CardMedia>
                </Card> */}
                    <Grid item direction="row" width="70%" height="auto" sx={{paddingTop: "5%", paddingLeft: "5%"}}>
                        <Typography color="#FFFFFF" variant='h4' fontFamily="DM Serif Display" >
                        ¡Nuestras mejores promociones!
                        </Typography>
                        <Typography color="#FFFFFF" variant = 'p' fontFamily="Quicksand">
                        Apuntate a nuestro News Letter para no perderte ninguno de nuestros descuentos.
                        </Typography>

                    </Grid>
                </Paper>

            </Grid>
            <Grid item xs={3} >
                <Paper 
                sx={{
                    backgroundImage: `url(${imagen1})`, 
                    width: "100%", 
                    minHeight: "200px",
                    maxHeight: "100%",
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                }}></Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper 
                    sx={{
                    backgroundImage: `url(${imagen2})`, 
                    width: "100%", 
                    minHeight: "200px",
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                }}></Paper> 
            </Grid>
            <Grid item xs={3} >
                <Paper 
                sx={{
                    backgroundImage: `url(${imagen3})`, 
                    width: "100%", 
                    minHeight: "230px",
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                }}></Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper 
                    sx={{backgroundImage: `url(${imagen4})`, 
                    width: "100%", 
                    minHeight: "230px",
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                }}
                ></Paper> 
            </Grid>
            <Grid item xs={6}>
                <Paper 
                sx={{
                    backgroundImage: `url(${imagen5})`, 
                    width: "100%", 
                    minHeight: "230px", 
                    textAlign: "center",
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                }}>
                    {/* <Typography variant='h5' fontFamily="DM Serif Display" fontSize="461 148">
                    ¿Tu despensa lo necesita? ¡Nosotros lo encontramos!
                    </Typography>
                    <Typography variant = 'p' fontFamily="Quicksand" fontSize="373 116">
                        Apuntate a nuestro News Letter para no perderte ninguno de nuestros descuentos.
                    </Typography> */}
                </Paper>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Announcements