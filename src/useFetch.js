import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const[data,setData] = useState(null)
  const[loading,setLoading] = useState(true)
  const[error,setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(res => {
        return res.json
      })
      .then(data => {
        setData(data)
        setLoading(false)
        setError(null)
      })
      .catch(err => {
        setError(false)
        setLoading(err.message)
      })
    }, 3000);
  },[url])

  return{data,loading,error}
}
