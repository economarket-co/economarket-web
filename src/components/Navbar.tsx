'use client';
// import "./styles/Navbar.css"
import { AppBar, Badge, IconButton, Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Logout } from '@mui/icons-material';

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
import Image from 'next/image';
import { quicksand } from '@/fonts';

export default function CustomNavbar() {
    const { cartItems } = useContext(CartContext);
    const [session, setSession] = useState<Session>();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const supabase = createClientComponentClient();
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (session) setSession(session);
            }
        );

        setIsMobile(window.innerWidth < 1024);

        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 1024);
        });
    }, [])

    async function handleSignout() {
        try {
            const res = await axios.post('/api/auth/signout');

            window.location.href = "/v1/auth/signin";
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
            className={`${quicksand.className}`}
        >
            <Toolbar className='flex gap-3 md:justify-between items-center py-3 px-3 md:px-8'>

                <div className='flex md:gap-3 items-center'>
                    {
                        !isMobile && (
                            <SideBar isMobile={false} session={session} />
                        )
                    }
                    <Link href="/v1">
                        <IconButton>
                            <Image
                                alt='logo'
                                width={90}
                                height={45}
                                src="/icons/logo.png"
                                className='cursor-pointer w-[70px] h-[30px] md:[75px] md:h-[36px] lg:w-[80px] lg:h-[37px]'
                            />
                        </IconButton>
                    </Link>
                </div>

                <SearchBar />

                {
                    isMobile && (
                        <SideBar isMobile={true} session={session} />
                    )
                }

                <div className='hidden lg:flex items-center'>
                    {
                        !session ?
                            <Link href="/v1/auth/signin">
                                <IconButton sx={{ color: "white" }}>
                                    <PersonIcon />
                                </IconButton>
                            </Link>
                            : <button onClick={handleSignout}>
                                <IconButton sx={{ color: "white" }}>
                                    <Logout />
                                </IconButton>
                            </button>
                    }


                    <Link href={'/v1/favorites'}>
                        <IconButton sx={{ color: "white" }}>
                            <Favorite />
                        </IconButton>
                    </Link>
                    <Link href="/v1/cart">
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
