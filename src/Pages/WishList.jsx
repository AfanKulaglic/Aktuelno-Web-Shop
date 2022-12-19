import React from 'react'
import { CategorysC } from '../Components/Home/CategorysC'
import { NavigationC } from '../Components/NavigationC'
import { WishListCtx } from '../Components/WishList/WishListCtx'
import { WishListNavigation } from '../Components/WishList/WishListNavigation'

export const WishList = () => {

  return (
    <div>
        <NavigationC />
        <CategorysC />
        <WishListNavigation />
        <WishListCtx />
    </div>
  )
}
