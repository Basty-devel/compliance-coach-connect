
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define user roles
export type UserRole = 'admin' | 'teacher' | 'parent' | 'guest';

// Define user type
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// Define context type
interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  hasRole: (role: UserRole | UserRole[]) => boolean;
}

// Create context with default values
const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
  hasRole: () => false,
});

// Create provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
    // In a real app, you would store the token in localStorage or a secure cookie
  };

  const logout = () => {
    setUser(null);
    // In a real app, you would clear the token from localStorage or cookies
  };

  const hasRole = (role: UserRole | UserRole[]): boolean => {
    if (!user) return false;
    
    if (Array.isArray(role)) {
      return role.includes(user.role);
    }
    
    return user.role === role;
  };

  return (
    <UserContext.Provider 
      value={{ 
        user, 
        login, 
        logout, 
        isAuthenticated: !!user,
        hasRole
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Create custom hook for using the context
export const useUser = () => useContext(UserContext);

export default UserContext;
