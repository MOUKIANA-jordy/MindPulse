import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// Création du contexte d'authentification
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (error) {
        console.error("Erreur d'authentification:", error);
      }
    }
    setLoading(false);
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      await AsyncStorage.setItem("token", res.data.token);
      setUser(res.data.user);
    } catch (error) {
      console.error("Erreur de connexion:", error);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
