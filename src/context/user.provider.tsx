import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
  } from "react";
  import { IUser } from "../types";
  import { getCurrentUser } from "../services/AuthService";
  interface IUserProviderValues {
    user: IUser | null;
    isLoading: boolean;
    setUser: (user: IUser | null) => void;
    setIsloading: Dispatch<SetStateAction<boolean>>;
  }
  const UserContext = createContext<IUserProviderValues | undefined>(undefined);
  const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsloading] = useState(false);
    const handleUser = async () => {
      const user = await getCurrentUser();
      setUser(user);
      setIsloading(false);
    };
    useEffect(() => {
      handleUser();
    }, [isLoading]);
    return (
      <UserContext.Provider value={{ user, setUser, isLoading, setIsloading }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useUser = () => {
      const context = useContext(UserContext);
      if(context === undefined){
          throw new Error("useUser must be within the UsrProvider context ")
      }
      return context;
  }
  
  
  export default UserProvider;
  