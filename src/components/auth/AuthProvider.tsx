// User signin unata passe,
// Token eka CRUD operation kraganna front end eke save krala tiygann weno 
// (Browser Local Storage)  <------------- Token save part
// browser --> inspact --> application --> local storage 
// dn api CRUD operation sadaha yawana hema request ekakatama me Token eka yawann puluwan
// hebai apita me book,member,staff,lending oneeema ekakata token eka gann public location ekakata gann one applicaiton eke

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string)=> void;
    logout: ()=> void;
}

// createContext Hook
// Applicaton context ekata samanai
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);      // log wela d nedd kiyala check kragannwa 

    // local storage eke tiyenwa token ekk eka mount wena time eke genalla dagann one 
    useEffect(() => {
        //get the token from localstorage
        const token = localStorage.getItem("cmjd109");      // local storage ekata reference ekk dila apita gann puluwan token eka

        if (token) {
            setIsAuthenticated(!!token);         // (!!) -> meken token eka convert wenawa boolean ekakata
        }
    }, []);

    const login = (token: string)=> {
        // Login weddi token eka tiyenn one ---> ( local starage eke save krnawa )
        localStorage.setItem("cmjd109", token)
        setIsAuthenticated(true);
    }

    const logout = ()=> {
        // Logout unata passe remove kranna one token eka
        localStorage.removeItem("cmjd109")
        setIsAuthenticated(false);
    }

    return (
        // Special Component
        // meya wisin Props pass kranwa 
        // children kiyanne react wala tiyeno special type Prop ekk - me welawe tiyena siyaluma components pass krann kiyla kiyanwa me pop eken
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> {
    const context = useContext(AuthContext);
    
    if (!context) {
        throw new Error("Should use useAuth witin the AuthProvider")
    }
    
    return context;
}