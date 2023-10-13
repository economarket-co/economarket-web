import { Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import aliados from "../assets/Sección de aliados.png"
import aliadosM from "../assets/Sección de aliados Mobile.png"
import econo from "../assets/Group 79.svg"
import exito from "../assets/GrupoExito.png"
import jumbo from "../assets/JumboIco.png"
import carulla from "../assets/CarullaIco.png"
import olimpica from "../assets/OlimpicaIco.svg"


export const Aliances = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imagenMovile = isMobile && {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  return (
    <>
    <Grid padding={isMobile && "10%"} container direction = "column" sx={{
        width: "100%",
        height: "auto",
        background: `url('${!isMobile ? "" : aliadosM }')`,
        ...imagenMovile
        // justifyContent: "center",
        // alignItems: "center",
        // textAlign: "center",
        // padding: "5%",
        // minHeight: "679px"
    }}>


      {
        !isMobile && 
        <img alt='' src={!isMobile ? aliados : aliadosM} width={"100%"} height={"100%"}/>

      }

      {
        isMobile &&
        <> 
          <Grid item marginTop="22%">
            <img alt='' width="122.19px" height="59.54px" src={econo} />
          </Grid>
          <Grid item marginTop="10%">
            <Typography variant='p' color="white" fontSize='15.88px' fontFamily="Quicksand" fontWeight={600}>
            Economarket es tu socio para una experiencia de compra ganadora. Colaboramos con reconocidos supermercados de cadena como Éxito, Carulla, Jumbo y Olímpica para ofrecerte una herramienta que te permite encontrar los mejores precios. Nos dedicamos a simplificar tu vida diaria, ahorrándote tiempo y dinero con transparencia y seguridad.
            </Typography>
          </Grid>

          <Grid item marginTop="10%">
            <Grid container marginTop={"10%"} marginBottom={"10%"}>
              <Grid item sm={6} xs={6}>
                <img width={76.82} height={48.49}  alt='' src={exito} />
              </Grid>
              <Grid item sm={6} xs={6} paddingTop="4%" >
                <img alt='' width={73.81} height={27.47}  src={jumbo} />
              </Grid>
              <Grid item sm={6} xs={6}>
                <img width={74.24} height={42.92}  alt='' src={carulla} />
              </Grid>
              <Grid item sm={6} xs={6} paddingTop="4%" >
                <img  width={74.37} height={29.61} alt='' src={olimpica} />
              </Grid>
            </Grid>
          </Grid>
        </>
      }
      
    </Grid>
    </>
  )
}
