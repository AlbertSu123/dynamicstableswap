import { ChainId } from "../constants"

export function getMultichainScanLink(
  chainId: ChainId,
  data: string,
  type: "tx" | "token" | "address" | "block" | "txs",
): string {
  let chainScanBaseName = "etherscan.io"
  switch (chainId) {
    case ChainId.MAINNET:
      chainScanBaseName = "etherscan.io"
      break
    case ChainId.ARBITRUM:
      chainScanBaseName = "arbiscan.io"
      break
    case ChainId.FANTOM:
      chainScanBaseName = "ftmscan.io"
      break
    case ChainId.OPTIMISM:
      chainScanBaseName = "optimistic.etherscan.io"
      break
    case ChainId.EVMOS:
      chainScanBaseName = "evm.evmos.org"
      break
    case ChainId.EVMOS_TESTNET:
      chainScanBaseName = "evm.evmos.dev"
      break
    case ChainId.KAVA_TESTNET:
      chainScanBaseName = "evm-alpha.kava.io"
      break
    default:
      chainScanBaseName = "etherscan.io"
  }

  return `https://${chainScanBaseName}/${type}/${data}`
}

export function getEtherscanLink(
  data: string,
  type: "tx" | "token" | "address" | "block",
): string {
  return `https://etherscan.io/${type}/${data}`
}
