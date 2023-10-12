import { Grid, Typography } from '@mui/material'
// import axios from 'axios';
import React from 'react'
import back from "../assets/Sección de categorías.png"
import Categorias from './categorias/Categorias'

const Categories = () => {

    // const [data, setData] = useState([]);
    // //const [loading, setLoading] = useState(true);
    // const baseUrl = "http://localhost:5500";

    // useEffect(() =>{

    //     axios.get(baseUrl+"/product/categories")
    //         .then(r =>{
    //             setData(r.data?.categories);
    //             //setLoading(false);
    //         })
    //         .catch(e =>{
    //             console.log("Error al obtener los datos: ", e);
    //             //setLoading(false);
    //         });
    // }, []);

    const categories = [
        "Frescos",
        "Bebidas",
        "Secos",
        "Enlatados",
        "Proteina",
        "Lacteos"
    ]


  return (

    <Grid container position="static"
    sx={{
        backgroundImage:`url('${back}')` ,
        // backgroundPosition: 'center',
        // backgroundSize: "cover",
        width: "100%",
        height: "fixed", 
        textAlign: "center",
        justifyItems: "center",
        display: 'flex',
        boxSizing: "inherit",
    }}>

        
        <Grid container sx={{marginTop:"15%" }} direction="column">
            <Grid item sx ={{color: "#033E8C", width: "100%", height: "auto"}}>
                <Typography fontFamily="DM Serif Display" variant='h2' fontWeight={400}>
                Revisa nuestras categorías 
                </Typography>
            </Grid>

            <Grid item sx ={{color: "#171717", width: "100%", height: "auto"}}>
                <Typography fontFamily="Quicksand" variant='p' fontWeight={400}>
                Los productos más buscados, organizados para ti 
                </Typography>
            </Grid>
        </Grid>

        <Grid container sx={{
            marginTop:"2%",
            justifyContent: "center", 
            alignItems: "center",
            paddingBottom: "15%"
            }} 
        spacing={3} padding="6%">
            {
                categories.map(m =>(
                    <Grid item lg={3} md={6} sm={8} xs ={12}>
                        <Categorias key={m} categoria={m} />
                    </Grid>
                ))
            }
        </Grid> 
    </Grid>
  )
}

export default Categories