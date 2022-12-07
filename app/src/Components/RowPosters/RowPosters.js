import React,{useState,useEffect} from 'react'
import './RowPosters.css'
import axios from '../../AxiosInstance'
import {imageUrl } from '../../Constants/Constants'
function RowPosters(props) {
  const [state,setState] = useState([])
  const [page,setPage] = useState(1)
  useEffect(()=>{
      axios.get(props.url+"&page="+page).then((Response)=>{
        var resultent = Response.data.results
        console.log(resultent)
        setState([...state,...resultent])
       })
  },[page])
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {state.map((obj,index)=>
            <div key={index}>
            <img className={props.isSmall ? 'smallposter':'poster'} alt='movie-poster' src={`${imageUrl+obj.backdrop_path}`}/>
            </div>
          )}
          <button onClick={()=>{setPage(page+1)}} className='poster-button'>a</button>
        </div>
      
    </div>
  )
}

export default RowPosters
