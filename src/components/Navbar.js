import React, { useEffect, useState } from 'react'
import "./styles/Navbar.css"
import { AppBar, Badge, Container , Grid, IconButton, Toolbar, useMediaQuery} from '@mui/material'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import logo from "../assets/Group 79.svg"
import { Favorite, Logout, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStatevalue } from '../StateProvider';
import SideBar from './utilities/SideBar';
import { actionTypes } from '../reducer';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';



export const Navbar = () => {

    const [{basket, user},dispatch] = useStatevalue();  
    
    const openSearch = () =>{

        dispatch({
            type: actionTypes.OPEN_SEARCH,
            open: true
        })
    }
    
    const handleExit = () =>{

        if(user){
            signOut(auth)
                .then(a =>{
                    dispatch({
                        type: actionTypes.SET_USER,
                        user: null
                    })
                })
                .catch(e =>{
                    alert("No se puede ejecutar esta accion!")
                })
        }

    }

    const Extra = () =>{

        return(<>
            {
            !user ?
            <Link to="/login">
                <IconButton sx={{color: "white"}}>
                    <PersonIcon/>
                </IconButton>
            </Link> 
            :
            <IconButton onClick={handleExit} sx={{color: "white"}}>
                <Logout/>
            </IconButton>
        }   

        <Link to="/favoritos">
            <IconButton sx={{color: "white"}}>
                <Favorite/>
            </IconButton>
        </Link>
        <Link to="/carrito">        
            <IconButton sx={{color: "white"}}>
                <Badge  badgeContent = {basket?.length} color = "secondary">
                    <ShoppingCart/> 
                </Badge>
            </IconButton>
        </Link>
        </>
    )}
    const isMobile = useMediaQuery("(max-width: 768px)");
    // console.log(basket);
  return (
    <Grid container width="100%">

        <AppBar 
            position = {!isMobile ? "static": ""}
            sx={{
                backgroundColor: "#033E8C",
                boxShadow: "none",
                width: "100%",
            }}
        >
            <Toolbar className='ToolBar'>
                {
                    !isMobile && <SideBar />
                }
                
                <Link to="/">
                    <IconButton>    
                        <img alt='' width={!isMobile ? 80: 40} height={!isMobile ? 80: 40} src={logo} />
                    </IconButton>
                </Link>
                    <Paper
                    width = {!isMobile ? "50%" : "20%"}
                    height = {!isMobile ? "50%" : "20%"}
                    onClick={openSearch}
                    component="form"
                    sx={{
                            p: 'auto', 
                            display: 'flex', 
                            alignItems: 'center', 
                            width: "50%", 
                            height: "50%",
                            margin: "auto",
                            borderRadius: "30px"
                        }}
                    >
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder={!isMobile ? "¿Que producto estas buscando?" : ""}
                            inputProps={{ 'aria-label': '¿Que producto estas buscando?' }}
                        />
                    </Paper>

                {
                    !isMobile &&
                    <Extra />
                }{
                    isMobile &&
                    <SideBar />
                }
                
            </Toolbar>
        </AppBar>
    </Grid>
  )
}
