import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

const initialState = {};

function MenuInfoProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

function useMenuInfo() {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("InfoContext was used outside of the InfoProvider");
  return context;
}

export { MenuInfoProvider, useMenuInfo };
