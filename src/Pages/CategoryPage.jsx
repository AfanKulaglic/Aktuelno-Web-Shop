import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ItemsC } from '../Components/Category/ItemsC';
import { SidebarC } from '../Components/Category/SidebarC';
import { CategorysC } from '../Components/Home/CategorysC';
import { NavigationC } from '../Components/NavigationC';

export const CategoryPage = () => {
    const isMobile = window.innerWidth <= 500;

    const {category} = useParams()

    const[minPrice,setMinPrice] = useState(1)
    const[maxPrice,setMaxPrice] = useState(100)

    const getData = (min,max) => {
        setMaxPrice(max)
        setMinPrice(min)
    }

    console.log(minPrice,"MIN")
    console.log(maxPrice,"MAX")

  return (
    <>
        <NavigationC />
        <CategorysC />
        <div style={{marginLeft:isMobile? '0vh' : '20vh',marginRight:isMobile? '0vh' : '20vh'}}>
            {isMobile &&
                <Container style={{display:isMobile? 'block' :'flex',paddingTop:isMobile? '0vh' : '6vh',}}>
                    <SidebarC onSubmit={getData} />
                    <ItemsC />
                </Container>
            }
            {!isMobile &&
                <div style={{display:isMobile? 'block' :'flex',paddingTop:isMobile? '0vh' : '6vh',}}>
                    <SidebarC onSubmit={getData} />
                    <ItemsC />
                </div>
            }
        </div>
    </>
  )
}
