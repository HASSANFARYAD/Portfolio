"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
  createContext,
  useContext,
} from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

// The stored theme is read here as well as by the blocking script in the
// document head. The script wins the race for CSS (it sets the `dark` class
// before first paint); this runs as a layout effect so the components that
// style themselves from `theme` in JS are corrected before paint too, rather
// than flashing dark for a frame.
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  // Dark-first: this matches both the server render and the head script's
  // default, so there is nothing for hydration to reconcile.
  const [theme, setTheme] = useState<Theme>("dark");

  useIsomorphicLayoutEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "light" ? "dark" : "light";

      window.localStorage.setItem("theme", next);
      applyTheme(next);

      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
