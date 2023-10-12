import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Banners from '../../components/Banners'
import bg from "../../assets/BackgroundCategorias.jpeg"
import Categorias from '../../components/categorias/Categorias'
import { useStatevalue } from '../../StateProvider'
import {DataService} from "../../components/utilities/DataService"
import { actionTypes } from '../../reducer'
import bg2 from "../../assets/categoriasBackground2.jpeg"
import { Link } from 'react-router-dom'

const VistaCategorias = () => {
  const [{categories}, dispatch] = useStatevalue();

  useEffect(() =>{

    DataService("/product/categories", "GET")
      .then(r =>{

        dispatch({
          type: actionTypes.LOAD_CATEGORIES,
          item: r?.data.categories
        })
      })
      .catch(e =>{
        console.log("Error al obtener los datos!", e);
      });

  }, [dispatch])


  return (
    <Grid container>
        <Banners title="Siempre frescos" imagen={bg} extra="50% en verduras seleccionadas"/>
        <Grid container textAlign="start" padding="5%" direction="column">

          <Grid item>
            <Typography variant='h3'fontFamily="DM Serif Display" fontWeight={400}>
            Categorías
            </Typography>
          </Grid>

          <Grid item marginTop="1%"> 
            <Typography color="#171717" variant='p'fontFamily="Quicksand" fontWeight={500}>
            Los productos más buscados, organizados para ti 
            </Typography>
          </Grid>

          <Grid item>
            <Grid marginLeft="2%" container spacing={1} justifyContent="center"> 
              {
                categories.map(c =>(
                  <Grid item marginTop="5%" lg={3} md={5} sm={9} xs = {12}>
                    <Categorias key={c} categoria={c} />
                  </Grid>
                ))
              }
            </Grid> 
          </Grid>
        </Grid>

        <Grid container paddingTop="5%" paddingBottom="5%" sx={{
          backgroundImage:`url("${bg2}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "5%"
        }}>
            <Grid item width="50%">
              <Typography variant='h6' color="#FFFFFF" fontFamily="Quicksand" fontWeight={600}>
              Estás buscando algo más?<br/> Mira todos los productos que manejamos!
              </Typography>
            </Grid>

            <Grid item width="50%" >
              <Grid container height="100%" width="100%" alignContent="center" justifyContent="end">
                <Link to="/productos">
                  <Button outlined sx={{
                    fontFamily: "Quicksand",
                    color: "#033E8C",
                    backgroundColor: "white",
                    height: "auto"
                  }}>
                    ver todos los productos
                  </Button>
                </Link>
              </Grid>
            </Grid>

        </Grid>
    </Grid>
  )
}

export default VistaCategorias