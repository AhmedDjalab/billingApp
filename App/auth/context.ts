import { createContext, useContext } from 'react';
import jwtDecode, { JwtPayload } from 'jwt-decode';


interface User {
    email: string;
    iat: number;
    name: string;
    userId: number;
}

interface ContextType {
    user: User;
    setUser: (user: Object | null) => void;
    logout: () => void;
}

const AuthContext = createContext<ContextType | any>({ user: {} });

const useAuthContext = () => {
    const { user, setUser } = useContext<ContextType>(AuthContext);

    const login = (token: string) => {
        const currentUser = jwtDecode<JwtPayload>(token);
        setUser(currentUser);
    };

    const logout = () => {
        setUser(null);
    };

    return { user, login, logout };
};

export { AuthContext, useAuthContext };
