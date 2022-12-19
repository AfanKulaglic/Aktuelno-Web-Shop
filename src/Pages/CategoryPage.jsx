import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import { ItemsC } from '../Components/Category/ItemsC';
import { SidebarC } from '../Components/Category/SidebarC';
import { FooterC } from '../Components/FooterC';
import { CategorysC } from '../Components/Home/CategorysC';
import { NavigationC } from '../Components/NavigationC';

export const CategoryPage = () => {
    const isMobile = window.innerWidth <= 500;

    const {category} = useParams()
    const{ state } = useLocation() 

    const[minPrice,setMinPrice] = useState(1)
    const[maxPrice,setMaxPrice] = useState(500)

    const getData = (min,max) => {
        setMaxPrice(max)
        setMinPrice(min)
    }

    console.log(minPrice,"MIN")
    console.log(maxPrice,"MAX")

  return (
    <>
        <NavigationC props={state}/>
        <CategorysC props={state}/>
        <div style={{marginLeft:isMobile? '0vh' : '20vh',marginRight:isMobile? '0vh' : '20vh'}}>
            {isMobile &&
                <Container style={{display:isMobile? 'block' :'flex',paddingTop:isMobile? '0vh' : '6vh',}}>
                    <SidebarC onSubmit={getData} />
                    <ItemsC minPrice={minPrice} maxPrice={maxPrice} />
                </Container>
            }
            {!isMobile &&
                <div style={{display:isMobile? 'block' :'flex',paddingTop:isMobile? '0vh' : '6vh',}}>
                    <SidebarC onSubmit={getData}/>
                    <ItemsC minPrice={minPrice} maxPrice={maxPrice}/>
                </div>
            }
        </div>
        <FooterC />
    </>
  )
}
