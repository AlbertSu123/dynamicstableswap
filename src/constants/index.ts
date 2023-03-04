// injectedTallyProvider,
// uauth,
// walletconnect,
// walletlink,

import { AbstractConnector } from "@web3-react/abstract-connector"
import { BigNumber } from "@ethersproject/bignumber"
// import coinbasewalletIcon from "../assets/icons/coinbasewallet.svg"
import { injectedMetaMaskProvider } from "../connectors"
import metamaskIcon from "../assets/icons/metamask.svg"
// import tallyIcon from "../assets/icons/tally.svg"
// import unstoppableDomainsLogo from "../assets/icons/unstoppableDomainsLogo.png"
// import walletconnectIcon from "../assets/icons/walletconnect.svg"

export const NetworkContextName = "NETWORK"
export const BTC_POOL_NAME = "BTC"
export const BTC_POOL_V2_NAME = "BTC V2"
export const EVMOS_BTC_POOL_NAME = "Evmos BTC"
export const STABLECOIN_POOL_NAME = "Stablecoin"
export const STABLECOIN_POOL_V2_NAME = "Stablecoin V2"
export const VETH2_POOL_NAME = "vETH2"
export const ALETH_POOL_NAME = "alETH"
export const D4_POOL_NAME = "D4"
export const SUSD_METAPOOL_NAME = "sUSD Meta"
export const SUSD_METAPOOL_V2_NAME = "sUSD Meta V2"
export const TBTC_METAPOOL_NAME = "tBTC Meta"
export const TBTC_METAPOOL_V2_NAME = "tBTC Meta V2"
export const WCUSD_METAPOOL_NAME = "wCUSD Meta"
export const WCUSD_METAPOOL_V2_NAME = "wCUSD Meta V2"
export const ARB_USD_POOL_NAME = "arbUSD"
export const USDS_ARB_USD_METAPOOL_NAME = "usds-arbUSDV2 Meta"
export const OPT_USD_POOL_NAME = "optUSD"
export const FRAX_OPT_USD_METAPOOL_NAME = "frax-optUSD"
export const FRAX_ARB_USD_POOL_V2_NAME = "arbUSDV2"
export const FTM_USD_POOL_NAME = "ftmUSD"
export const EVMOS_TESTNET_POOL_NAME = "evmosTestnetUSD"
export const EVMOS_POOL_NAME = "evmosUSD"
export const KAVA_TESTNET_USD_POOL_NAME = "kavaTestnetUSD"
export const TBTC_EVMOS_BTC_METAPOOL_NAME = "tbtc-evmosBTC Meta"
export const NOMAD_BASE_POOL_NAME = "Nomad 3Pool"
export const CELER_BASE_POOL_NAME = "Celer 3Pool"
export const GRAVITY_BASE_POOL_NAME = "Gravity 3Pool"
export const EVMOS_TESTNET_USD_3POOL_NAME1 = "evmosTestnet 3Pool 1"
export const EVMOS_TESTNET_USD_3POOL_NAME2 = "evmosTestnet 3Pool 2"
export const EVMOS_TESTNET_USD_3POOL_NAME3 = "evmosTestnet 3Pool 3"
export const USDC_POOL_NAME = "USDC Pool"
export const USDT_POOL_NAME = "USDT Pool"
export const EVMOS_TESTNET_KUSD_METAPOOL_NAME = "KUSD Metapool"

export const AURORA_FRAX_POOL_NAME = "FRAX Pool"
export const AURORA_DAI_POOL_NAME = "DAI Pool"
export const GOERLI_FRAX_POOL_NAME = "FRAX Pool"
export const GOERLI_DAI_POOL_NAME = "DAI Pool"
export const MANTLE_FRAX_POOL_NAME = "FRAX Pool"
export const MANTLE_DAI_POOL_NAME = "DAI Pool"
export const NEON_FRAX_POOL_NAME = "FRAX Pool"
export const NEON_DAI_POOL_NAME = "DAI Pool"
export const SCROLL_FRAX_POOL_NAME = "FRAX Pool"
export const SCROLL_DAI_POOL_NAME = "DAI Pool"
export const SEPOLIA_FRAX_POOL_NAME = "FRAX Pool"
export const SEPOLIA_DAI_POOL_NAME = "DAI Pool"
export const FRAX_POOL_NAME = "FRAX Pool"
export const DAI_POOL_NAME = "DAI Pool"

