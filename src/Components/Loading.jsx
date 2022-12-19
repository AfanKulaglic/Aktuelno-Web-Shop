import React from 'react'
import ReactLoading from 'react-loading';
import logo from '../Img/logo.png'

export const Loading = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',marginTop:'40vh'}}>
        <img src={logo} width='250vh' height='80vh' />
    </div>
    <div style={{display:'flex',justifyContent:'center',marginTop:'0vh'}}>
      <ReactLoading type="cubes" color='#274db1' height={167} width={50} />
    </div>
    </>
  )
}
