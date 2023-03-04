import { Box, Typography } from "@mui/material"
import React, { ReactElement } from "react"
import { useTranslation } from "react-i18next"

function ConfirmTransaction(): ReactElement {
  const { t } = useTranslation()

  return (
    <Box p={8} textAlign="center">
      {/*<Box*/}
      {/*  width="240px"*/}
      {/*  height="240px"*/}
      {/*  display="flex"*/}
      {/*  justifyContent="center"*/}
      {/*  alignItems="center"*/}
      {/*  bgcolor={theme.palette.common.white}*/}
      {/*  borderRadius="50%"*/}
      {/*  margin="auto"*/}
      {/*  mb={8}*/}
      {/*  color={theme.palette.info.main}*/}
      {/*></Box>*/}
      <Typography variant="h2" mb={2}>
        {t("confirmTransaction")}
      </Typography>
      <svg
        version="1.1"
        id="L3"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
        width={"80px"}
        height={"80px"}
      >
        <circle
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          cx="50"
          cy="50"
          r="44"
        />
        <circle fill="#fff" stroke="#fff" strokeWidth="3" cx="8" cy="54" r="6">
          <animateTransform
            attributeName="transform"
            dur="2s"
            type="rotate"
            from="0 50 48"
            to="360 50 52"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </Box>
  )
}

export default ConfirmTransaction