export type PoolName =
  | typeof BTC_POOL_NAME
  | typeof BTC_POOL_V2_NAME
  | typeof STABLECOIN_POOL_NAME
  | typeof STABLECOIN_POOL_V2_NAME
  | typeof VETH2_POOL_NAME
  | typeof ALETH_POOL_NAME
  | typeof D4_POOL_NAME
  | typeof SUSD_METAPOOL_NAME
  | typeof SUSD_METAPOOL_V2_NAME
  | typeof TBTC_METAPOOL_NAME
  | typeof TBTC_METAPOOL_V2_NAME
  | typeof WCUSD_METAPOOL_NAME
  | typeof WCUSD_METAPOOL_V2_NAME
  | typeof ARB_USD_POOL_NAME
  | typeof OPT_USD_POOL_NAME
  | typeof FRAX_OPT_USD_METAPOOL_NAME
  | typeof FRAX_ARB_USD_POOL_V2_NAME
  | typeof FTM_USD_POOL_NAME
  | typeof USDS_ARB_USD_METAPOOL_NAME
  | typeof EVMOS_TESTNET_POOL_NAME
  | typeof EVMOS_POOL_NAME
  | typeof KAVA_TESTNET_USD_POOL_NAME
  | typeof TBTC_EVMOS_BTC_METAPOOL_NAME
  | typeof EVMOS_BTC_POOL_NAME
  | typeof NOMAD_BASE_POOL_NAME
  | typeof CELER_BASE_POOL_NAME
  | typeof GRAVITY_BASE_POOL_NAME
  | typeof EVMOS_TESTNET_USD_3POOL_NAME1
  | typeof EVMOS_TESTNET_USD_3POOL_NAME2
  | typeof EVMOS_TESTNET_USD_3POOL_NAME3
  | typeof USDC_POOL_NAME
  | typeof USDT_POOL_NAME
  | typeof DAI_POOL_NAME
  | typeof EVMOS_TESTNET_KUSD_METAPOOL_NAME
  | typeof AURORA_FRAX_POOL_NAME
  | typeof AURORA_DAI_POOL_NAME
  | typeof GOERLI_FRAX_POOL_NAME
  | typeof GOERLI_DAI_POOL_NAME
  | typeof MANTLE_FRAX_POOL_NAME
  | typeof MANTLE_DAI_POOL_NAME
  | typeof NEON_FRAX_POOL_NAME
  | typeof NEON_DAI_POOL_NAME
  | typeof SCROLL_FRAX_POOL_NAME
  | typeof SCROLL_DAI_POOL_NAME
  | typeof SEPOLIA_FRAX_POOL_NAME
  | typeof SEPOLIA_DAI_POOL_NAME
  | typeof FRAX_POOL_NAME
  | typeof DAI_POOL_NAME

export enum ChainId {
  MAINNET = 1,
  AURORA = 1313161555,
  GOERLI = 5,
  MANTLE = 5001,
  NEON = 245022926,
  SCROLL = 534353,
  SEPOLIA = 11155111,
  ROPSTEN = 3,
  // RINKEBY = 4,
  // GÖRLI = 5,
  // KOVAN = 42,
  HARDHAT = 31337,
  ARBITRUM = 42161,
  OPTIMISM = 10,
  FANTOM = 250,
  EVMOS = 9001,
  EVMOS_TESTNET = 9000,
  KAVA_TESTNET = 2221,
}

export const VisibleChainIds = new Set<ChainId>([
  ChainId.MAINNET,
  ChainId.AURORA,
  ChainId.GOERLI,
  ChainId.MANTLE,
  ChainId.NEON,
  ChainId.SCROLL,
  ChainId.SEPOLIA,
])

