import { Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import line from "../assets/Line.png"

const Banners = ({title, imagen, extra}) => {

    let scss = ""

    if(extra){
        scss = "linear-gradient(to top, rgb(6, 219, 104) 0%, rgba(6, 219, 104, 0) 100%)," 
    }

    const isMobile = useMediaQuery("(max-width: 768px)");
    const variantMobile = isMobile ? "h6" : "h3";
    const variantMobileE = isMobile ? "h5" : "h4";
    const variantVista = !isMobile ? "20%" : "35%";
    
  return (
    <Grid container
        height="50%"
        width="100%"
        sx={{
            backgroundImage: `${scss}url("${imagen}")`,
            padding: "1.8% 7.13% 1.8% 7.13%",
            justifyItems: "start",
            alignItems: "center",
            //backgroundPosition: 'center',
            backgroundSize: "cover",
        }}
    >
        <Grid item marginRight={"2%"} width={title.length < 15 || extra ? variantVista : "60%"}>
            <Typography variant={title.length < 15 && !extra? variantMobile: variantMobileE} fontFamily="DM Serif Display" fontWeight={400} color="#FFFFFF" width={extra ? "50%": "80%"}>
                {title}
            </Typography>
        </Grid>
       {
        extra && <Grid  height = {!isMobile ? "70%": "30%"}item sx={{backgroundColor: "#FFFFFF"}}><img height={isMobile && 50} alt='' src={line}/></Grid>
       }
        <Grid item marginLeft="2%" width="40%" >
            <Typography variant={!isMobile ? 'h4' : 'body2' } fontFamily="Quicksand" fontWeight={400} color="#FFFFFF">{extra}</Typography>
        </Grid>
    </Grid>
  )
}

export default Banners