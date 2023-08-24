import React, { useState } from "react";
import axios from "axios";

const Inscription = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    password: "",
  });

  const enregistreValeurInput = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const valider = async (event) => {
    debugger;
    event.preventDefault();
    try {
      const response = await axios.post("/api/inscrire", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting registration:", error);
    }
  };

  return (
    <div>
      <h2>S'inscrire</h2>
      <form onSubmit={valider}>
        <div>
          <label htmlFor="prenom">Prénom:</label>
          <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={enregistreValeurInput} required />
        </div>
        <div>
          <label htmlFor="nom">nom:</label>
          <input type="text" id="lastName" name="nom" value={formData.nom} onChange={enregistreValeurInput} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={enregistreValeurInput} required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={enregistreValeurInput} required />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Inscription;
