import { Grid, Paper, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import bg from "../../assets/BackgroundProducts.jpeg"
import Banners from '../../components/Banners'
import Filters, { VistaMobile } from '../../components/Filters'
import Products from '../../components/Products'

const VistaProducts = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  }, [])

  const isMobile = useMediaQuery("(max-width: 768px)"); 

  const title = "Productos"
  return (
    <>
      <Grid container>
        <Banners title = {title} imagen = {bg}/>
        <Grid container direction={!isMobile ? "row": "column"}>
          
           { !isMobile ? 
           <Grid item 
              direction="column"
              width="25%"
              height={1499}
              sx={{marginRight: "2%"}}
          >
           <Filters /> </Grid> : 
           <Grid item>
            <VistaMobile />
           </Grid>
           }            
          <Grid item  
                direction="column"
                width={!isMobile ?"73%" : "100%"}
                sx={{
                  padding: "2.2% 5.24% 2.2% 5.24%",
                  overflow: "auto",
                  maxHeight: 1499
                }}
          >
            <Products />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default VistaProducts