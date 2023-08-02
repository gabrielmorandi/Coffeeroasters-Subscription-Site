import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Plan from "./pages/Plan"
import ScrollToTop from "./pages/ScrollToTop"

import "./css/index.css"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </Router>
  )
}

export default App
