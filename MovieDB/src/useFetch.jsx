import React, { useState, useContext, useEffect } from 'react'
 const API_ENDPOINT = `http://www.omdbapi.com/?apikey=2ec1675d`
    

export const useFetch = (urlParams) => {
    const [isLoading,setLoading]=useState(true)
    const [error,setError]=useState({show:false,msg:''})
    const [data,setData]=useState([null])
    
    const fetchMovies=async (url)=>{
        setLoading(true)
        try {
          const resp=await fetch(url)
          const data=await resp.json()
    
          if(data.Response==="True"){
            // setData(data.Search)
            setData(data.Search || data)
            setError({show:false,msg:''})
          }
          else{
            setError({show:true,msg:data.Error})
          }
          setLoading(false)
        } catch (error) {
          console.log(error);
        }
      }
      
    
      useEffect(()=>{
        fetchMovies(`${API_ENDPOINT}&s=${urlParams}`)
      },[urlParams])


    return {isLoading,error,data}
}


export default useFetch