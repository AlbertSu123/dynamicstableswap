import {
  ButtonPropsColorOverrides,
  Components,
  ComponentsVariants,
  Theme,
} from "@mui/material"
import { OverridableStringUnion } from "@mui/types"

export interface buttonVariantOverrides {
  invisible: true
  gradient: true
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    mute: true
  }
  interface ButtonPropsVariantOverrides {
    invisible: true
    outlined: true
    contained: true
    text: true
  }
}
type ColorVariant = OverridableStringUnion<
  "primary" | "secondary" | "success" | "error" | "info" | "warning",
  ButtonPropsColorOverrides
>

const buttonColorVariants: ColorVariant[] = [
  "primary",
  "secondary",
  "info",
  "mute",
]

const containedStyle = (
  colors: ColorVariant[],
  theme: Theme,
): ComponentsVariants["MuiButton"] =>
  colors.map((color) => ({
    props: {
      variant: "contained",
      color: color,
    },
    style: {
      "&:hover": {
        backgroundColor: theme.palette[color].states?.containedHoverBackground,
      },
    },
  }))

const outlinedStyle = (
  colors: ColorVariant[],
  theme: Theme,
): ComponentsVariants["MuiButton"] =>
  colors.map((color) => ({
    props: {
      variant: "outlined",
      color: color,
    },
    style: {
      border: `1px solid ${
        theme.palette[color].states?.outlinedRestingBorder ||
        theme.palette[color].main
      }`,
      "&:hover": {
        backgroundColor: theme.palette[color].states?.outlinedHoverBackground,
      },
    },
  }))

const invisibleStyle = (
  colors: ColorVariant[],
  theme: Theme,
): ComponentsVariants["MuiButton"] =>
  colors.map((color) => ({
    props: {
      variant: "invisible",
      color: color,
    },
    style: {
      color: theme.palette[color].main,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  }))

const textStyle = (
  colors: ColorVariant[],
  theme: Theme,
): ComponentsVariants["MuiButton"] =>
  colors.map((color) => ({
    props: {
      variant: "text",
      color: color,
    },
    style: {
      "&:hover": {
        color: "#ffffff",
        backgroundColor: theme.palette[color].states?.outlinedHoverBackground,
      },
    },
  }))
export default function ButtonTheme(theme: Theme): Components {
  return {
    MuiButton: {
      variants: outlinedStyle(buttonColorVariants, theme)?.concat(
        containedStyle(buttonColorVariants, theme) ?? [],
        textStyle(buttonColorVariants, theme) ?? [],
        invisibleStyle(buttonColorVariants, theme) ?? [],
      ),
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: theme.spacing(1),
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeMedium: {
          lineHeight: 0,
          minWidth: 70,
          height: 32,
          padding: 8,
          font: theme.typography.body1.font,
        },
        sizeSmall: {
          minWidth: 0,
          padding: 1,
          borderRadius: 3,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  }
}
