import { createContext, useState, ReactNode } from "react";

type User = { email: string; password: string };
type UserContextType = { user: User; setUser: React.Dispatch<React.SetStateAction<User>> };

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = { children: ReactNode };

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({ email: '', password: '' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
