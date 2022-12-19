import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { CategorysC } from '../Components/Home/CategorysC';
import { OffersC } from '../Components/Product/OffersC';
import { NavigationC } from '../Components/NavigationC';
import { HeaderSidebarC } from '../Components/Product/HeaderSidebarC';
import { ProductCtxC } from '../Components/Product/ProductCtxC.jsx';
import TabsC from '../Components/Product/TabsC';
import { Loading } from '../Components/Loading'
import { useFetch } from '../useFetch';
import { FooterC } from '../Components/FooterC';

export const ProductPage = () => {
    const isMobile = window.innerWidth <= 500;
    const{data:items,loading,error} = useFetch('https://mocki.io/v1/aca0cb4c-71b5-4f1c-b3f9-3a4de131711e')
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getData = (min,max) => {
        setMaxPrice(max)
        setMinPrice(min)

        handleClose()
    }

    const[minPrice,setMinPrice] = useState(1)
    const[maxPrice,setMaxPrice] = useState(100)

  return (
    <div>
        {!loading && 
            <>
                <NavigationC />
                <CategorysC  />
                {isMobile &&
                    <Container>
                        <HeaderSidebarC />
                        <ProductCtxC onSubmit={getData}/>
                        <TabsC />
                        <OffersC />
                    </Container>
                }
                {!isMobile &&
                    <div style={{marginLeft:'20vh',marginRight:'23vh'}}>
                        <HeaderSidebarC />
                        <ProductCtxC onSubmit={getData}/>
                        <TabsC />
                        <OffersC />
                    </div>
                }
                <FooterC />
            </>
        }
        {loading &&
            <Loading />
        }
    </div>
  )
}
