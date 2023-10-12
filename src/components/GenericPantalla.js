import { ArrowBackIos, FilterList } from '@mui/icons-material'
import { Button, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useStatevalue } from '../StateProvider'

const GenericPantalla = ({title = "Todos los productos"}) => {

  const [{selectedCategoria}, dispatch] = useStatevalue();

  return (
    <Grid container direction="row">

      <Grid item direction="row" width="70%" >
        <Grid container sx={{justifyContent: "start"}}>
          <Grid item>
            <IconButton sx={{width: "100%",  height: "100%"}}><ArrowBackIos/></IconButton>
          </Grid>
          <Grid item>
            <Typography variant='h3' fontFamily="DM Serif Display" fontWeight={400}>
            {selectedCategoria ? selectedCategoria: title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item alignItems="center" justifyContent = "flex-end" width="30%" display="flex">
        <Button sx={{fontFamily: "Quicksand", fontWeight: 500}} variant="outlined" disabled>
            Ordenar <FilterList sx={{marginLeft: "5%"}}/>
        </Button>
      </Grid>
    </Grid>
  )
}

export default GenericPantalla