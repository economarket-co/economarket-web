import { Box, Checkbox, Drawer, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Paper, RadioGroup, Typography, useMediaQuery } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../enviroment';
import PriceSlider from './utilities/PriceSlider';
import { actionTypes } from '../reducer';
import { useStatevalue } from '../StateProvider';
import { FilterList } from '@mui/icons-material';

const Filters = () => {

    const line = {
        backgroundColor:"#B4B4B4",
        marginTop: "5%", 
        marginBottom: "5%", 
        width: "100%", 
        height: "2px"
    }

    const max = 500
    const min = 5000
    const [loading, setLoading] = useState(false);
    const [{categories, selectedCategoria,selectedFiltroTiendas, tiendas}, dispatch] = useStatevalue();

    const handleCategoriaChange = (event) => {
        if(event.target.value === selectedCategoria){
            dispatch({
                type: actionTypes.SELECT_CATEGORIA,
                item: null,
              });
        }else{
            dispatch({
              type: actionTypes.SELECT_CATEGORIA,
              item: event.target.value,
            });
        }

      };
    
    const handleTiendaAdd = (e) =>{

        if(e.target.value === selectedFiltroTiendas){

            dispatch({
                type: actionTypes.ADD_SELECTED_TIENDAS,
                tiendas: null
            })
        }else{

            dispatch({
                type: actionTypes.ADD_SELECTED_TIENDAS,
                tiendas: e.target.value
            })
        }

    }
    useEffect(() =>{

        axios.get(baseUrl+"/product/categories")
            .then(r =>{
                setLoading(true);
                dispatch({
                    type: actionTypes.LOAD_CATEGORIES,
                    item: r.data?.categories
                })

                setLoading(false);
            })
            .catch(e =>{
                console.log("Error al obtener los datos: ", e);
                setLoading(false);
            });

    }, [loading]);


    const isMobile = useMediaQuery("(max-width: 768px)");
    const fontMobile = isMobile && "2px";
  return (
    <>
    <Paper width = {isMobile ? "100" : "25%"} sx={{height:" 100%"}}>
        <Grid elevation = {1} container sx={{
            padding: "3.8% 16% 3.8% 16%",
            alignItems: "start",
            height: "60%"
        }}>
            
            <Grid item marginTop="12%"> 
                <Typography variant={!isMobile ? 'h6' : 'body2' } fontFamily="Quicksand" fontWeight={600}>
                Filtros
                </Typography>
            </Grid>
            <Grid item sx={line}
            >
            </Grid>
            <Grid item >

                <FormControl>
                    <FormLabel sx={{
                        color: "#000000"
                    }} id="category"><Typography  variant={!isMobile ? 'h6' : 'body2' } fontWeight={600} fontFamily="Quicksand">Categoría</Typography></FormLabel>
                        <Grid alignItems="end" marginTop="5%">
                        {
                                categories.map((category) =>(
                                    <Grid item>
                                        <FormControlLabel sx={{
                                            fontFamily: "Quicksand",
                                            fontWeight: "500",
                                            color: "#2B2B2B",
                                            marginTop: "-5%",
                                            width: "100%",
                                        }}
                                        key={category} 
                                        control={
                                            <Checkbox 
                                                checked={selectedCategoria === category}
                                                onChange={handleCategoriaChange}
                                                value={category}
                                                size='small'
                                            />
                                        } 
                                        label={category} 
                                        />
                                    </Grid>
                                ))
                        }
                        </Grid>
                </FormControl>
            </Grid>
            <Grid item sx={line}
            >
            </Grid>
            <Grid item>
                <Typography color="#000000" fontWeight={600} fontFamily="Quicksand">
                Rango de precios
                </Typography>
                <Box width="100%">
                    <PriceSlider max={max} min={min}/>
                </Box>
                <Typography color="#000000" fontWeight={600} fontFamily="Quicksand">{max} - {min}</Typography>
            </Grid>
            <Grid item sx={line}
            >
            </Grid>

            <Grid item>
                <FormControl>
                    <FormLabel sx={{
                        color: "#000000"
                    }} id="super"><Typography fontWeight={600} fontFamily="Quicksand">Supermercado</Typography></FormLabel>
                    <RadioGroup
                        aria-labelledby="Supermercado"
                        name="supermercado"
                    >
                        <Grid alignItems="end" marginTop="5%">
                        {

                                tiendas.map((tienda) =>(
                                    <Grid item>
                                        <FormControlLabel sx={{
                                            fontFamily: "Quicksand",
                                            fontWeight: "500",
                                            color: "#2B2B2B",
                                            marginTop: "-5%",
                                            width: "100%",
                                            fontSize: fontMobile
                                        }}
                                        value={tienda} control={
                                            <Checkbox 
                                            checked={selectedFiltroTiendas === tienda}
                                            onChange={handleTiendaAdd}
                                            value={tienda}
                                            />
                                        } label={tienda} />
                                    </Grid>
                                ))
                        }
                        </Grid>
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
        </Paper>
    </>
  )
}

export const VistaMobile = () =>{
    const [open, setOpen] = useState(false)
    return(
        <>
            <IconButton onClick={() => setOpen(true)}>
            Filtros <FilterList />
            </IconButton>
            <Drawer
                anchor='left'
                open = {open}
                onClose={() => setOpen(false)}
            >
                <Box p={3} width="200px" textAlign="start"> 
                <Filters />
                </Box>
            </Drawer>

        </>
    )
}
export default Filters