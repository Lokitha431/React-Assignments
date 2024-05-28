import React from 'react'
import Homepage from './Components/Homepage'
import './Components/Homepage.css'
import Aboutme from './Components/Aboutme'
import './Components/Aboutme.css'
import Education from './Components/Education'
import './Components/Education.css'
import Technical from './Components/Technicalskills'
import './Components/Technicalskills.css'
import Myproject from './Components/Myprojects'
import './Components/Myprojects.css'
import Contactme from './Components/Contactme'
import './Components/Contactme.css'
const App = () => {
  return(
    <>
      <Homepage />
      <Aboutme />
      <Education />
      <Technical />
      <Myproject />
      <Contactme />
    </>
      
  )
}
export default App;