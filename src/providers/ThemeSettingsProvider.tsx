/* eslint-disable*/
import { CssBaseline, responsiveFontSizes } from "@mui/material"
import React, {
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import componentsOverrides from "../theme/components"
import { darkTheme } from "../theme"

import { ThemeProvider } from "@mui/material"

export type ThemeMode = "dark"
export type ThemeSettingsContextProps = {
  themeMode: ThemeMode
  onChangeMode: (themeMode: ThemeMode) => void
}

const initialState: ThemeSettingsContextProps = {
  themeMode: "dark",
  onChangeMode: () => undefined,
}

const ThemeSettingsContext = createContext(initialState)

function ThemeSettingsProvider({
  children,
}: PropsWithChildren<unknown>): ReactElement {
  const [mode, setMode] = useState<ThemeMode>("dark")
  const prefersDarkMode = "dark" as ThemeMode

  useEffect(() => {
    setMode(prefersDarkMode)
  }, [setMode, prefersDarkMode])

  useEffect(() => {
    const modeValue = prefersDarkMode
    if (modeValue === "dark") {
      document.body.classList.add("dark")
    }
  }, [mode, prefersDarkMode])

  const onChangeMode = (mode: ThemeMode) => {
    setMode(mode)
    localStorage.setItem("paletteMode", mode)
  }

  const theme = responsiveFontSizes(darkTheme)
  theme.components = componentsOverrides(theme)

  return (
    <ThemeSettingsContext.Provider
      value={{
        themeMode: mode,
        onChangeMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeSettingsContext.Provider>
  )
}

export { ThemeSettingsProvider, ThemeSettingsContext }

export const useThemeSettings: () => ThemeSettingsContextProps = () =>
  useContext(ThemeSettingsContext)
