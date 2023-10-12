import React from 'react'
import "./styles/Footer.css"
import { Box, Container, CssBaseline, Grid, Typography, InputBase, Paper, Button } from '@mui/material'
import { Language, MailOutline, WhatsApp } from '@mui/icons-material'
import logo from "../assets/Group 79.svg"

export const Footer = () => {

  const styles = {

    item: {
      color: "white",
    },
  }
  return (
    <Box 
      component="footer"
      sx={{backgroundColor: "#033E8C", p: 6}}
    >
      <CssBaseline />

      <Container component="main" 
        sx = {{
          mt: 8, 
          mb: 2, 
          textAlign: "start", 
          fontFamily: "Quicksand",
          color: "white"
        }} 
        maxWidth="lg"
      >

        <Grid container spacing={6}>
          <Grid item xs= {12} sm= {4} >
            <Grid container
              sx={{width: "auto", height: "auto"}}
            >

              <Grid item>
                <img alt='' src={logo}/>
              </Grid>

              <Grid item sx={{marginTop: "10%"}}>
                <Typography variant='p' color= "#EAEAEA" textAlign="start" sx={{
                  width: "100%"
                }}>
                Tu mejor opción para economizar sin dejar de comprar lo que necesitas
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={12} sm = {4}>
              <Typography variant="h6" color= "#EAEAEA" gutterBottom fontSize="172px 36px" fontWeight={600}>
                Contáctanos
              </Typography>

              <Grid container direction="row" sx={{width: "auto", height: "auto", marginTop: "10%"}}>
                <Grid item direction="column" sx={{width: "auto", height: "auto", marginRight: "1%"}}>
                  <Grid item style={styles.item} sx={{width: "7%", height:"37%"}}>
                    <WhatsApp />
                  </Grid>
                  <Grid item style={styles.item} sx={{width: "7%", height:"37%"}}>
                    <MailOutline />
                  </Grid>
                  <Grid item style={styles.item} sx={{width: "7%", height:"37%"}}>
                    <Language />
                  </Grid>
                </Grid>

                <Grid item direction="column" sx={{width: "auto", height: "auto",marginLeft: "1.4%", textAlign: "start"}}>

                  <Grid sx ={{ width: "92%"}}item><Typography variant='p' fontWeight={400} sx={{width: "100%"}}>+57 economarket</Typography></Grid>
                  <Grid sx={{marginTop: "4.5%", width: "92%"}} item><Typography variant='p' fontWeight={400} sx={{width: "100%"}}>@economarket</Typography></Grid>
                  <Grid sx={{marginTop: "4.5%", width: "92%"}} item><Typography variant='p' fontWeight={400} sx={{width: "100%"}}>economarket@gmail.com</Typography></Grid>
                </Grid>
              </Grid>
          </Grid>

          <Grid item xs= {12} sm= {4} sx={{width: "100%", height: "auto"}}>
            <Typography variant="h6" color= "#EAEAEA" gutterBottom fontWeight={600} sx={{width: "100%", height: "auto"}}>
              Recibe actualizaciones siguiendo nuestro News Letter
            </Typography>
            <Typography variant='p' fontWeight={400} sx={{width: "100%", height: "auto"}}>
              Dejanos tu información y nosotros nos escargamos del resto
            </Typography>

            <Grid container sx={{
              // width: "71%", 
              height: "auto",
              marginTop: "10.8%"
            }}
            direction = "row"
            >
              <Grid item direction = "column">
              <Paper
                component="form"
                sx={{
                      p: 'auto', 
                      display: 'flex', 
                      alignItems: 'start', 
                      width: "100%", 
                      height: "100%",
                      margin: "auto",
                    }}
                >
                  <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Correo Electrónico"
                      inputProps={{ 'aria-label': 'Correo Electrónico' }}
                  />
                  {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
                </Paper>
              </Grid>

              <Grid item sx={{marginLeft: "4.89%"}} direction = "column">

                <Button 
                  variant="contained" 
                  color="success" 
                  sx={{
                    // width: "18.7%", 
                    height: "100%", 
                    fontFamily: "inter", 
                    fontSize: "0.5rem"
                  }} 
                  size="small"
                >
                  Suscríbete
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
