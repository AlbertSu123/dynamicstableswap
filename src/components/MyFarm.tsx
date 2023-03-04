import { Box, Button, Stack, Typography } from "@mui/material"
import { ChainId, PoolName } from "../constants"
import React, { ReactElement } from "react"
import { commify, formatBNToString } from "../utils"

import { BigNumber } from "@ethersproject/bignumber"
import GradientBox from "./GradientBox"
import { Zero } from "@ethersproject/constants"
import { useActiveWeb3React } from "../hooks"
import { useRewardsHelpers } from "../hooks/useRewardsHelpers"
import { useTranslation } from "react-i18next"

type Props = {
  lpWalletBalance: BigNumber
  poolName: string
}
export default function MyFarm({
  lpWalletBalance,
  poolName,
}: Props): ReactElement | null {
  const {
    approveAndStake,
    claimSPA,
    unstake,
    amountStaked,
    amountOfSpaClaimable,
    isPoolIncentivized,
  } = useRewardsHelpers(poolName as PoolName)
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()
  const formattedLpWalletBalance = commify(
    formatBNToString(lpWalletBalance, 18, 4),
  )
  const formattedLpStakedBalance = commify(
    formatBNToString(amountStaked, 18, 4),
  )
  const formattedSpaClaimableBalance = commify(
    formatBNToString(amountOfSpaClaimable, 18, 4),
  )

  const veSDLFeatureReady = false

  return isPoolIncentivized ? (
    <GradientBox>
      <Stack spacing={2}>
        <Typography variant="h1">
          {veSDLFeatureReady ? t("myGaugeFarm") : t("myFarm")}
        </Typography>
        <Box display="flex" alignItems="center">
          <Box flex={1}>
            <Typography>{t("lpAvailable")}</Typography>
            <Typography variant="subtitle1" data-testid="myFarmLpBalance">
              {formattedLpWalletBalance}
            </Typography>
          </Box>
          <Box flex={1}>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              disabled={lpWalletBalance.isZero()}
              onClick={() => approveAndStake(lpWalletBalance)}
            >
              {t("stakeAll")}
            </Button>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Box flex={1}>
            <Typography>{t("lpStaked")}</Typography>
            <Typography variant="subtitle1">
              {formattedLpStakedBalance}
            </Typography>
          </Box>
          <Box flex={1}>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              disabled={amountStaked.isZero()}
              onClick={() => unstake(amountStaked)}
            >
              {t("unstakeAll")}
            </Button>
          </Box>
        </Box>
        {
          <Box display="flex" alignItems="center">
            <Box flex={1}>
              <Typography>{t("claimableSPA")}</Typography>
              <Typography variant="subtitle1">
                {formattedSpaClaimableBalance}
              </Typography>
            </Box>
            <Box flex={1}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                disabled={amountOfSpaClaimable.isZero()}
                onClick={() => claimSPA()}
              >
                {t("claimAll")}
              </Button>
            </Box>
          </Box>
        }
      </Stack>
    </GradientBox>
  ) : null
}
