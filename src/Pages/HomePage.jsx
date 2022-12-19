import React, { useEffect, useState } from 'react'
import { FooterC } from '../Components/FooterC'
import { BanerC } from '../Components/Home/BanerC'
import { CarouselC } from '../Components/Home/CarouselC'
import { CategorysC } from '../Components/Home/CategorysC'
import { OffersC } from '../Components/Home/OffersC'
import { UnderCarouselC } from '../Components/Home/UnderCarouselC'
import { Loading } from '../Components/Loading'
import { NavigationC } from '../Components/NavigationC'
import { useFetch } from '../useFetch'
import { db } from '../firebase'
import { uid } from 'uid'
import { set,ref, onValue } from 'firebase/database'
import { useLocation } from 'react-router-dom'

export const HomePage = () => {
  
  const[item,setItem] = useState([])
  const isMobile = window.innerWidth <= 500;
  
  const[loading,setLoading] = useState(true)

  const{ state } = useLocation() 
  console.log(state)
  
  useEffect(() => {
    setTimeout(() => {
      onValue(ref(db), snapshot => {
        setItem([])
        const data = snapshot.val()
        if(data !== null) {
          Object.values(data).map((todo) => {
            setItem(oldArray => [...oldArray,todo])
            setLoading(false)
          })
        }
      })
    }, 3000);
  },[])

  return (
    <div style={{overflow:'hidden'}}>
      {loading &&
        <Loading />
      }
      {!loading && 
        <>
          <NavigationC />
          <CategorysC />
          <CarouselC />
          <UnderCarouselC />
          <OffersC />
          <BanerC />
          <FooterC />
        </>
      }
    </div>
  )
}
