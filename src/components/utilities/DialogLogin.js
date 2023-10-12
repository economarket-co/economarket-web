import { Button, Dialog, DialogContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const DialogLogin = ({open}) => {

  return (
    <Grid container>

        <Dialog open={open} disableClose>
            <DialogContent>
                <Grid container padding="0px 0px" direction="column" marginTop = "5%" marginBottom="8%" alignItems="center" textAlign="center">
                    <Grid item paddingTop="3%">
                        <Typography color="#B6B6B6" fontWeight={600} variant='h3' fontFamily="Quicksand">
                            :(
                        </Typography>
                    </Grid>
                    <Grid item paddingTop="5%">
                        <Typography color="#434343" fontWeight={600} variant='h6' fontFamily="Quicksand">
                        Ups! Parece que no has iniciado sesión
                        </Typography>
                    </Grid>

                    <Grid item paddingTop="1%" width="70%">
                        <Typography color="#434343" fontWeight={500} variant='p' fontFamily="Quicksand">
                            Ingresa a tu perfil para ver y guardar tus productos favoritos
                        </Typography>
                    </Grid>

                    <Grid item paddingTop="5%" width="35%" height="15%">
                        <Link to="/login"> 
                            <Button sx={{
                                fontFamily: "Quicksand",
                                fontWeight: 600,
                                color: "#FFFFFF",
                                backgroundColor: "#033E8C",
                                width: "100%",
                                height: "100%"
                            }}>
                                Iniciar sesión
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    </Grid>
  )
}

export default DialogLogin