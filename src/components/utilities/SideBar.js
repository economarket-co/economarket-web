import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

    
const SideBar = () => {
    const [open, setOpen] = useState(false)
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <>
        <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
        </IconButton>   
            <Drawer 
                anchor={!isMobile ? 'left': 'right'}
                open = {open}
                onClose={() => setOpen(false)}
            >
                <Box p={2} width="250px" textAlign="center">
                <List>
                    {[["Inicio", "/"],['Categorias', "/categorias"], ['Comparador de precios', "/comparador"], ['Todos los productos', "/productos"]].map((text) => (
                    <ListItem  sx={{
                        fontFamily: "Quicksand",
                        fontWeight: 500
                        }} key={text[0]} disablePadding>
                        <Link to={text[1]} style={{ textDecoration: 'none' }}>    
                            <ListItemButton onClick={() => setOpen(false)}>
                            <Typography sx={ {color: '#000000',  fontFamily: "Quicksand",
                            fontWeight: 500}}>{text[0]}</Typography> 
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {[['Usuario', "/login"], ['Favoritos', "/favoritos"], ['Carrito de compras', "/carrito"]].map((text) => (
                    <ListItem key={text[0]} disablePadding>
                        <Link to={text[1]} style={{ textDecoration: 'none' }}>
                        <ListItemButton onClick={() => setOpen(false)} >
                        <Typography sx={ {color: '#000000',  fontFamily: "Quicksand",
                        fontWeight: 500}}>{text[0]}</Typography> 
                        </ListItemButton>
                        </Link>
                    </ListItem>
                    ))}
                </List>
                </Box>
            </Drawer>
        </>
    )
}
    
export default SideBar