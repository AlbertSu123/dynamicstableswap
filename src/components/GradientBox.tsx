import { Box, BoxProps, Paper, PaperProps, useTheme } from "@mui/material"
import React, { PropsWithChildren, ReactElement } from "react"

interface GradientBoxProps {
  boxProps?: BoxProps
  paperProps?: PaperProps
}

//    TODO: Make theme "color" a prop
export default function GradientBox({
  children,
  boxProps = {},
  paperProps = {},
}: PropsWithChildren<unknown> & GradientBoxProps): ReactElement {
  const theme = useTheme()
  const paperStyles = Object.assign(
    {
      padding: "8px",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "20px",
      border: "none",
    },
    paperProps.sx ? paperProps.sx : {},
  )
  const boxStyles = Object.assign(
    {
      width: "100%",
      border: "solid 3px transparent",
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(360deg, ${theme.palette.primary.gradient?.gradient1}, ${theme.palette.primary.gradient?.gradient2})`,
      backgroundOrigin: "border-box",
      backgroundClip: "content-box, border-box",
      boxShadow:
        "1px 3000px 0.5px " + theme.palette.background.paper + " inset",
      borderRadius: "20px",
      padding: "24px",
    },
    boxProps.sx ? boxProps.sx : {},
  )
  return (
    <Paper {...paperProps} sx={paperStyles}>
      <Box {...boxProps} sx={boxStyles}>
        {children}
      </Box>
    </Paper>
  )
}
