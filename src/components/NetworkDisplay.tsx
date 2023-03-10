import { Button, Typography, useTheme } from "@mui/material"
import { ChainId, IS_L2_SUPPORTED } from "../constants"
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core"

import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone"
import { NETWORK_LABEL } from "../constants/networks"
import React from "react"

interface NetworkDisplayProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
const NetworkDisplay = React.forwardRef<HTMLButtonElement, NetworkDisplayProps>(
  function NetworkDisplay({ onClick }, ref) {
    const { active, chainId, error } = useWeb3React()
    const theme = useTheme()
    console.log(chainId)
    const networkLabel: string =
      NETWORK_LABEL[chainId as ChainId] || "Unconnected"
    console.log(NETWORK_LABEL)
    console.log(NETWORK_LABEL[chainId as ChainId])
    const isUnsupportChainIdError = error instanceof UnsupportedChainIdError

    return (
      IS_L2_SUPPORTED && (
        <Button
          ref={ref}
          data-testid="networkDisplayBtn"
          variant="outlined"
          color="mute"
          onClick={onClick}
          startIcon={
            <CircleTwoToneIcon
              color={!isUnsupportChainIdError && active ? "success" : "error"}
              fontSize="small"
            />
          }
          sx={{ border: `1px solid ${theme.palette.action.hover}` }}
        >
          <Typography
            display={{ xs: "none", sm: "block" }}
            variant="caption"
            color="text.primary"
            noWrap
          >
            {networkLabel}
          </Typography>
        </Button>
      )
    )
  },
)
export default NetworkDisplay