export enum PoolTypes {
  BTC,
  ETH,
  USD,
  OTHER,
}
const buildAddresses = (
  addresses: Partial<Record<ChainId, string>>,
): Record<ChainId, string> => {
  return Object.keys(ChainId).reduce((acc, id) => {
    const numId = Number(id) as ChainId
    return { ...acc, [numId]: addresses?.[numId] || "" }
  }, {}) as Record<ChainId, string>
}
const buildPids = (
  pids: Partial<Record<ChainId, number>>,
): Record<ChainId, number | null> => {
  // @dev be careful to include pid 0 in this boolean logi
  return Object.keys(ChainId).reduce((acc, id) => {
    const numId = Number(id) as ChainId
    const pid = pids[numId]
    return { ...acc, [numId]: pid == null ? null : pid }
  }, {}) as Record<ChainId, number | null>
}

export class Token {
  readonly addresses: { [chainId in ChainId]: string }
  readonly decimals: number
  readonly symbol: string
  readonly name: string
  readonly geckoId: string
  readonly isSynthetic: boolean
  readonly isLPToken: boolean

  constructor(
    addresses: { [chainId in ChainId]: string },
    decimals: number,
    symbol: string,
    geckoId: string,
    name: string,
    isSynthetic = false,
    isLPToken = false,
  ) {
    this.addresses = addresses
    this.decimals = decimals
    this.symbol = symbol
    this.geckoId = geckoId
    this.name = name
    this.isSynthetic = isSynthetic
    this.isLPToken = isLPToken
  }
}

export const BLOCK_TIME = 13000 // ms

// TODO: Update with mainnet and ropsten addresses
export const PERMISSIONLESS_DEPLOYER_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
})

export const MASTER_REGISTRY_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xc5ad17b98D7fe73B6dD3b0df5b3040457E68C045",
})

export const SYNTHETIX_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
})

export const SYNTHETIX_EXCHANGE_RATES_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xF68ECd50de7733015318361295547D8E939F93E6",
})

export const MINICHEF_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xF68ECd50de7733015318361295547D8E939F93E6",
})

export const BRIDGE_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xa5bD85ed9fA27ba23BfB702989e7218E44fd4706",
})

export const RETROACTIVE_VESTING_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x5DCA270671935cf3dF78bd8373C22BE250198a03",
})

export const SWAP_MIGRATOR_USD_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x9cDeF6e33687F438808766fC133b2E9d1A16AD57",
})

export const GENERALIZED_SWAP_MIGRATOR_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x46866D274E6D9015c5FDc098CE270803e11e3eF4",
})

export const FRAX_BASE_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
  [ChainId.AURORA]: "0xc0b144E78758e3486a3620d36664d671e2Db3208",
  [ChainId.GOERLI]: "0x30BC1187bEc2B71A7247Fc387B81AaE5fbce8F45",
  [ChainId.MANTLE]: "0x6862b571f6461a7c410286854E78B3C54B440BBe",
  [ChainId.NEON]: "0xc0b144E78758e3486a3620d36664d671e2Db3208",
  [ChainId.SCROLL]: "0x6862b571f6461a7c410286854E78B3C54B440BBe",
  [ChainId.SEPOLIA]: "0x7b5599aA5eb6d40E07BBF4d47D75F35053E4A7Be",
})

export const DAI_BASE_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
  [ChainId.AURORA]: "0x92D433526ab0112Caa640E0202C26C8A172b1f17",
  [ChainId.GOERLI]: "0xebE1975186C7D3C712faBb75026CEB3888979aB5",
  [ChainId.MANTLE]: "0x7b5599aA5eb6d40E07BBF4d47D75F35053E4A7Be",
  [ChainId.NEON]: "0xf4635cFB9f8266cbD66c846136365d2a0B77f9ac",
  [ChainId.SCROLL]: "0x7b5599aA5eb6d40E07BBF4d47D75F35053E4A7Be",
  [ChainId.SEPOLIA]: "0xEE589EC00c4320f24fcb2a49d1D5f8f256fBB0f5",
})

