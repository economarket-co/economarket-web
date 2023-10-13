import { ArrowBackIos, FilterList } from '@mui/icons-material'
import { Button, Grid, IconButton, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useStatevalue } from '../StateProvider'

const GenericPantalla = ({title = "Todos los productos"}) => {

  const [{selectedCategoria}, dispatch] = useStatevalue();

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Grid container direction="row">

      <Grid item direction="row" width={selectedCategoria ? "70%" : "80%" } >
        <Grid container sx={{justifyContent: "start"}}>
          <Grid item>
            <IconButton width={!isMobile ? "100%": "30%"} height = {!isMobile ? "100%" : "30%"}><ArrowBackIos/></IconButton>
          </Grid>
          <Grid item>
            <Typography variant={!isMobile ? 'h3': 'h6'} fontFamily="DM Serif Display" fontWeight={400}>
            {selectedCategoria ? selectedCategoria: title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {
        !isMobile &&
        <Grid item alignItems="center" justifyContent = "flex-end" width="20%" display="flex">
        <Button sx={{
                      fontFamily: "Quicksand", 
                      fontWeight: 500,
            }} variant="outlined" disabled>
            Ordenar <FilterList sx={{marginLeft: "5%"}}/>
        </Button>
        </Grid>
      }

      
    </Grid>
  )
}

export default GenericPantalla