import { ChainId, VisibleChainIds } from "../constants"
import { DialogContent, Typography } from "@mui/material"
import React, { ReactElement, useState } from "react"
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core"
import { Button } from "@mui/material"
import Dialog from "./Dialog"
import { SUPPORTED_NETWORKS } from "../constants/networks"
import { useActiveWeb3React } from "../hooks"
import { useTranslation } from "react-i18next"

export default function WrongNetworkModal(): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState<boolean | undefined>()
  const { error, chainId, library, account } = useActiveWeb3React()
  const { active } = useWeb3React()
  const isUnsupportChainIdError = error instanceof UnsupportedChainIdError
  const { t } = useTranslation()

  const toSwitch = SUPPORTED_NETWORKS[ChainId.EVMOS]
  const chanIdToSwitch = toSwitch ? toSwitch.chainId : "0x1"

  return (
    <Dialog
      open={
        open ??
        (active &&
          (isUnsupportChainIdError || !VisibleChainIds.has(chainId as ChainId)))
      }
      maxWidth="xs"
      onClose={() => null}
      hideClose={true}
    >
      <DialogContent sx={{ whiteSpace: "pre-line" }}>
        <Typography textAlign="center" mb={3} sx={{ fontSize: 48 }}>
          &#129325;
        </Typography>
        <Typography>{t("wrongNetworkContent")}</Typography>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={(): void => {
            void library?.send("wallet_addEthereumChain", [toSwitch, account])
            void library?.send("wallet_switchEthereumChain", [
              { chainId: chanIdToSwitch },
              account,
            ])
          }}
        >
          Switch to Evmos Mainnet
        </Button>
      </DialogContent>
    </Dialog>
  )
}