export const FRAX_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
  [ChainId.AURORA]: "0x301154A860a4Cfb82824b1e9EbC5F681f6838Bf9",
  [ChainId.GOERLI]: "0xa68c0EE08a62aac7E0b3A2A6b39860A7a339700B",
  [ChainId.MANTLE]: "0x110eD48DC3aFee0Db1Ad4bc5c4eb4e03a47e0c67",
  [ChainId.NEON]: "",
  [ChainId.SCROLL]: "0x110eD48DC3aFee0Db1Ad4bc5c4eb4e03a47e0c67",
  [ChainId.SEPOLIA]: "0x77F4f78Ef07bd767b24080753a7E04ac833e48CF",
})

export const DAI_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
  [ChainId.AURORA]: "0x8A024ca9c2cF83F972AadB260284F4Fc8FF448bf",
  [ChainId.GOERLI]: "0xc3D151076da55FcFf50b9C8009f521B5aaA2E258",
  [ChainId.MANTLE]: "0x77F4f78Ef07bd767b24080753a7E04ac833e48CF",
  [ChainId.NEON]: "0xa6F5dCDD645b87dbc564ed4573555cb62C915d8d",
  [ChainId.SCROLL]: "0x77F4f78Ef07bd767b24080753a7E04ac833e48CF",
  [ChainId.SEPOLIA]: "0xD4D876D33101Df8C1cc900e4858E126E960819DA",
})

export const DAI_SWAP_TOKEN = new Token(
  DAI_SWAP_TOKEN_ADDRESSES,
  18,
  "DAIPool",
  "DAIPool",
  "DynamicStableswap DAI/USDC/USDT",
  false,
  true,
)

export const FRAX_SWAP_TOKEN = new Token(
  FRAX_SWAP_TOKEN_ADDRESSES,
  18,
  "FRAXPool",
  "FRAXPool",
  "DynamicStableswap FRAX/USDC/USDT",
  false,
  true,
)

const DAI_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
  [ChainId.AURORA]: "0xa6a1967bfaDc1E457403310548282F96F6eA5116",
  [ChainId.GOERLI]: "0x030aaf73D87C7Ccfb3cF03bD4E0e84f42eF46e2A",
  [ChainId.MANTLE]: "0xFDf9a91F65ed84A8c4d45409E1573012D06e6a56",
  [ChainId.NEON]: "0xa6a1967bfaDc1E457403310548282F96F6eA5116",
  [ChainId.SCROLL]: "0xFDf9a91F65ed84A8c4d45409E1573012D06e6a56",
  [ChainId.SEPOLIA]: "0x6C7661e66256eaEb3B06d397089cda7C025b61b3",
})

export const FRAX_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
  [ChainId.AURORA]: "0xFC033C2A76EF29F9264deeC78fd18172e3dCFF6f",
  [ChainId.GOERLI]: "0x54388BA0b94C060fA2aFC150c390a6d227454229",
  [ChainId.MANTLE]: "0x6C7661e66256eaEb3B06d397089cda7C025b61b3",
  [ChainId.NEON]: "0xFC033C2A76EF29F9264deeC78fd18172e3dCFF6f",
  [ChainId.SCROLL]: "0x6C7661e66256eaEb3B06d397089cda7C025b61b3",
  [ChainId.SEPOLIA]: "0x973068dF412e84EB19b3B4565cc0EE6D754582Ef",
})

const USDC_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
  [ChainId.AURORA]: "0xF482D3C967A9Bf62eA3f799D98880e70dDAC7A73",
  [ChainId.GOERLI]: "0xBaed1aa90c605cB4e650C03dC4BDbb7f59C207FA",
  [ChainId.MANTLE]: "0x973068dF412e84EB19b3B4565cc0EE6D754582Ef",
  [ChainId.NEON]: "0xF482D3C967A9Bf62eA3f799D98880e70dDAC7A73",
  [ChainId.SCROLL]: "0x973068dF412e84EB19b3B4565cc0EE6D754582Ef",
  [ChainId.SEPOLIA]: "0x01a3473184cc6ffC6Bd4D9c907B0E9Bd6129989d",
})

