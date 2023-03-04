import {
  Box,
  Button,
  DialogContent,
  Link,
  Stack,
  Typography,
} from "@mui/material"
import { ChainId, SUPPORTED_WALLETS } from "../constants"
import React, { ReactElement } from "react"
import { commify, formatBNToString } from "../utils"
import ChangeIcon from "@mui/icons-material/ImportExport"
import Copy from "./Copy"
import Identicon from "./Identicon"
import LaunchIcon from "@mui/icons-material/Launch"
import Transactions from "./Transactions"
import { Zero } from "@ethersproject/constants"
import { find } from "lodash"
import { getMultichainScanLink } from "../utils/getEtherscanLink"
import { shortenAddress } from "../utils/shortenAddress"
import { useActiveWeb3React } from "../hooks"
import { usePoolTokenBalances } from "../state/wallet/hooks"
import { useTheme } from "@mui/material/styles"
import { useTranslation } from "react-i18next"
import { useUDName } from "../hooks/useUDName"

interface Props {
  openOptions: () => void
}

export default function AccountDetail({ openOptions }: Props): ReactElement {
  const { t } = useTranslation()
  const { account, connector, chainId } = useActiveWeb3React()
  const tokenBalances = usePoolTokenBalances()
  const udName = useUDName()
  const ethBalanceFormatted = commify(
    formatBNToString(tokenBalances?.ETH || Zero, 18, 6),
  )

  const connectorName = find(SUPPORTED_WALLETS, ["connector", connector])?.name
  const theme = useTheme()

  return (
    <Box
      data-testid="accountDetailContainer"
      bgcolor={
        theme.palette.mode === "light"
          ? theme.palette.common.white
          : theme.palette.common.black
      }
    >
      <DialogContent>
        <Typography variant="h2" mb={2}>
          {t("account")}
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="auto auto"
          rowGap={2}
        >
          <Typography variant="body2" color="text.secondary">
            {t("connectedWith")}&nbsp;
            {connectorName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t("balance")}
          </Typography>

          <Stack direction="row" spacing={1}>
            <Identicon />
            <Typography variant="subtitle1">
              {udName || (account && shortenAddress(account))}
            </Typography>
            {account && (
              <Link
                href={getMultichainScanLink(
                  chainId as ChainId,
                  account,
                  "address",
                )}
                target="_blank"
                rel="noreferrer"
              >
                <LaunchIcon fontSize="inherit" />
              </Link>
            )}
          </Stack>
          <Box>
            <Typography variant="subtitle1">
              {ethBalanceFormatted}&#926;
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            {account && <Copy toCopy={account} />}
          </Box>
          <Box display="flex" alignItems="center">
            <Button
              onClick={() => {
                openOptions()
              }}
              startIcon={<ChangeIcon />}
              data-testid="changeAccountBtn"
            >
              {t("changeAccount")}
            </Button>
          </Box>
        </Box>
      </DialogContent>
      <Box bgcolor={theme.palette.background.paper} p={3}>
        <Transactions />
      </Box>
    </Box>
  )
}
