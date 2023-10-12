import { Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import React from 'react'
import lupa from "../assets/lupa.png"
import back from "../assets/Rectangle2.png"
import fondo from "../assets/back.png"
import cart from "../assets/Shopping Cart.png"
import scales from "../assets/Scales.png"
import SearchIcon from '@mui/icons-material/Search';
import { useStatevalue } from '../StateProvider'
import { actionTypes } from '../reducer'
import { Link } from 'react-router-dom'


const Prefooter = () => {

    const [{openSearch}, dispatch] = useStatevalue();

    const openSearchBar = () =>{

        dispatch({
            type: actionTypes.OPEN_SEARCH,
            open: true
        })
    }
  return (
    <Grid container sx={{
        backgroundImage:`url('${back}')`,
        backgroundPosition: 'center',
        backgroundSize: "cover",
        alignItems: "center",
    }}>

        <Grid container sx={{textAlign: "center", marginTop: "5%", justifyContent: "center"}}>

            <Grid item direction="column" sx ={{color: "#FFFEFE", width: "100%", height: "auto" }}>
                <Typography variant='p' fontFamily="Quicksand" fontWeight={600}>
                Encontrar el mejor precio
                </Typography>
            </Grid>
            <Grid item direction="column" sx ={{color: "#FFFEFE", width: "100%", height: "auto" }}>
                <Typography variant='h4' fontFamily="DM Serif Display" fontWeight={400}>
                En solo tres pasos
                </Typography>
            </Grid>
            <Grid item direction="column" sx={{
                marginTop: "6%"
            }}>

                <Grid container spacing={12}>

                    <Grid item>
                        <Grid sx={{
                        }}>
                            
                            <IconButton onClick={openSearchBar} sx={{width: "100%", height:"100%"}}>
                                <img alt='' src={lupa}  width="58.57%" height="83%"/>
                            </IconButton>
                        </Grid>
                        <Grid sx={{
                            marginTop: "12.8%"
                        }}>    
                            <Typography variant='p' fontFamily="Quicksand" color="white" fontWeight={600}>
                            Busca tu producto
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid sx={{
                        }}>
                            <Link to="/carrito">
                                <IconButton sx={{width: "100%", height:"100%"}}>
                                    <img alt='' src={cart}  width="58.57%" height="83%"/>
                                </IconButton>
                            </Link>
                            
                        </Grid>
                        <Grid sx={{
                            marginTop: "15%"
                        }}>    
                            <Typography variant='p' fontFamily="Quicksand" color="white" fontWeight={600}>
                            Añádelo al carrito
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid sx={{
                        }}>
                            <Link to="/comparador">
                                <IconButton sx={{width: "100%", height:"100%"}}>
                                    <img alt='' src={scales}  width="58.57%" height="82%"/>
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid sx={{
                            marginTop: "4.8%"
                        }}>    
                            <Typography variant='p' fontFamily="Quicksand" color="white" fontWeight={600}>
                            Compara los precios
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container direction="column" sx={{
                marginTop: "8.5%", 
                justifyContent: "center",
                textAlign: "center", 
                height:"auto",
            }}> 
                <Grid>
                    <Typography variant='h3' fontFamily="DM Serif Display" color="#033E8C" fontWeight={400}>
                    Así que cuéntanos,
                    </Typography>
                </Grid>
                <Grid sx={{
                    marginTop:"2.3%",
                }}>
                    <Paper
                    onClick={openSearchBar}
                    component="form"
                    sx={{
                         p: 'auto', 
                         display: 'flex', 
                         alignItems: 'center', 
                         width: "49%", 
                         height: "100%",
                         margin: "auto",
                         borderRadius: "300px"
                        }}
                    >
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 , fontFamily: "Inter", color: "#033E8C"}}
                            placeholder="¿Que producto estas buscando?"
                            inputProps={{ 'aria-label': '¿Que producto estas buscando?' }}
                        />
                        {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
                    </Paper>     
                </Grid>
            </Grid>
        <Grid container direction="column" sx={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 0,
            background: "none",
            marginTop: "2.5%"
        }}>
            <img alt='' src={fondo} width="68.5%" height="82%"/> 
        </Grid>
    </Grid>
    
  )
}

export default Prefooter