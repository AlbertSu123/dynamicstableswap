import "react-toastify/dist/ReactToastify.css"

import { BLOCK_TIME, POOLS_MAP } from "../constants"
import React, {
  ReactElement,
  Suspense,
  // lazy,
  useCallback,
  useMemo,
} from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { styled, useTheme } from "@mui/material"

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { AppDispatch } from "../state"
import BasicPoolsProvider from "../providers/BasicPoolsProvider"
import Bridges from "./Bridges"
// import CreatePool from "./CreatePool"
import Deposit from "./Deposit"
import Footer from "../components/Footer"
import GaugeProvider from "../providers/GaugeProvider"
import { LocalizationProvider } from "@mui/x-date-pickers"
import MinichefProvider from "../providers/MinichefProvider"
import PendingSwapsProvider from "../providers/PendingSwapsProvider"
import Pools from "./Pools"
import RewardsBalancesProvider from "../providers/RewardsBalancesProvider"
import Starfield from "../components/Starfield"
import Swap from "./Swap"
import { ToastContainer } from "react-toastify"
import TokensProvider from "../providers/TokensProvider"
import TopMenu from "../components/TopMenu"
import UserStateProvider from "../providers/UserStateProvider"
// import VeSDL from "./VeSDL"
// import Version from "../components/Version"
import Web3ReactManager from "../components/Web3ReactManager"
import Withdraw from "./Withdraw"
import WrongNetworkModal from "../components/WrongNetworkModal"
import fetchGasPrices from "../utils/updateGasPrices"
import fetchSwapStats from "../utils/getSwapStats"
import fetchTokenPricesUSD from "../utils/updateTokenPrices"
import { useActiveWeb3React } from "../hooks"
import { useDispatch } from "react-redux"
import usePoller from "../hooks/usePoller"

// const VestingClaim = lazy(() => import("./VestingClaim"))
// const Risk = lazy(() => import("./Risk"))

const AppContainer = styled("div")(() => {
  return {
    // backgroundImage:
    //   theme.palette.mode === "light" ? lightBackground : darkBackground,
    minHeight: "100vh",
    minWidth: "100vw",
    marginRight: "calc(-1 * (100vw - 100%))",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
})
export default function App(): ReactElement {
  const { chainId } = useActiveWeb3React()
  const theme = useTheme()

  const pools = useMemo(() => {
    return Object.values(POOLS_MAP).filter(
      ({ addresses }) => chainId && addresses[chainId],
    )
  }, [chainId])

  return (
    <Suspense fallback={null}>
      <Web3ReactManager>
        <BasicPoolsProvider>
          <MinichefProvider>
            <GaugeProvider>
              <TokensProvider>
                <UserStateProvider>
                  <GasAndTokenPrices>
                    <PendingSwapsProvider>
                      <RewardsBalancesProvider>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <AppContainer>
                            <div
                              style={{
                                backgroundColor: "transparent",
                                minHeight: "100vh",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                zIndex: 1,
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div
                                style={{
                                  position: "fixed",
                                  width: "100%",
                                  height: "100%",
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  zIndex: -100,
                                }}
                              >
                                <Starfield />
                              </div>
                              <TopMenu />
                              <Switch>
                                <Route exact path="/" component={Swap} />
                                <Route exact path="/pools" component={Pools} />
                                <Route
                                  exact
                                  path="/bridges"
                                  component={Bridges}
                                />
                                {pools.map(({ name }) => (
                                  <Route
                                    exact
                                    path={`/pools/${name}/deposit`}
                                    render={(props) => (
                                      <Deposit {...props} poolName={name} />
                                    )}
                                    key={`${name}-name-deposit`}
                                  />
                                ))}
                                {pools.map(({ name, route }) => (
                                  <Route
                                    exact
                                    path={`/pools/${route}/deposit`}
                                    render={(props) => (
                                      <Deposit {...props} poolName={name} />
                                    )}
                                    key={`${route}-route-deposit`}
                                  />
                                ))}
                                {pools.map(({ name }) => (
                                  <Route
                                    exact
                                    path={`/pools/${name}/withdraw`}
                                    render={(props) => (
                                      <Withdraw {...props} poolName={name} />
                                    )}
                                    key={`${name}-name-withdraw`}
                                  />
                                ))}
                                {pools.map(({ route, name }) => (
                                  <Route
                                    exact
                                    path={`/pools/${route}/withdraw`}
                                    render={(props) => (
                                      <Withdraw {...props} poolName={name} />
                                    )}
                                    key={`${route}-route-withdraw`}
                                  />
                                ))}
                                <Redirect
                                  from="/pools/:route/:action"
                                  to="/pools"
                                />
                                {/*<Route*/}
                                {/*  exact*/}
                                {/*  path="/pools/create"*/}
                                {/*  component={CreatePool}*/}
                                {/*/>*/}
                                {/*<Route exact path="/risk" component={Risk} />*/}
                                {/*<Route*/}
                                {/*  exact*/}
                                {/*  path="/vesting-claim"*/}
                                {/*  component={VestingClaim}*/}
                                {/*/>*/}
                                {/*<Route exact path="/vesdl" component={VeSDL} />*/}
                                <Footer />
                              </Switch>
                            </div>
                            {/* <WrongNetworkModal /> */}
                            {/*<Version />*/}
                            <ToastContainer
                              theme={
                                theme.palette.mode === "dark" ? "dark" : "light"
                              }
                              position="top-left"
                            />
                          </AppContainer>
                        </LocalizationProvider>
                      </RewardsBalancesProvider>
                    </PendingSwapsProvider>
                  </GasAndTokenPrices>
                </UserStateProvider>
              </TokensProvider>
            </GaugeProvider>
          </MinichefProvider>
        </BasicPoolsProvider>
      </Web3ReactManager>
    </Suspense>
  )
}

function GasAndTokenPrices({
  children,
}: React.PropsWithChildren<unknown>): ReactElement {
  const dispatch = useDispatch<AppDispatch>()
  const { chainId, library } = useActiveWeb3React()

  const fetchAndUpdateGasPrice = useCallback(() => {
    void fetchGasPrices(dispatch)
  }, [dispatch])
  const fetchAndUpdateTokensPrice = useCallback(() => {
    fetchTokenPricesUSD(dispatch, chainId, library)
  }, [dispatch, chainId, library])
  const fetchAndUpdateSwapStats = useCallback(() => {
    void fetchSwapStats(dispatch)
  }, [dispatch])
  usePoller(fetchAndUpdateGasPrice, 5 * 1000)
  usePoller(fetchAndUpdateTokensPrice, BLOCK_TIME * 3)
  usePoller(fetchAndUpdateSwapStats, BLOCK_TIME * 280) // ~ 1hr
  return <>{children}</>
}
