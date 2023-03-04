import { ChainId } from "./index"
import { hexlify } from "@ethersproject/bytes"

export const NETWORK_LABEL: Partial<Record<ChainId, string>> = {
  [ChainId.MAINNET]: "Ethereum",
  [ChainId.AURORA]: "AURORA",
  [ChainId.GOERLI]: "ETH",
  [ChainId.MANTLE]: "MNTL",
  [ChainId.NEON]: "NEON",
  [ChainId.SCROLL]: "ETH",
  [ChainId.SEPOLIA]: "ETH",
}

// TODO: figure out better way of representing non-erc20 native tokens
export const NETWORK_NATIVE_TOKENS: Record<ChainId, string> = {
  [ChainId.MAINNET]: "ETH",
  [ChainId.AURORA]: "AURORA",
  [ChainId.GOERLI]: "ETH",
  [ChainId.MANTLE]: "MNTL",
  [ChainId.NEON]: "NEON",
  [ChainId.SCROLL]: "ETH",
  [ChainId.SEPOLIA]: "ETH",
  [ChainId.ARBITRUM]: "ETH",
  [ChainId.OPTIMISM]: "ETH",
  [ChainId.FANTOM]: "FTM",
  [ChainId.ROPSTEN]: "ETH",
  [ChainId.EVMOS]: "EVMOS",
  [ChainId.EVMOS_TESTNET]: "tEVMOS",
  [ChainId.KAVA_TESTNET]: "KAVA",
  [ChainId.HARDHAT]: "ETH",
}

export type SupportedNetworks = {
  [chainId in ChainId]?: {
    chainId: string
    chainName: string
    nativeCurrency: {
      name: string
      symbol: string
      decimals: number
    }
    rpcUrls: string[]
    blockExplorerUrls: string[]
  }
}

// refer to https://github.com/sushiswap/sushiswap-interface/blob/canary/src/modals/NetworkModal/index.tsx#L13
export const SUPPORTED_NETWORKS: SupportedNetworks = {
  [ChainId.MAINNET]: {
    chainId: "0x1",
    chainName: "Ethereum",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.infura.io/v3/e1d8c78f9f6f487f935f7a41e7e9d33a"],
    blockExplorerUrls: ["https://etherscan.com"],
  },
  [ChainId.AURORA]: {
    chainId: "0x4E454153",
    chainName: "Aurora Testnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    rpcUrls: ["https://testnet.aurora.dev/"],
    blockExplorerUrls: ["https://evm.evmos.dev"],
  },
  [ChainId.GOERLI]: {
    chainId: "0x5",
    chainName: "goerli",
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    rpcUrls: ["https://goerli.infura.io/v3/e1d8c78f9f6f487f935f7a41e7e9d33a"],
    blockExplorerUrls: ["https://evm.evmos.dev"],
  },
  [ChainId.MANTLE]: {
    chainId: "0x1389",
    chainName: "Mantle Testnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.testnet.mantle.xyz"],
    blockExplorerUrls: ["https://evm.evmos.dev"],
  },
  [ChainId.NEON]: {
    chainId: "0xE9AC0CE",
    chainName: "Neon EVM Devnet",
    nativeCurrency: {
      name: "NEON",
      symbol: "NEON",
      decimals: 18,
    },
    rpcUrls: ["https://devnet.neonevm.org"],
    blockExplorerUrls: ["https://evm.evmos.dev"],
  },
  [ChainId.SCROLL]: {
    chainId: "0x82751",
    chainName: "Scroll L2 Alpha",
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    rpcUrls: ["https://alpha-rpc.scroll.io/l2"],
    blockExplorerUrls: ["https://evm.evmos.dev"],
  },
  [ChainId.SEPOLIA]: {
    chainId: "0xAA36A7",
    chainName: "Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "eth",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.infura.io/v3/e1d8c78f9f6f487f935f7a41e7e9d33a"],
    blockExplorerUrls: ["https://evm.evmos.dev"],
  },
}

export const DEV_SUPPORTED_NETWORKS: SupportedNetworks = {
  ...SUPPORTED_NETWORKS,
}
