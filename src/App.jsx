import React from 'react'
import AllRoutes from './Pages/Routes/AllRoutes'
import "./index.css"
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return (
    <div>
      <ParallaxProvider>
      <AllRoutes/>
      </ParallaxProvider>
    </div>
  )
}

export default App