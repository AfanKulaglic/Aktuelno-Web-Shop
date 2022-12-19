import React from 'react'
import { CategorysC } from '../Components/Home/CategorysC'
import { RegisterC } from '../Components/Register/RegisterC'
import { NavigationC } from '../Components/NavigationC'

export const RegisterPage = () => {
  return (
    <div>
      <NavigationC />
      <CategorysC />
      <RegisterC />
    </div>
  )
}
