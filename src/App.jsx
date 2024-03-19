import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import './App.css'
import Layout from './components/en/Layout'
import Home from './components/en/Home'
import About from './components/en/About'
import Contact from './components/en/Contact'
import Portfolio from './components/en/Portfolio'
import Beachvolley from './components/en/Beachvolley'


function App() {

  return (

    <BrowserRouter basename='/cv-dynamic'>
      <Routes>
        {/* <Route path={["/sv"]} element={<Layout-sv />}> */}
        {/* </Route> */}

        <Route path="/" element={<Layout />} >
          <Route index element={< Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="beachvolley" element={<Beachvolley />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/en/" element={<Layout />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
