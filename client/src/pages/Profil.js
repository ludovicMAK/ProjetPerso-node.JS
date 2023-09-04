import React from "react";
import { useAuth } from "./Context";
import Navigation from "../components/Navigation";

const Profil = () => {
  const { idUser } = useAuth();
  return (
    <div>
      <Navigation />
      <h1>Ici profil {idUser}</h1>
    </div>
  );
};

export default Profil;
