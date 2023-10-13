import { Button, Dialog, DialogContent, Grid, InputBase, Paper, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Link, redirect} from 'react-router-dom'
import google from "../../assets/Google.png"
import facebook from "../../assets/Faceboo.png"
import { auth } from '../../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useStatevalue } from '../../StateProvider'
import { actionTypes } from '../../reducer'

const SignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [{user}, dispatch] = useStatevalue();
  const [isError, setError] = useState([false,""]);

  const signin = (e) =>{

    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)  =>{
        dispatch({
          type: actionTypes.SET_USER,
          user: userCredential.user
        })

        setError([false, ""]);
        redirect("/")
      })
      .catch(e =>{
        setError([true, e])
      })

  }

  const cerrar =  () =>{
    setError([false, ""])
  }

  const isMobile = useMediaQuery("(max-width: 768px)");
  const border = !isMobile &&"36px";
  return (

    <Grid container justifyContent="end" sx={{
      minWidth: "100%",
      display: "flex",
    }}>

      <Dialog open={isError[0]} onClose={cerrar}>

        <DialogContent>
        <Grid container padding="0px 0px" direction="column" marginTop = "5%" marginBottom="8%" alignItems="center" textAlign="center">
              <Grid item paddingTop="3%">
                  <Typography color="#B6B6B6" fontWeight={600} variant='h3' fontFamily="Quicksand">
                      :(
                  </Typography>
              </Grid>
              <Grid item paddingTop="5%">
                  <Typography color="#434343" fontWeight={600} variant='h6' fontFamily="Quicksand">
                  Error al iniciar sesion
                  </Typography>
              </Grid>

              <Grid item paddingTop="5%">
                  <Typography color="red" fontWeight={600} variant='h6' fontFamily="Quicksand">
                  {isError[1].toString()}
                  </Typography>
              </Grid>

              <Grid item paddingTop="5%" width="35%" height="15%">
                    <Button onClick={cerrar} sx={{
                        fontFamily: "Quicksand",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        backgroundColor: "#033E8C",
                        width: "100%",
                        height: "100%"
                    }}>
                        Cerrar
                    </Button>
                </Grid>

            </Grid>
        </DialogContent>

      </Dialog>

      <Paper
      width = {!isMobile ? "50%": "100%"}
      sx={{
        borderStartStartRadius: border,
        borderBottomLeftRadius: border,
        padding: "4%",
        backgroundColor: "#FCFEFF",
      }}>

        <Grid container justifyContent="start" direction="column">

          <Grid item textAlign="center">
            <Typography variant='h6' fontFamily="Quicksand" fontWeight={600} color="#000000">
            Inicia sesión
            </Typography>
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
                              required
                              id="email"
                              autoComplete="email"
                              onChange={e=>setEmail(e.target.value)}
                              value={email}
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
                              onChange={e=>setPassword(e.target.value)}
                              value={password}
                              type="password"
                              id="password"
                              autoComplete="current-password"
                              required
                />
              </Paper>
            </Grid>
          </Grid>

          <Grid item sx={{marginTop: "10%", alignContent: "center",justifyContent: "center"}}>

            <Grid variant="outlined" container justifyContent="center">
              <Button type="submit" variant="contained" onClick={signin} sx={{
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
              No tienes una cuenta? <Link style={{textDecoration: 'none',color: "#01CC5E"}} to="/signup">Regístrate</Link>
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

export default SignIn