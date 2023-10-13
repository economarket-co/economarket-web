import { Grid, Paper, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import { useStatevalue } from '../../StateProvider'
import bg from "../../assets/Promociones.jpeg"
import Banners from '../../components/Banners'
import Filters, { VistaMobile } from '../../components/Filters'
import GenericPantalla from '../../components/GenericPantalla'
import Promociones from '../../components/promociones/Promociones'
import SinPromociones from '../../components/promociones/SinPromociones'

const VistaPromociones = () => {

    const [{promociones}, dispatch] = useStatevalue();

    useEffect(() =>{
      window.scrollTo(0, 0);
    }, [])

    const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Grid container>
        <Banners title="Promociones" imagen={bg} />
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
            <GenericPantalla title='Todas las promociones'/>
            {promociones.length > 0 ? <Promociones/> : <SinPromociones />}
          </Grid>
        </Grid>
    </Grid>
  )
}

export default VistaPromociones