const USDT_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
  [ChainId.AURORA]: "0xfC0a886f166950E89454867e267F35dB392C1612",
  [ChainId.GOERLI]: "0x76b883409a1451E048E106C46b475fc413664A81",
  [ChainId.MANTLE]: "0x01a3473184cc6ffC6Bd4D9c907B0E9Bd6129989d",
  [ChainId.NEON]: "0xfC0a886f166950E89454867e267F35dB392C1612",
  [ChainId.SCROLL]: "0x01a3473184cc6ffC6Bd4D9c907B0E9Bd6129989d",
  [ChainId.SEPOLIA]: "0x6862b571f6461a7c410286854E78B3C54B440BBe",
})

export const DAI = new Token(DAI_CONTRACT_ADDRESSES, 18, "DAI", "dai", "Dai")

export const USDC = new Token(
  USDC_CONTRACT_ADDRESSES,
  6,
  "USDC",
  "usd-coin",
  "USDC Coin",
)

export const USDT = new Token(
  USDT_CONTRACT_ADDRESSES,
  6,
  "USDT",
  "tether",
  "Tether",
)

export const FRAX = new Token(
  FRAX_CONTRACT_ADDRESSES,
  18,
  "FRAX",
  "frax",
  "Frax",
)

export const CELER = new Token(
  USDT_CONTRACT_ADDRESSES,
  6,
  "USDT",
  "tether",
  "Tether",
)

export const GAUGE_CONTROLLER_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
})

export const HELPER_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
})

export const RETROACTIVE_SDL_MERKLETREE_DATA = buildAddresses({
  [ChainId.MAINNET]: "",
})

export const SDL_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
})

export const SDL_TOKEN = new Token(
  USDT_CONTRACT_ADDRESSES,
  6,
  "SDL",
  "yuh",
  "sdl",
)

export const SPA = buildAddresses({
  [ChainId.MAINNET]: "",
})

export const VETH2_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "",
})

export const FRAX_POOL_TOKENS = [FRAX, USDC, USDT]
export const DAI_POOL_TOKENS = [DAI, USDC, USDT]

export type Pool = {
  name: PoolName
  lpToken: Token
  poolTokens: Token[]
  isSynthetic: boolean
  addresses: { [chainId in ChainId]: string }
  type: PoolTypes
  route: string
  metaSwapAddresses?: { [chainId in ChainId]: string }
  underlyingPoolTokens?: Token[]
  underlyingPool?: PoolName
  isOutdated?: boolean // pool can be outdated but not have a migration target
  rewardPids: { [chainId in ChainId]: number | null }
  isGuarded?: boolean
}
export type PoolsMap = {
  [poolName: string]: Pool
}
export const POOLS_MAP: PoolsMap = {
  [FRAX_POOL_NAME]: {
    name: FRAX_POOL_NAME,
    addresses: FRAX_BASE_SWAP_ADDRESSES,
    lpToken: FRAX_SWAP_TOKEN,
    poolTokens: FRAX_POOL_TOKENS,
    isSynthetic: false,
    type: PoolTypes.USD,
    route: "frax",
    rewardPids: buildPids({}),
  },
  [DAI_POOL_NAME]: {
    name: DAI_POOL_NAME,
    addresses: DAI_BASE_SWAP_ADDRESSES,
    lpToken: DAI_SWAP_TOKEN,
    poolTokens: DAI_POOL_TOKENS,
    isSynthetic: false,
    type: PoolTypes.USD,
    route: "dai",
    rewardPids: buildPids({}),
  },
}

// @dev note that metapools refer to the deposit addresses and not the meta addresses
const minichefPids: Partial<Record<ChainId, { [pool: string]: number }>> = {}

export function getMinichefPid(
  chainId: ChainId,
  poolAddress: string,
): number | null {
  return minichefPids?.[chainId]?.[poolAddress] || null
}

