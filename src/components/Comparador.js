import { Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ProductIndividual from './comparador/ProductIndividual';
import { useStatevalue } from '../StateProvider';
import { actionTypes } from '../reducer';


const Comparador = () => {
    const [{openSearch}, dispatch] = useStatevalue();

    const openSearchBar = () =>{

        dispatch({
            type: actionTypes.OPEN_SEARCH,
            open: true
        })
    }


  return (
    <Grid container direction="column" sx={{
        paddingTop: "5%", 
        paddingBottom: "5%",
        paddingLeft: "20%",
        paddingRight: "20%"
    }} alignContent="center" textAlign="center" justifyContent="center">

        <Grid item >
            <Typography variant='h6' color="#434343" fontFamily="Quicksand" fontWeight={600}>
            Escoge un producto y  compáralo en nuestros supermercado
            </Typography>
        </Grid>

        <Grid item >

            <Typography variant='body2' color="#646464" fontFamily="Quicksand" fontWeight={500}>
            Suma productos y descubre la manera más conveniente<br/> de comprarlos
            </Typography>
        </Grid>

        <Grid item marginTop="10%" width="100%" padding="0" sx={{
            paddingLeft: 0, paddingRight: 0,
        }}>

            {/* <SearchBar /> */}
                <Paper
                onClick={openSearchBar}
                component="form"
                sx={{
                        p: 'auto', 
                        display: 'flex', 
                        alignItems: 'center', 
                        width: "100%", 
                        height: "100%",
                        margin: "auto",
                        borderRadius: "5px"
                    }}
                >
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="¿Que producto estas buscando?"
                        inputProps={{ 'aria-label': '¿Que producto estas buscando?' }}
                    />
                </Paper>
        </Grid>

        <Grid item marginTop="5%">

            <Grid container>
                <ProductIndividual />
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Comparador