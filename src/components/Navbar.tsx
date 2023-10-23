'use client';
// import "./styles/Navbar.css"
import { AppBar, Badge, IconButton, Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

// import logo from "../assets/Group 79.svg"
import { Favorite, ShoppingCart } from '@mui/icons-material';
import Link from 'next/link';

import SideBar from '@/components/Sidebar';
import SearchBar from './SearchBar';

// import { useStatevalue } from '../StateProvider';
// import { actionTypes } from '../reducer';

export default function CustomNavbar() {
    // const [{basket},dispatch] = useStatevalue();  

    // const openSearch = () =>{

    //     dispatch({
    //         type: actionTypes.OPEN_SEARCH,
    //         open: true
    //     })
    // }



    // console.log(basket);
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

                <SearchBar/>

                <div className='hidden lg:flex'>
                    <Link href="/login">
                        <IconButton sx={{ color: "white" }}>
                            <PersonIcon />
                        </IconButton>
                    </Link>

                    <Link href="/favoritos">
                        <IconButton sx={{ color: "white" }}>
                            <Favorite />
                        </IconButton>
                    </Link>
                    <Link href="/carrito">
                        <IconButton sx={{ color: "white" }}>
                            <Badge badgeContent={0} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </Link>
                </div>

            </Toolbar>
        </AppBar>
    )
}