export function getIsLegacySwapABIPoolByAddress(
  chainId: ChainId,
  poolAddress: string,
): boolean {
  const legacyAddresses = [
    BTC_POOL_NAME,
    STABLECOIN_POOL_NAME,
    VETH2_POOL_NAME,
  ].map((name) => POOLS_MAP[name].addresses[chainId])
  return legacyAddresses.includes(poolAddress)
}
export function isLegacySwapABIPool(poolName: string): boolean {
  return new Set([BTC_POOL_NAME, STABLECOIN_POOL_NAME, VETH2_POOL_NAME]).has(
    poolName,
  )
}
export function isMetaPool(poolName = ""): boolean {
  return new Set([
    FRAX_OPT_USD_METAPOOL_NAME,
    SUSD_METAPOOL_NAME,
    SUSD_METAPOOL_V2_NAME,
    TBTC_METAPOOL_NAME,
    TBTC_METAPOOL_V2_NAME,
    USDS_ARB_USD_METAPOOL_NAME,
    WCUSD_METAPOOL_NAME,
    WCUSD_METAPOOL_V2_NAME,
    TBTC_EVMOS_BTC_METAPOOL_NAME,
  ]).has(poolName)
}

// maps a symbol string to a token object
export type TokensMap = {
  [symbol: string]: Token
}

export const TOKENS_MAP = Object.keys(POOLS_MAP).reduce((acc, poolName) => {
  const pool = POOLS_MAP[poolName as PoolName]
  const newAcc = { ...acc }
  pool.poolTokens.forEach((token) => {
    newAcc[token.symbol] = token
  })
  newAcc[pool.lpToken.symbol] = pool.lpToken
  return newAcc
}, {} as TokensMap)

export type TokenToPoolsMap = {
  [tokenSymbol: string]: string[]
}
export const TOKEN_TO_POOLS_MAP = Object.keys(POOLS_MAP).reduce(
  (acc, poolName) => {
    const pool = POOLS_MAP[poolName as PoolName]
    const newAcc = { ...acc }
    pool.poolTokens.forEach((token) => {
      newAcc[token.symbol] = (newAcc[token.symbol] || []).concat(
        poolName as PoolName,
      )
    })
    return newAcc
  },
  {} as TokenToPoolsMap,
)

export const TRANSACTION_TYPES = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW",
  SWAP: "SWAP",
  MIGRATE: "MIGRATE",
  STAKE_OR_CLAIM: "STAKE_OR_CLAIM",
}

export const POOL_FEE_PRECISION = 10

export enum SWAP_TYPES {
  DIRECT = "swapDirect", // route length 2
  SYNTH_TO_SYNTH = "swapSynthToSynth", // route length 2
  SYNTH_TO_TOKEN = "swapSynthToToken", // route length 3
  TOKEN_TO_SYNTH = "swapTokenToSynth", // route length 3
  TOKEN_TO_TOKEN = "swapTokenToToken", // route length 4
  INVALID = "invalid",
}

export function getIsVirtualSwap(swapType: SWAP_TYPES): boolean {
  return (
    swapType === SWAP_TYPES.SYNTH_TO_SYNTH ||
    swapType === SWAP_TYPES.SYNTH_TO_TOKEN ||
    swapType === SWAP_TYPES.TOKEN_TO_SYNTH ||
    swapType === SWAP_TYPES.TOKEN_TO_TOKEN
  )
}

export const SWAP_CONTRACT_GAS_ESTIMATES_MAP = {
  [SWAP_TYPES.INVALID]: BigNumber.from("999999999"), // 999,999,999
  [SWAP_TYPES.DIRECT]: BigNumber.from("200000"), // 157,807
  [SWAP_TYPES.TOKEN_TO_TOKEN]: BigNumber.from("2000000"), // 1,676,837
  [SWAP_TYPES.TOKEN_TO_SYNTH]: BigNumber.from("2000000"), // 1,655,502
  [SWAP_TYPES.SYNTH_TO_TOKEN]: BigNumber.from("1500000"), // 1,153,654
  [SWAP_TYPES.SYNTH_TO_SYNTH]: BigNumber.from("700000"), // 681,128 // TODO: https://github.com/saddle-finance/saddle-frontend/issues/471
  addLiquidity: BigNumber.from("400000"), // 386,555
  removeLiquidityImbalance: BigNumber.from("350000"), // 318,231
  removeLiquidityOneToken: BigNumber.from("250000"), // 232,947
  migrate: BigNumber.from("650000"), // 619,126
  virtualSwapSettleOrWithdraw: BigNumber.from("400000"),
}

