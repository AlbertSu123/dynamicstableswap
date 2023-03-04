import {
  Box,
  Button,
  FormHelperText,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material"
import React, { ReactElement } from "react"
import { calculatePrice, commify } from "../utils"

import TokenIcon from "./TokenIcon"
import { formatBNToString } from "../utils"
import { useTranslation } from "react-i18next"

interface Props {
  max?: string | void
  inputValue: string
  onChange?: (value: string) => void
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  helperText?: string
  token: {
    symbol: string
    name: string
    priceUSD?: number
    decimals: number
  }
}

function TokenInput({
  max,
  inputValue,
  onChange,
  disabled,
  readonly,
  error,
  helperText,
  token: {
    symbol: tokenSymbol,
    name: tokenName,
    priceUSD: tokenPriceUSD = 0,
    decimals: tokenDecimals,
  },
  ...rest
}: Props): ReactElement {
  const { t } = useTranslation()
  const theme = useTheme()

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const decimals = tokenDecimals
    // remove all chars that aren't a digit or a period
    let newValue = e.target.value.replace(/[^\d|.]/g, "")
    newValue = newValue.replace(/^0+/, "") // Replace leading zeros
    const periodIndex = newValue.indexOf(".")
    // disallow more than one period
    if (periodIndex !== newValue.lastIndexOf(".")) return
    // disallow arbitrarily large values
    if (Number(newValue) >= Number.MAX_SAFE_INTEGER) return
    // disallow more than dp decimal places, floor round
    if (periodIndex != -1 && newValue.length - periodIndex - 1 > decimals) {
      // Remove the last char
      newValue = newValue.substring(0, newValue.length - 1)
    }
    if (onChange) onChange(newValue)
  }

  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px",
        borderRadius: "20px",
      }}
      bgcolor="background.default"
      {...rest}
    >
      {max != null && (
        <Box display="flex" alignItems="center" justifyContent="end">
          <Typography variant="subtitle2" sx={{ mr: 1 }}>
            {t("balance")}:
          </Typography>
          <Button
            size="small"
            disabled={readonly || disabled}
            onClick={() => onChange && onChange(String(max))}
          >
            <Typography variant="subtitle2">{max}</Typography>
          </Button>
        </Box>
      )}

      <Box
        id="tokenInput"
        display="flex"
        borderRadius="6px"
        alignItems="center"
        bgcolor={
          disabled ? theme.palette.action.disabledBackground : "transparent"
        }
        p={1}
        sx={{
          cursor: disabled ? "not-allowed" : "auto",
          opacity: disabled ? theme.palette.action.disabledOpacity : 1,
        }}
      >
        <TokenIcon symbol={tokenSymbol} alt="icon" width={28} height={28} />
        <Box ml={1}>
          <Typography
            variant="subtitle1"
            color={disabled ? "text.secondary" : "text.primary"}
          >
            {tokenSymbol}
          </Typography>
          <Typography
            variant="body2"
            color={disabled ? "text.secondary" : "text.primary"}
          >
            {tokenName}
          </Typography>
        </Box>
        <Box textAlign="end" flex={1}>
          <InputBase
            autoComplete="off"
            autoCorrect="off"
            type="text"
            placeholder="0.0"
            spellCheck="false"
            disabled={disabled}
            value={inputValue}
            readOnly={readonly}
            inputProps={{
              style: {
                textAlign: "end",
                padding: 0,
                fontFamily: theme.typography.body1.fontFamily,
                fontSize: theme.typography.body1.fontSize,
              },
            }}
            onChange={onChangeInput}
            onFocus={(e) => e.target.select()}
            fullWidth
          />
          <Typography
            variant="body2"
            color={disabled ? "text.secondary" : "text.primary"}
            textAlign="end"
          >
            ≈$
            {commify(
              formatBNToString(
                calculatePrice(inputValue, tokenPriceUSD || 0),
                18,
                2,
              ),
            )}
          </Typography>
        </Box>
      </Box>
      <FormHelperText
        disabled={disabled}
        error={error}
        sx={{ textAlign: "end" }}
      >
        {helperText}
      </FormHelperText>
    </Box>
  )
}

export default TokenInput
