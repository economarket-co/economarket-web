'use client';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { quicksand } from '@/fonts';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function Sidebar(props: { isMobile: boolean, session: any }) {
    const [open, setOpen] = useState(false)

    async function handleSignout() {
        try {
            const res = await axios.post('/api/auth/signout');

            window.location.href = "/v1/auth/signin";
        } catch (error) {
            console.error(error);
            toast.error("Error al cerrar sesión");
        }
    }
    
    const sections = [
        {
            links: [
                { name: 'Inicio', href: '/' },
                { name: 'Categorias', href: '/v1/categories' },
                { name: 'Comparador de precios', href: '/v1/comparator' },
                { name: 'Todos los productos', href: '/v1/products' },
            ]
        },
        {
            links: [
                (props.session ? 
                    { name: 'Cerrar sesión', href: '/v1/auth/signin' } : 
                    { name: 'Iniciar sesión', href: '/v1/auth/signin', onClick: handleSignout}
                ),
                { name: 'Favoritos', href: '/v1/favorites' },
                { name: 'Carrito de compras', href: '/v1/cart' },
            ]
        }
    ]
    return (
        <>
            <MenuIcon 
                onClick={() => setOpen(true)} 
                className='text-white  md:w-[50px] md:h-[40px] order-3 lg:order-first' 
            />
            <Drawer
                anchor={props.isMobile ? 'right' : 'left'}
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box p={2} width="250px" textAlign="center">
                    {
                        sections.map((section, index) => (
                            <div key={index}>
                                <List key={index}>
                                    {
                                        section.links.map((link, index) => (
                                            <ListItemLink key={index} label={link.name} href={link.href} onClick={link.onClick} />
                                        ))
                                    }
                                </List>
                                {
                                    index < sections.length - 1 && <Divider />
                                }
                            </div>
                        ))
                    }
                </Box>
            </Drawer>
        </>
    )

    function ListItemLink(props: { label: string, href: string, onClick? : () => void }) {
        function handleClick() {
            if (props.onClick) {
                props.onClick();
                setOpen(false);
            } else {
                setOpen(false);
            }
        }
        return (
            <ListItem disablePadding>
                <Link href={props.href}>
                    <ListItemButton onClick={handleClick} >
                        <Typography className={`${quicksand.className} font-medium text-black`} 
                            style={{ fontFamily: quicksand.style.fontFamily }}
                        >
                            {props.label}
                        </Typography>
                    </ListItemButton>
                </Link>
            </ListItem>);
    }
}