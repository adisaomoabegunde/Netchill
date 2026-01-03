import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAunthenticated, setIsAunthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAunthenticated(!!token);
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        setIsAunthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/loginn");
        setIsAunthenticated(false);
    };

    return (
        <AuthContext.Provider value={{isAunthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};