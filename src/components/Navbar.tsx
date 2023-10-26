'use client';
// import "./styles/Navbar.css"
import { AppBar, Badge, IconButton, Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Logout} from '@mui/icons-material';

// import logo from "../assets/Group 79.svg"
import { Favorite, ShoppingCart } from '@mui/icons-material';
import Link from 'next/link';

import SideBar from '@/components/Sidebar';
import SearchBar from './SearchBar';
import { CartContext } from "@/Context/CartContext";
import { useContext, useEffect, useState } from 'react';
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function CustomNavbar() {
    const { cartItems } = useContext(CartContext);
    const [session, setSession] = useState<Session>();

    useEffect(() => {
        const supabase = createClientComponentClient();
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (session) setSession(session);
            }
        );
    }, [])

    async function handleSignout() {
        try {
            const res = await axios.post('/api/auth/signout');

            window.location.href = "/auth/signin";
        } catch (error) {
            console.error(error);
            toast.error("Error al cerrar sesión");
        }
    }

    return (
        <AppBar position="static"
            sx={{
                backgroundColor: "#033E8C",
                boxShadow: "none",
                width: "100%"
            }}
        >
            <Toolbar className='flex justify-between items-center py-3'>

                <div>
                    <SideBar />
                    <Link href="/">
                        <IconButton>
                            <img alt='' width={70} height={70} src="/icons/logo.png" />
                        </IconButton>
                    </Link>
                </div>

                <SearchBar />

                <div className='hidden lg:flex'>
                    {
                        !session ?
                            <Link href="/auth/signin">
                                <IconButton sx={{ color: "white" }}>
                                    <PersonIcon />
                                </IconButton>
                            </Link>
                            : <button onClick={handleSignout}>
                                <IconButton sx={{ color: "white" }}>
                                    <Logout/>
                                </IconButton>
                            </button>
                    }


                    <Link href={'/favorites'}>
                        <IconButton sx={{ color: "white" }}>
                            <Favorite />
                        </IconButton>
                    </Link>
                    <Link href="/cart">
                        <IconButton sx={{ color: "white" }}>
                            <Badge badgeContent={cartItems.length} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Link>
                </div>

            </Toolbar>
        </AppBar>
    )
}
