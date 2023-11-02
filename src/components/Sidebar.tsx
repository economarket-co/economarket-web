'use client';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { quicksand } from '@/fonts';

export default function Sidebar(props: { isMobile: boolean }) {
    const [open, setOpen] = useState(false)

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
                { name: 'Usuario', href: '/v1/login' },
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
                                            <ListItemLink key={index} label={link.name} href={link.href} />
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

    function ListItemLink(props: { label: string, href: string }) {
        return (
            <ListItem disablePadding>
                <Link href={props.href}>
                    <ListItemButton onClick={() => setOpen(false)}>
                        <Typography className={`${quicksand.className} font-medium text-black`} >
                            {props.label}
                        </Typography>
                    </ListItemButton>
                </Link>
            </ListItem>);
    }
}