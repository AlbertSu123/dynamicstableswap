import { Components, Theme } from "@mui/material"

export default function PaperTheme(theme: Theme): Components {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.paper,
          backgroundImage: "none",
          border: `3px solid ${theme.palette.other.divider}`,
          boxShadow: "none",
          borderRadius: theme.spacing(1),
          opacity: 1,
        },
      },
    },
  }
}
