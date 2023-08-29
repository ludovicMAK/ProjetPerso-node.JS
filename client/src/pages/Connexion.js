import React, { useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";

const Connexion = () => {
  const [formData, setFormData] = useState({
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
      debugger;
      const response = await axios.post("/api/connexion", formData);
      setSuccesMessage(response.data);
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div>
      <Navigation />
      <h2>Connexions</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">Login:</label>
          <input type="text" id="login" name="login" value={formData.login} onChange={handleInputChange} required />
        </div>

        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {succesMessage && <p className="succes-message">{succesMessage}</p>}
    </div>
  );
};

export default Connexion;
