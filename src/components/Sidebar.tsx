'use client';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function Sidebar() {
    const [open, setOpen] = useState(false)

    const sections = [
        {
            links: [
                { name: 'Inicio', href: '/' },
                { name: 'Categorias', href: '/categories' },
                { name: 'Comparador de precios', href: '/comparador' },
                { name: 'Todos los productos', href: '/productos' },
            ]
        },
        {
            links: [
                { name: 'Usuario', href: '/login' },
                { name: 'Favoritos', href: '/favoritos' },
                { name: 'Carrito de compras', href: '/carrito' },
            ]
        }
    ]
    return (
        <>
            <IconButton onClick={() => setOpen(true)}>
                <MenuIcon className='text-white' />
            </IconButton>
            <Drawer
                anchor='left'
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
                        <Typography sx={{
                            color: '#000000', fontFamily: "Quicksand",
                            fontWeight: 500
                        }}>
                            {props.label}
                        </Typography>
                    </ListItemButton>
                </Link>
            </ListItem>);
    }
}