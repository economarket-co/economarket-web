import React, { useEffect, useState } from 'react'
import { useStatevalue } from '../../StateProvider'
import { Button, Dialog, DialogContent, Grid, IconButton, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { ShoppingCartCheckout } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { comprobarImagen } from './GlobalFunctions';
import SearchIcon from '@mui/icons-material/Search';
import { actionTypes } from '../../reducer';



const SearchBar = ({open}) => {

  const [search, setSearch] = useState("");
  const [{products}, dispatch] = useStatevalue();
  const [data, setData] = useState([]);

  useEffect(() =>{

    setData(products.slice(0,4));

    const filteredResult = products.filter((p) =>
      p.Descripcion.toLowerCase().includes(search.toLowerCase())
    );

    setData(filteredResult);

  },[search, products]);

  const handleClose = () =>{

    dispatch({
      type: actionTypes.OPEN_SEARCH,
      open: false
    });

  }

  const handleSearchChange = (e) =>{
    setSearch(e.target.value);
  }

  const selectProduct = (id) =>{

    dispatch({

      type: actionTypes.SELECT_PRODUCTS,
      item: products[id -1]
    });
    handleClose();
  }


  return (
    <Grid container sx={{width: "70%", height: "60%"}}>
      <Dialog open={open} onClose={handleClose}>
      <DialogContent sx={{justifyContent: "center"}}>

      <Grid item width="100%">
      <Paper
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
                      type="text"
                      value={search}
                      onChange={handleSearchChange}
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="¿Que producto estas buscando?"
                      inputProps={{ 'aria-label': '¿Que producto estas buscando?' }}
                    />
                </Paper>
      </Grid>
      <Grid item>
        {
        data.length > 0 ?
        <TableContainer >
            <Table sx={{width: "100%"}}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{
                            fontFamily: "Quicksand",
                            fontWeight: "600",
                            color: "#646464",
                        }}>
                        Producto
                        </TableCell>
                        <TableCell align='right' sx={{
                            fontFamily: "Quicksand",
                            fontWeight: "500",
                            color: "#646464",
                        }}>
                        Ver
                      </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map(p =>(
                                <TableRow key={p.Descripcion}>
                                    <TableCell
                                    component="th" sx={{
                                        fontFamily: "Quicksand",
                                        fontWeight: 500,
                                        color: "#646464",
                                        width: "100%"
                                    }}>
                                    <Grid container direction="row" alignItems="center">
                                    <Grid item sx={{width: "7%", height: "7%",marginRight: "3%"}}>
                                        <img alt='' src={comprobarImagen(p)} width={"100%"} height={"100%"}/>
                                    </Grid>
                                    <Grid item width="10 0%" height="100%">
                                        {p.Descripcion} 
                                    </Grid>
                                    </Grid>
                                    </TableCell>
                                    <TableCell align="right" >
                                    <Grid container direction="row" alignItems="center">
                                        <Grid item>
                                        </Grid>
                                        <Grid item marginLeft="25%">
                                          <Link to="/comparador" onClick={()=>selectProduct(p.id)}> 
                                            <IconButton sx={{width: 15, height: 15}} >
                                            <ShoppingCartCheckout sx={{color: "#01CC5E"}}/>
                                            </IconButton>
                                          </Link>
                                        </Grid>
                                    </Grid>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
              </TableContainer> 

          : 
          <Grid container padding="0px 0px" direction="column" marginTop = "5%" marginBottom="8%" alignItems="center" textAlign="center">
              <Grid item paddingTop="3%">
                  <Typography color="#B6B6B6" fontWeight={600} variant='h3' fontFamily="Quicksand">
                      {":("}
                  </Typography>
              </Grid>
            <Grid item paddingTop="5%">
                <Typography color="#434343" fontWeight={600} variant='h6' fontFamily="Quicksand">
                Ups! Parece que no tenemos este producto
                </Typography>
            </Grid>
            <Grid item paddingTop="1%" width="70%">
                <Typography color="#434343" fontWeight={500} variant='p' fontFamily="Quicksand">
                    Revisa nuestro catalogo por una alternativa: 
                </Typography>
            </Grid>

            <Grid item paddingTop="5%" width="35%" height="15%">
                <Link to="/productos" onClick={handleClose}> 
                    <Button sx={{
                        fontFamily: "Quicksand",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        backgroundColor: "#033E8C",
                        width: "100%",
                        height: "100%"
                    }}>
                        Productos
                    </Button>
                </Link>
            </Grid>
          </Grid>
        }   
        </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  )
}

export default SearchBar