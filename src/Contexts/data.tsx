// Import react hooks
import { createContext, useContext, useState } from "react";

/* Creating a context object. */
const DataContext = createContext<any>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

/**
 * This component provides the value of the ThemeContext object to all the components that are its children.
 *
 * @returns The ThemeContext.Provider is being returned.
 */
const DataProvider = ({ children }: AuthProviderProps) => {
  const [products, setProducts] = useState<any>([]);
  return (
    <DataContext.Provider value={{ products, setProducts }}>
      {children}
    </DataContext.Provider>
  );
};

/**
 * It returns the value of the ThemeContext object.
 * @returns The ThemeContext object.
 */
const useData = () => {
  return useContext(DataContext);
};

export { useData, DataProvider };
