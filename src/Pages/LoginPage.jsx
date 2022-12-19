import React from 'react'
import { CategorysC } from '../Components/Home/CategorysC'
import { LoginC } from '../Components/Login/LoginC'
import { NavigationC } from '../Components/NavigationC'

export const LoginPage = () => {
  return (
    <div>
      <NavigationC />
      <CategorysC />
      <LoginC/>
    </div>
  )
}
