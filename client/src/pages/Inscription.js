import React, { useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    sexe: "",
    date_de_naissance: "",
    adresse: "",
    code_postal: "",
    ville: "",
    telephone: "",
    email: "",
    login: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [succesMessage, setSuccesMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/inscrire", formData);
      setSuccesMessage(response.data);
    } catch (error) {
      if (error.response.data) {
        debugger;
        setError(error.response.data);
      }
    }
  };

  return (
    <div>
      <Navigation />
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom:</label>
          <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="prenom">prénom:</label>
          <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="sexe">Sexe:</label>
          <select id="sexe" name="sexe" value={formData.sexe} onChange={handleInputChange} required>
            <option value="">Select</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="date_de_naissance">Date de naissance:</label>
          <input type="date" id="date_de_naissance" name="date_de_naissance" value={formData.date_de_naissance} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="adresse">Adresse:</label>
          <input type="text" id="adresse" name="adresse" value={formData.adresse} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="code_postal">Code postal:</label>
          <input type="text" id="code_postal" name="code_postal" value={formData.code_postal} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="ville">ville:</label>
          <input type="text" id="ville" name="ville" value={formData.ville} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="telephone">téléphone:</label>
          <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="login">Nom d'utilisateur:</label>
          <input type="text" id="login" name="login" value={formData.login} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit">S'enregistrer</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {succesMessage && <p className="succes-message">{succesMessage}</p>}
    </div>
  );
};

export default Inscription;
