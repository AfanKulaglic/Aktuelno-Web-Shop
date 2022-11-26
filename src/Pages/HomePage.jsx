import React from 'react'
import { BanerC } from '../Components/Home/BanerC'
import { CarouselC } from '../Components/Home/CarouselC'
import { CategorysC } from '../Components/Home/CategorysC'
import { OffersC } from '../Components/Home/OffersC'
import { UnderCarouselC } from '../Components/Home/UnderCarouselC'
import { NavigationC } from '../Components/NavigationC'

export const HomePage = () => {
  return (
    <div>
        <NavigationC />
        <CategorysC  />
        <CarouselC />
        <UnderCarouselC />
        <OffersC />
        <BanerC />
    </div>
  )
}