export interface WalletInfo {
  name: string
  icon: string
  connector: AbstractConnector
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  // TALLY: {
  //   name: "Tally",
  //   icon: tallyIcon,
  //   connector: injectedTallyProvider,
  // },
  METAMASK: {
    name: "MetaMask",
    icon: metamaskIcon,
    connector: injectedMetaMaskProvider,
  },
  // UNSTOPPABLE_DOMAINS: {
  //   name: "Unstoppable Domains",
  //   icon: unstoppableDomainsLogo,
  //   connector: uauth,
  // },
  // WALLET_CONNECT: {
  //   name: "WalletConnect",
  //   icon: walletconnectIcon,
  //   connector: walletconnect,
  // },
  // WALLET_LINK: {
  //   name: "Coinbase Wallet",
  //   icon: coinbasewalletIcon,
  //   connector: walletlink,
  // },
}

// derived from https://docs.synthetix.io/tokens/list/
export const SYNTHETIX_TOKENS: { [chainId in ChainId]?: string[] } = {
  [ChainId.MAINNET]: [
    "0xd2df355c19471c8bd7d8a3aa27ff4e26a21b4076", // Aave (sAAVE)
    "0xf48e200eaf9906362bb1442fca31e0835773b8b4", // Australian Dollars (sAUD)
    "0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6", // Bitcoin (sBTC)
    "0xe36e2d3c7c34281fa3bc737950a68571736880a1", // Cardano (sADA)
    "0xbbc455cb4f1b9e4bfc4b73970d360c8f032efee6", // Chainlink (sLINK)
    "0xe1afe1fd76fd88f78cbf599ea1846231b8ba3b6b", // DeFi Index (sDEFI)
    "0x104edf1da359506548bfc7c25ba1e28c16a70235", // ETH / BTC (sETHBTC)
    "0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb", // Ether (sETH)
    "0xd71ecff9342a5ced620049e616c5035f1db98620", // Euros (sEUR)
    "0xf6b1c627e95bfc3c1b4c9b825a032ff0fbf3e07d", // Japanese Yen (sJPY)
    "0x1715ac0743102bf5cd58efbb6cf2dc2685d967b6", // Polkadot (sDOT)
    "0x97fe22e7341a0cd8db6f6c021a24dc8f4dad855f", // Pound Sterling (sGBP)
    "0x269895a3df4d73b077fc823dd6da1b95f72aaf9b", // South Korean Won (sKRW)
    "0x0f83287ff768d1c1e17a42f44d644d7f22e8ee1d", // Swiss Franc (sCHF)
    "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f", // Synthetix (SNX)
    "0x57ab1ec28d129707052df4df418d58a2d46d5f51", // US Dollars (sUSD)
  ],
  [ChainId.HARDHAT]: [
    "0x0e801d84fa97b50751dbf25036d067dcf18858bf", // susd
    "0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6", // sbtc
    "0x67d269191c92caf3cd7723f116c85e6e9bf55933", // seth
  ],
}

// "SADDLE" in bytes32 form
export const SYNTH_TRACKING_ID =
  "0x534144444c450000000000000000000000000000000000000000000000000000"

// FLAGS
export const IS_VIRTUAL_SWAP_ACTIVE = false
export const IS_L2_SUPPORTED = true
export const IS_SDL_LIVE = false
// FLAGS END

// Regex for readable decimal number
export const readableDecimalNumberRegex = /^[0-9]*[.,]?[0-9]*$/
