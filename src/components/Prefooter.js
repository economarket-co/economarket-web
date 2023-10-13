import { Grid, IconButton, InputBase, Paper, Typography, useMediaQuery } from '@mui/material'
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

    const isMobile = useMediaQuery("(max-width: 768px)");
    const widthSearch = !isMobile ? "49%": "80%"
    const fSize = isMobile && "12px"
  return (
    <Grid container sx={{
        backgroundImage:`url('${back}')`,
        backgroundPosition: 'center',
        backgroundSize: "cover",
        alignItems: "center",
    }}>

        <Grid container sx={{textAlign: "center", marginTop: "5%", justifyContent: "center"}}>

            <Grid item direction="column" sx ={{color: "#FFFEFE", width: "100%", height: "auto" }}>
                <Typography variant={!isMobile ? 'p': 'h6'} fontFamily="Quicksand" fontWeight={600}>
                Encontrar el mejor precio
                </Typography>
            </Grid>
            <Grid item direction="column" sx ={{color: "#FFFEFE", width: "100%", height: "auto" }}>
                <Typography variant={!isMobile ? 'h4': 'h5'} fontFamily="DM Serif Display" fontWeight={400}>
                En solo tres pasos
                </Typography>
            </Grid>
            <Grid item direction="column" sx={{
                marginTop: "6%"
            }}>

                <Grid container spacing={!isMobile ?12 : 0}>

                    <Grid item>
                        <Grid sx={{
                        }}>
                            
                            <IconButton onClick={openSearchBar} sx={{width: "100%", height:"100%"}}>
                                <img alt='' src={lupa}  width={!isMobile ? "58.57%": "20%"} height={!isMobile ? "82%": "20%"}/>
                            </IconButton>
                        </Grid>
                        <Grid marginTop={isMobile ? "1%" : "12.8%"}  sx={{
                        }}>    
                            <Typography fontSize={isMobile && "11.55px"} variant={!isMobile ?'p': "subtitle2" } fontFamily="Quicksand" color="white" fontWeight={600}>
                            Busca <br/> tu producto
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid sx={{
                        }}>
                            <Link to="/carrito">
                                <IconButton sx={{width: "100%", height:"100%"}}>
                                    <img alt='' src={cart}   width={!isMobile ? "58.57%": "20%"} height={!isMobile ? "82%": "20%"}/>
                                </IconButton>
                            </Link>
                            
                        </Grid>
                        <Grid marginTop={isMobile ? "1%" : "15%"} sx={{
                        }}>    
                            <Typography fontSize={isMobile && "11.55px"} variant={!isMobile ?'p': "subtitle1" } fontFamily="Quicksand" color="white" fontWeight={600}>
                            Añádelo <br/>al carrito
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid sx={{
                        }}>
                            <Link to="/comparador">
                                <IconButton sx={{width: "100%", height:"100%"}}>
                                    <img alt='' src={scales}  width={!isMobile ? "58.57%": "20%"} height={!isMobile ? "82%": "20%"}/>
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid marginTop={isMobile ? "1%" : "4.8%"} sx={{
                        }}>    
                            <Typography fontSize={isMobile && "11.55px"} variant={!isMobile ?'p': "subtitle1" } fontFamily="Quicksand" color="white" fontWeight={600}>
                            Compara <br/> los precios
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
                    <Typography variant={!isMobile ? 'h3' : 'h6'} fontFamily="DM Serif Display" color="#033E8C" fontWeight={400}>
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
                         height: "100%",
                         width: widthSearch,
                         margin: "auto",    
                         borderRadius: "300px"
                        }}
                    >
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 , fontSize: fSize ,fontFamily: "Inter", color: "#033E8C"}}
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
            <img alt='' src={fondo} width={!isMobile ? "68.5%": "100%"} height={!isMobile ? "82%": "100%"}/> 
        </Grid>
    </Grid>
    
  )
}

export default Prefooter