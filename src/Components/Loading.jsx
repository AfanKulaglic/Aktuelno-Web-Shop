import React from 'react'
import ReactLoading from 'react-loading';

export const Loading = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'45vh'}}>
        <ReactLoading type="cubes" color='green' height={267} width={75} />
    </div>
  )
}
