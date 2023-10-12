import React, { useEffect } from 'react'
import { Principal } from '../../components/Principal'
import Announcements from '../../components/Announcements'
import { Aliances } from '../../components/Aliances'
import Categories from '../../components/Categories'
import Prefooter from '../../components/Prefooter'

const Home = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
        <Principal/>
        <Announcements/>
        <Aliances/>
        <Categories/>
        <Prefooter/>
    </>
  )
}

export default Home