import { AppDispatch } from "../state"
import retry from "async-retry"
import { updateSwapStats } from "../state/application"

const swapStatsURI = "https://kns-data-up.s3.us-west-1.amazonaws.com/data.json"

export interface SwapStatsReponse {
  [swapAddress: string]: {
    oneDayVolume: number
    APY: number
    TVL: number
  }
}

const fetchSwapStatsNow = (): Promise<SwapStatsReponse> =>
  fetch(`${swapStatsURI}`, { cache: "no-cache" })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json()
      }
      throw new Error("Unable to fetch swap stats from IPFS")
    })
    .then((body: SwapStatsReponse) => {
      // for (const i in body) {
      //   body[i.toLowerCase()] = body[i]
      //   delete body[i]
      // }
      return body
    })

export default async function fetchSwapStats(
  dispatch: AppDispatch,
): Promise<void> {
  const dispatchUpdate = (swapStats: SwapStatsReponse) => {
    dispatch(updateSwapStats(swapStats))
  }
  await retry(() => fetchSwapStatsNow().then(dispatchUpdate), {
    retries: 3,
  })
}
