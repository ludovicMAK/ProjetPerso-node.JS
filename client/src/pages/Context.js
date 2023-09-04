import React, { createContext, useContext, useState } from "react";

// Créez un contexte
const AuthContext = createContext();

// Créez un fournisseur de contexte pour gérer l'état de l'authentification
export function AuthProvider({ children }) {
  // État local pour stocker l'ID de l'utilisateur
  const [idUser, setIdUser] = useState(null);

  // Fonction pour définir l'ID de l'utilisateur lors de la connexion
  const login = (userId) => {
    setIdUser(userId);
  };

  // Fonction pour déconnecter l'utilisateur
  const logout = () => {
    setIdUser(null);
  };

  // Valeurs fournies par le contexte
  const contextValue = {
    idUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

// Hook personnalisé pour accéder aux valeurs du contexte
export function useAuth() {
  return useContext(AuthContext);
}
