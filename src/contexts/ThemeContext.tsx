import {
  createContext,
  Dispatch,
  useState,
  SetStateAction,
  ReactNode,
} from "react";

export type Theme = {
  mainBg: string;
};

export interface ThemeContextProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const defaultState = {
  theme: {
    mainBg: "firstColor",
  },
  setTheme: (theme: Theme) => {},
};

export const ThemeContext = createContext(defaultState);

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultState.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
