import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// páginas
import Header from "./pages/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Video from "./pages/Video"

//servicios
import servicioUsuario from './services/usuarios'

//stilos 
import'./App.css'


const App = () =>{
  const [usuarios, setUsuarios] = useState([])

  const serviUsuario = () => {
    servicioUsuario.getAll().then(p => {
      setUsuarios(p.data.response)
    })
  }
  useEffect(serviUsuario, [])

 



  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login usuario={usuarios} />} />
          <Route path="/Video/:id" element={<Video />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
