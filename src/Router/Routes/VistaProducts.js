import { Grid, Paper } from '@mui/material'
import React, { useEffect } from 'react'
import bg from "../../assets/BackgroundProducts.jpeg"
import Banners from '../../components/Banners'
import Filters from '../../components/Filters'
import Products from '../../components/Products'

const VistaProducts = () => {

  useEffect(() =>{
    window.scrollTo(0, 0);
  }, [])

  const title = "Productos"
  return (
    <>
      <Grid container>
        <Banners title = {title} imagen = {bg}/>
        <Grid container direction="row">
          <Grid item 
                direction="column"
                width="25%"
                height={1499}
                sx={{marginRight: "2%"}}
          ><Paper sx={{width: "100", height:" 100%"}}>
            <Filters />
          </Paper>
            
          </Grid>
          <Grid item  
                direction="column"
                width="73%"
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