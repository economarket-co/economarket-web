import React, { useEffect } from 'react'
import { Principal } from '../../components/Principal'
import Announcements from '../../components/Announcements'
import { Aliances } from '../../components/Aliances'
import Categories from '../../components/Categories'
import Prefooter from '../../components/Prefooter'
import { Grid } from '@mui/material'
import { Navbar } from '../../components/Navbar'

const Home = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
        <Grid container>
          <Grid item>
            <Principal/>
          </Grid> 
          <Grid item>
            <Announcements/>  
          </Grid>
          <Grid item>
            <Aliances/>
          </Grid>
          <Grid item>
            <Categories/>   
          </Grid>
          <Grid>
            <Prefooter/>  
          </Grid>
        </Grid>
    )
}

export default Home