import { Grid, Typography, Paper, Card, CardMedia, useMediaQuery } from '@mui/material'
import React from 'react'
import imagen5 from "../assets/ejemplo5.png"
import { Link } from 'react-router-dom'
import imagen from "../assets/Anuncio2.png"
import imagen2 from "../assets/Anuncio3.png"


const Announcements = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const marginTopCard = isMobile ? "3%": "5%";
    const marginTopCard2 = !isMobile ? "30%": "20%";
  return (
    <Grid container
    alignItems="center"
    sx={{
        backgroundColor: "white",
        justifyContent: "center",
        }}>

        <Grid container spacing={0.5}
            sx = {{
                justifyContent: "center",
                paddingLeft: "7.6%",
                paddingRight: "7.6%",
                paddingTop: "7.6%",
                paddingBottom: "10%",
                cursor: "pointer"
            }}
        >
            <Grid item lg={6} xs ={12} direction="column">
                <Paper elevation={3} 
                minHeight = {!isMobile ? "329px" : "126px"}
                sx={{
                    background: `linear-gradient(100deg, rgb(217, 4, 62), transparent),url(${imagen})`, 
                    // width: "100%", 
                    width: "100%", 
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                    height: "100%",
                }}
                >
                   
                {/* <Card elevation={0} sx={{alignContent: "unset "}}>
                    <CardMedia 
                        component="img"
                        alt="Imagen superpuesta"
                        image={imagen6}
                        width="100"
                        height="100"
                    >
                    </CardMedia>
                </Card> */}
                {/* <img
                    style={{
                        transform: 'translateY(-12.5%)',
                        position: "absolute",
                        zIndex: 1,
                    }}
                    component="img"
                    alt="Imagen superpuesta"
                    src={imagen6}
                    width="25%"
                    height="100%"
                /> */}
                <Grid container justifyContent="end">
                    </Grid>
                    <Grid item direction="row" justifyContent="center" alignContent="center" width="100%" height="auto" sx={{paddingTop: marginTopCard, paddingLeft: "5%"}}>
                        <Typography color="#FFFFFF" variant={!isMobile ? 'h3': 'h5'} fontFamily="DM Serif Display" sx={{
                        }}>
                        ¡Nuestras mejores promociones!
                        </Typography>
                        <Typography paddingBottom={!isMobile && "20%"} paddingTop={marginTopCard} color="#FFFFFF" width="70%"variant={!isMobile ? 'h5': 'subtitle2'} fontFamily="Quicksand">
                        Apuntate a nuestro News Letter para no perderte ninguno de nuestros descuentos.
                        </Typography>

                    </Grid>
                    
                </Paper>

            </Grid>
            <Grid item lg={3} xs={6}>
                <Paper 
                sx={{
                    minWidth: "100%", 
                    backgroundImage: `linear-gradient(to top, #F2B705 0%, rgba(6, 219, 104, 0) 100%),url("https://s3-alpha-sig.figma.com/img/4397/cf6c/fdd4fa96123be1b06a8267d28bc85eef?Expires=1698019200&Signature=bB3yFBHbKzxRGMsicfP4QDLKYpyfse~GG0-aLkVr0mtaOXdIt39jUp0Pe3SOD8IGc2zDysiqWYHFX0jr~fjVVCsQF4HtcZLxpgBlNZMlPfpV0g-5LI3HusQt3A~LS8I-SjUEOwYsY9zHil-haJeTlOYR0hvEltuvEMepaEuL~IFjAwVlsz3l30tglPpeHPYqNb5G~wfPmLOOwbvPek2GxXbsnSjq54mA0jdsM7uPCCnCx6XROHmSClDDKG9RWDICBn4uAA-VBuMHlokDnY3sd5x-zZKqiXTef2qllvQAReExLS2yMiXag59SBZMjF-i-dvDwn9KrKeaoi-eNxDoraQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")` ,
                    minHeight: "100%",
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                    height: "100%"
                }}>
                    {/* <img alt='' minWidth="100%" minHeight="100%" src={imagen1}/> */}
                    <Grid item direction="row" justifyContent="center" alignContent="center" width="100%" height="auto" sx={{paddingTop: marginTopCard2, paddingLeft: "10%"}}>
                        <Typography color="#FFFFFF" variant={!isMobile ? 'h3': 'h5'} fontFamily="DM Serif Display" sx={{
                        }}>
                        50%<br/>
                        OFF
                        </Typography>
                        <Typography paddingTop="3%" color="#FFFFFF" width="100%"variant={!isMobile ? 'h5': 'subtitle1'} fontFamily="Quicksand">
                        en citricos seleccionados<br/>
                        <Link style={{ color: "white"}}>
                        ver mas
                        </Link>
                        </Typography>

                    </Grid>
                </Paper>
            </Grid>
            <Grid item lg={3} xs={6}>
                <Paper 
                    sx={{
                    backgroundImage: `linear-gradient(to top, #D9043E70 0%, rgba(6, 219, 104, 0) 100%),url("https://s3-alpha-sig.figma.com/img/dc5e/614b/59227910eb2d457f5db4c2890ebc28ad?Expires=1698019200&Signature=eo9IapzXE3OE0ZUy5Y3HyCTARXbmGIAa~kQZMBVwetqLmgo~z8xpSY-FK6mSyP2S4TjhNlSi8Ew28NncSXQAt53yLAIkZZ7FQ-8nvB5kS~z7Y022ItM~hA-fSY5Ch72x3q08svIFVSlkuKZbm8rRseSb2kJa8VpuqrNR42zO3qN--gCpqfCF5aijZWlT-pSbAwzPMA~RnZLtHEZsoGs8QADlDJig7KTaVI29pDqlIQSwAzjHNZGeSNSKgs0hZLQjD9Y-qhrdcmMEUJCXzlwixYaN-WHmQjgGMh~u5HFxZy8jjMwAnoS9WwJRnJXAPXU8zPVqYL6zR-iz~FejscxqMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")` ,
                    minWidth: "100%", 
                    minHeight: "100%",
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                    height: "100%"
                }}>
                     <Grid item direction="row" justifyContent="center" alignContent="center" width="100%" height="auto" sx={{paddingTop:marginTopCard2, paddingLeft: "10%"}}>
                        <Typography color="#FFFFFF" variant={!isMobile ? 'h3': 'h5'} fontFamily="DM Serif Display" sx={{
                        }}>
                        Súper<br/>
                        Promo
                        </Typography>
                        <Typography paddingTop="3%" color="#FFFFFF" width="100%" variant={!isMobile ? 'h5': 'subtitle1'} fontFamily="Quicksand">
                        Hatsu y otras bebidas<br/>
                        <Link style={{color:'white'}}>
                        ver mas
                        </Link>
                        </Typography>

                    </Grid>
                </Paper> 
            </Grid>
            <Grid item lg={3} xs ={6}>
                <Paper 
                sx={{
                    backgroundImage: `linear-gradient(to top, rgb(6, 219, 104) 0%, rgba(6, 219, 104, 0) 100%), url("https://s3-alpha-sig.figma.com/img/8aed/afac/e1384392e8383179da1f815f8db2b3b7?Expires=1698019200&Signature=o92CpbInS3~tqEMZFXyYyZLxfb2hdEMNtbGcE74ZJvUwanaNODMMW00y6GWQNbOwTDqE0lWFJP9g0Pi6oqXb6rigzavPhEkfmQVUlkpt6xWzvx0qcssUivbmvT9ydGffNXvRdiyCED-SfIEJubxTN369nB043eyegtXxHksfTwN3ejp0Vc9bZL6QDAx-77v8kptmRwxrEDLnFff8eqSybFDthFI8Y0RkhouRJO0dPV~23WkFjw-D14NqnqqGlJgAZ5ccdOOXQE~iDUqfIz3mgi~giaDy35ys1MJrxu2SkD2LTmLrGqi-LHd8R24E6MdKrm~uFA28wTRKBU1NXlVDkw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")` ,
                    minWidth: "100%", 
                    minHeight: "100%",
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                    height: "100%"
                }}>
                     <Grid item direction="row" justifyContent="center" alignContent="center" width="100%" height="auto" sx={{paddingTop: "20%", paddingLeft: "10%"}}>
                        <Typography color="#FFFFFF" variant={!isMobile ? 'h3': 'h5'} fontFamily="DM Serif Display" sx={{
                        }}>
                        Siempre<br/>
                        frescos
                        </Typography>
                        <Typography paddingTop="3%" color="#FFFFFF" width="100%" variant={!isMobile ? 'h5': 'subtitle1'} fontFamily="Quicksand">
                        50% en verduras seleccionadas<br/>
                        <Link style={{color:'white'}}>
                        ver mas
                        </Link>
                        </Typography>

                    </Grid>
                </Paper>
            </Grid>
            <Grid item lg={3} xs ={6}>
                <Paper 
                    sx={{
                    backgroundImage: `linear-gradient(to top, #D9043E 0%, rgba(6, 219, 104, 0) 100%), url("https://s3-alpha-sig.figma.com/img/81ed/e234/1e16e6466217587245e735fd74efaf04?Expires=1698019200&Signature=V03rqMtbJV7VZDhE7EQ5gdFeg3Dm16iBd6dYKr7~Kcp4HucqsjHrrjsvbev5gzcwbXWp-bbGi20h0pm4jOsxAkEYfVPGfHsUvCSjouOV3RisXX39jBSGQ0275r5PuSmNfwHPTYxyMTMyg8OA4YUB3qXNyzDxa6BMZ~Z1NHZsQD623oCxATS8suy6qPjXhONOrh2gKGcjf5~2oTsU2KrTSATS9nAC2bozFqB0j-SgLKP8IQ0o-g~QWvWNtEI3pXC4woIk5ejEj~nP174RB88upRyI-dEW8Y2tdyHJhsfZTZmzgTrzO6K03iThSGGKPGnPEzHtyGGIG9zaq4X9~Q5ORw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")`,
                    minWidth: "100%", 
                    minHeight: "100%",
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                    height: "100%"
                }}
                >
                    <Grid item direction="row" justifyContent="center" alignContent="center" width="100%" height="auto" sx={{paddingTop: "20%", paddingLeft: "10%"}}>
                        <Typography color="#FFFFFF" variant={!isMobile ? 'h3': 'h5'} fontFamily="DM Serif Display" sx={{
                        }}>
                        Tiempo de<br/>
                        mecato!!
                        </Typography>
                        <Typography paddingTop="3%" color="#FFFFFF" width="100%" variant={!isMobile ? 'h5': 'subtitle1'}fontFamily="Quicksand">
                        Descuentos en colombina<br/>
                        <Link style={{color: 'white'}}>
                        ver mas
                        </Link>
                        </Typography>

                    </Grid>
                </Paper> 
            </Grid>
            <Grid item lg={6} xs={12}>
                <Paper 
                sx={{
                    backgroundImage: `url(${imagen5})`,
                    // width: "100%", 
                    width: "100%", 
                    minHeight: "100%",
                    backgroundPosition: 'center',
                    backgroundSize: "cover",
                    height: "100%"  
                }}>
                    <img alt='' width="100%" height="100%" src={isMobile ? imagen2 : imagen5} />
                </Paper>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Announcements