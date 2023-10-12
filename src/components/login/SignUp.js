import React from 'react'
import { Button, Grid, InputBase, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import google from "../../assets/Google.png"
import facebook from "../../assets/Faceboo.png"



const SignUp = () => {
  return (
    <Grid container justifyContent="end" sx={{
      minWidth: "100%",
      display: "flex",
    }}>

      <Paper sx={{
        borderStartStartRadius: "36px",
        borderBottomLeftRadius: "36px",
        padding: "4%",
        backgroundColor: "#FCFEFF",
        width: "50%",
      }}>

        <Grid container justifyContent="start" direction="column">

          <Grid item textAlign="center">
            <Typography variant='h6' fontFamily="Quicksand" fontWeight={600} color="#000000">
            Crea una cuenta para ti
            </Typography>
          </Grid>

          <Grid sx={{marginTop: "9%", height: "65px"}} item >
          <Grid container direction="column" alignContent="start">
              <Typography marginBottom="1%" variant='subtitle2' fontFamily="Poppins" color="#7C838A">
              Nombre
              </Typography>
              <Paper
                component="form"
                sx={{
                      p: 'auto', 
                      display: 'flex', 
                      alignItems: 'start', 
                      width: "90%", 
                      height: "50px",
                      margin: "auto",
                      borderRadius: "10px",
                      backgroundColor: "#B0BAC366"
                    }}
              >
                <InputBase sx={{ ml: 3, height: "100%", flex: 1 , fontFamily: "Poppins", color: "#7C838A"}}
                              placeholder="Ingresa tu nombre aquí"
                              inputProps={{ 'aria-label': 'Ingresa tu nombre aquí' }}
                />
              </Paper>
            </Grid>
          </Grid>

          <Grid sx={{marginTop: "9%", height: "65px"}} item >
          <Grid container direction="column" alignContent="start">
              <Typography marginBottom="1%" variant='subtitle2' fontFamily="Poppins" color="#7C838A">
              Correo
              </Typography>
              <Paper
                component="form"
                sx={{
                      p: 'auto', 
                      display: 'flex', 
                      alignItems: 'start', 
                      width: "90%", 
                      height: "50px",
                      margin: "auto",
                      borderRadius: "10px",
                      backgroundColor: "#B0BAC366"
                    }}
              >
                <InputBase sx={{ ml: 3, height: "100%", flex: 1 , fontFamily: "Poppins", color: "#7C838A"}}
                              placeholder="Ingresa tu correo aquí"
                              inputProps={{ 'aria-label': 'Ingresa tu correo aquí' }}
                />
              </Paper>
            </Grid>
          </Grid>

          <Grid sx={{marginTop: "10%"}} item>
            <Grid container direction="column" alignContent="start">
              <Typography marginBottom="1%" variant='body2' fontFamily="Poppins" color="#7C838A">
              Contraseña
              </Typography>
              <Paper
                component="form"
                sx={{
                      p: 'auto', 
                      display: 'flex', 
                      alignItems: 'start', 
                      width: "90%", 
                      height: "50px",
                      margin: "auto",
                      borderRadius: "10px",
                      backgroundColor: "#B0BAC366"
                    }}
              >
                <InputBase sx={{ ml: 3, height: "100%" ,flex: 1 , fontFamily: "Poppins", color: "#7C838A"}}
                              placeholder="Ingresa tu contraseña aquí"
                              inputProps={{ 'aria-label': 'Ingresa tu contraseña aquí' }}
                />
              </Paper>
            </Grid>
          </Grid>

          <Grid item sx={{marginTop: "10%", alignContent: "center",justifyContent: "center"}}>

            <Grid variant="outlined" container justifyContent="center">
              <Button sx={{
                fontFamily: "Poppins",
                color:"#FFFFFF",
                fontWeight: 500,
                backgroundColor: "#01CC5E",
                width: "50%",
                borderRadius: "10px",

              }}>
                Inicia sesión
              </Button>
            </Grid>
          </Grid>

          <Grid item sx={{marginTop: "9%"}} textAlign="start">

            <Typography color="#7C838A" variant='body2' fontFamily="Poppins" fontWeight={400} >
              Ya tienes una cuenta? <Link style={{textDecoration: 'none',color: "#01CC5E"}} to="/login">Inicia sesión</Link>
            </Typography>
          </Grid>

          <Grid item sx={{marginTop: "5%"}} textAlign="center">

            <Typography color="#B0BAC3" variant='h6' fontFamily="Poppins" fontWeight={500} >
            - O -
            </Typography>
          </Grid>

          <Grid item sx={{marginTop: "5%"}}>

            <Grid container direction="row" alignContent="center" justifyContent="center">

              <Grid item>
                <Button variant="outlined"  sx= {{

                  borderRadius: "15px",
                  fontSize: "60%",
                  backgroundColor: "#FCFEFF",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  color: "#7C838A",
                  textAlign: "center",
                }}>
                  <img alt='' width="15%" height="100%" style={{marginLeft: "-20%"}}src={google} />
                  Inicia sesión con google
                </Button>
              </Grid>

              <Grid item marginLeft="4%">
                <Button variant="outlined"  sx= {{

                  fontSize: "60%",
                  borderRadius: "15px",
                  backgroundColor: "#FCFEFF",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  color: "#7C838A",
                  width: "90%",
                  textAlign: "center"
                }}>
                  <img alt='' width="15%" height="50%" style={{marginLeft: "-4%", marginRight:"2%"}} src={facebook} />
                  Inicia sesión con Facebook
                </Button>
              </Grid>


            </Grid>
          </Grid>
        </Grid>

      </Paper>
    </Grid>
  )
}

export default SignUp