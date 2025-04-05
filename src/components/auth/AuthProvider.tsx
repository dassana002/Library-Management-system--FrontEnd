import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router"; 

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem("cmjd109");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("cmjd109", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("cmjd109");
    setIsAuthenticated(false);
    navigate("/"); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Should use useAuth within the AuthProvider");
  }
  return context;
};
