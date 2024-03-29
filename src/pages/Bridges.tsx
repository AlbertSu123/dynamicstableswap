import {
  Container,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import React, { ReactElement } from "react"
import { useTranslation } from "react-i18next"

interface Bridge {
  name: string
  bridge_url: string
  web_url: string
  logo: string
}

function Bridges(): ReactElement {
  const imgDir = "./bridges/"
  const theme = useTheme()
  const { t } = useTranslation()

  const bridges: Bridge[] = [
    {
      name: "Celer Network",
      bridge_url: "https://cbridge.celer.network/#/transfer",
      web_url: "https://www.celer.network/",
      logo: "celer.png",
    },
    {
      name: "Nomad",
      bridge_url: "https://app.nomad.xyz/",
      web_url: "https://www.nomad.xyz/",
      logo: "nomad.png",
    },
    {
      name: "Axelar",
      bridge_url: "https://satellite.axelar.network/",
      web_url: "https://axelar.network/",
      logo: "axelar.jpg",
    },
    {
      name: "Gravity Bridge",
      bridge_url: "https://spacestation.zone/",
      web_url: "https://www.gravitybridge.net/",
      logo: "gravity.jpg",
    },
  ]

  return (
    <Container
      sx={{
        width: "100%",
        minHeight: "80vh",
        paddingBottom: "10vh",
        marginTop: "50px",
      }}
    >
      <Grid container spacing={4}>
        {bridges.map((bridge) => {
          const { name, bridge_url, web_url, logo } = bridge
          return (
            <Grid item key={name} xs={12} md={6}>
              <Typography variant="h3" marginBottom="10px">
                {name}
              </Typography>
              <Paper
                className="content"
                sx={{
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "25px",
                }}
              >
                <img
                  src={imgDir + logo}
                  width={80}
                  height={80}
                  alt={name + " logo"}
                />
                <Stack direction={"row"} spacing={1}>
                  <Link href={web_url} target="_blank" rel="noreferrer">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1000 1000"
                      width={20}
                      height={20}
                    >
                      <g>
                        <path
                          fill="#fff"
                          d="M500,10c-0.1,0-0.3,0-0.4,0c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4,0-0.6,0C228.7,10.6,10,229.8,10,500c0,270.2,218.7,489.3,488.8,490c0.2,0,0.4,0,0.6,0c0.1,0,0.1,0,0.2,0c0.2,0,0.3,0,0.4,0c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M519.6,303.2c51.9-1.4,102.5-8.3,151.2-20.1c14.7,57.8,23.8,124.3,25.2,197.3H519.6V303.2z M519.6,264V52.3c52.8,14.6,106.4,85.1,140.5,193.1C614.8,256.3,567.9,262.7,519.6,264z M480.4,51.8V264c-48.7-1.4-96-7.8-141.6-19C373.2,136.4,427.2,65.7,480.4,51.8z M480.4,303.2v177.2H302.8c1.4-73.1,10.6-139.7,25.2-197.5C377.1,294.9,428,301.8,480.4,303.2z M263.3,480.4H49.7c4.3-100.8,41.9-193.1,102-266.2c43.6,24,89.9,43.7,138.4,58.4C274.3,335.1,264.8,405.6,263.3,480.4z M263.3,519.6c1.4,74.8,10.9,145.2,26.8,207.8c-48.5,14.7-94.8,34.4-138.4,58.5C91.6,712.7,54,620.4,49.7,519.6H263.3L263.3,519.6z M302.8,519.6h177.6v177C428,698,377.1,705,328,717C313.3,659.2,304.2,592.6,302.8,519.6z M480.4,735.7v212.4c-53.2-13.9-107.3-84.7-141.7-193.5C384.4,743.6,431.7,737.1,480.4,735.7z M519.6,947.7v-212c48.3,1.4,95.2,7.8,140.5,18.7C626,862.5,572.5,933.1,519.6,947.7z M519.6,696.6v-177H696c-1.4,72.9-10.5,139.4-25.2,197.1C622.1,704.8,571.6,698,519.6,696.6z M735.4,519.6h214.9c-4.3,100.8-41.8,193.1-101.9,266.2c-44-24.2-90.7-44-139.6-58.8C724.5,664.5,734,594.2,735.4,519.6z M735.4,480.4c-1.4-74.7-10.9-145.1-26.7-207.6c48.9-14.8,95.6-34.6,139.5-58.8c60.2,73.1,97.7,165.5,102.1,266.3L735.4,480.4L735.4,480.4z M821.2,184.1c-39,20.7-80.2,37.9-123.1,50.9C675.2,161.3,643,101.1,605,61.6C688.4,81.7,762.9,124.8,821.2,184.1z M393.5,62c-37.8,39.4-69.9,99.3-92.7,172.7c-42.6-13-83.4-30-122-50.6C236.7,125.2,310.6,82.2,393.5,62z M178.6,815.7c38.7-20.6,79.5-37.6,122.1-50.6c22.8,73.4,54.9,133.4,92.7,172.9C310.6,917.8,236.6,874.7,178.6,815.7z M604.9,938.3c38.1-39.5,70.3-99.7,93.2-173.6c43,13.1,84.2,30.2,123.2,51C763,875.1,688.5,918.3,604.9,938.3z"
                        />
                      </g>
                    </svg>
                  </Link>
                  <Link
                    href={bridge_url}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: theme.palette.primary.light,
                    }}
                  >
                    {t("bridge") + " "}
                    <Typography
                      variant={"h5"}
                      style={{
                        display: "inline",
                        color: theme.palette.primary.main,
                      }}
                    >
                      ↗
                    </Typography>
                  </Link>
                </Stack>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Bridges
