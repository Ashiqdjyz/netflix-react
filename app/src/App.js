import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import "./app.css"
import Banner from './Components/Banner/Banner'
import RowPosters from './Components/RowPosters/RowPosters'
import {action,originals,ComedyMovies,HorrorMovies} from './Constants/Urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPosters url={originals} title='Netflix-Originals'/>
      <RowPosters url={action} title='Action' isSmall/>
      <RowPosters url={ComedyMovies} title='Comedy' isSmall/>
      <RowPosters url={HorrorMovies} title='Horror' isSmall/>
    </div>
  )
}
    
    
  

export default App
