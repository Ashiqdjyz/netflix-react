import React,{useEffect, useState} from 'react';
import './Banner.css';
import axios from '../../AxiosInstance';
import { API_KEY,imageUrl } from '../../Constants/Constants';


function Banner() {
  const [movie,setMOvie] = useState()
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      setMOvie(Response.data.results[Math.floor(Math.random()*21)])
    })
  },[])

return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.poster_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className='fade-bottom'>

        </div>

    </div>
  )
}


      
  

export default Banner

  

