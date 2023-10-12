import { Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import bg from "../../assets/Promociones.jpeg"
import Banners from '../../components/Banners'
import GenericPantalla from '../../components/GenericPantalla'
import Filters from '../../components/Filters'
import { useStatevalue } from '../../StateProvider'
import DialogLogin from '../../components/utilities/DialogLogin'
import Favoritos from '../../components/favoritos/Favoritos'
import SinFavoritos from '../../components/favoritos/SinFavoritos'


const VistaFavoritos = () => {
    const [open, setOpen] = useState(false);
    const [{favoritos,user}, dispatch] = useStatevalue();

    useEffect(() =>{
      window.scrollTo(0, 0);
        if(user){
            setOpen(false);
            console.log("Hay usuario!")
        }else{
            setOpen(true)
            console.log("No hay usuario!")
        }
    }, [open, user])
  return (
    <Grid container>
        <Banners title="Favoritos" imagen={bg} />
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
            <GenericPantalla title='Tus favoritos'/>

            {
               open && <DialogLogin open={open} />
            }
            {
                !open && favoritos.length > 0 ?  <Favoritos /> : <SinFavoritos/>
            }

          </Grid>
        </Grid>
    </Grid>
  )
}

export default VistaFavoritos