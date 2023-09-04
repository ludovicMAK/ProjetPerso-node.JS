import React from "react";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import AjouterLecon from "./pages/AjouterLecon";
import Planning from "./pages/Planning";
import Profil from "./pages/Profil";
import Statistique from "./pages/Statistique";
import Dashboard from "./pages/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/ajouterLecon" element={<AjouterLecon />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/statistique" element={<Statistique />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
