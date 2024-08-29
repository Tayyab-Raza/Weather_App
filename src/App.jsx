import React, { useState } from 'react'
import Weather from './Components/Weather'
import Forecastdays from './Components/Forecastdays'


function App() {
 

  return (
    <div className='app'>
      <Weather />
      <Forecastdays />
    </div>
  )
}

export default App
