import React, { useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import { useAuth } from "./Context";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [errorMessage, setError] = useState("");
  const location = useLocation();
  const message = location.state && location.state.message;
  const navigate = useNavigate();
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
      login(response.data);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data.error);
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
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {message && <div>{message}</div>}
    </div>
  );
};

export default Connexion;
