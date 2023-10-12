import React, { useEffect, useState } from 'react'
import "./styles/Navbar.css"
import { AppBar, Badge, Container , Grid, IconButton, Toolbar} from '@mui/material'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import logo from "../assets/Group 79.svg"
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStatevalue } from '../StateProvider';
import SideBar from './utilities/SideBar';
import { actionTypes } from '../reducer';

export const Navbar = () => {

    const [{basket},dispatch] = useStatevalue();  
    
    const openSearch = () =>{

        dispatch({
            type: actionTypes.OPEN_SEARCH,
            open: true
        })
    }
    


    // console.log(basket);
  return (
    <div className='root'>
        <AppBar position="static"
            sx={{
                backgroundColor: "#033E8C",
                boxShadow: "none",
                width: "100%"
            }}
        >
            <Toolbar className='ToolBar'>
                <SideBar />
                <Link to="/">
                    <IconButton>
                        <img alt='' width={50} height={50} src={logo} />
                    </IconButton>
                </Link>
                    <Container 
                    sx= {{p: "auto", height: "29.9px", width: "811px"}}
                >
                    <Paper
                    onClick={openSearch}
                    component="form"
                    sx={{
                         p: 'auto', 
                         display: 'flex', 
                         alignItems: 'center', 
                         width: "100%", 
                         height: "100%",
                         margin: "auto",
                         borderRadius: "300px"
                        }}
                    >
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="¿Que producto estas buscando?"
                            inputProps={{ 'aria-label': '¿Que producto estas buscando?' }}
                        />
                    </Paper>
                    </Container>
                <Link to="/login">
                    <IconButton sx={{color: "white"}}>
                        <PersonIcon/>
                    </IconButton>
                </Link>

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
            </Toolbar>
        </AppBar>
    </div>
  )
}
