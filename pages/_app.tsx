import "../styles/globals.css"
import "@/styles/hideScrollbar.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import React from "react"
import { useState } from "react"
import { Header } from "@/components/generals/Header"
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material"
import { Footer } from "@/components/generals/Footer"

const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          boxSizing: "content-box",
          padding: 3,
          fontSize: "1.125rem"
        }
      }
    }
  }
})
function MyApp({ Component, pageProps }: AppProps) {
  const topRef = React.createRef<HTMLDivElement>()
  const router = useRouter()
  const { keywords } = router.query
  const [keywordsArr, setKeywords] = useState<string>(
    (keywords as unknown as string | undefined) || ""
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="scrollbar__hide" style={{ backgroundColor: "#fafafa" }}>
        <div ref={topRef}></div>
        <Header keywords={keywordsArr} setKeywords={setKeywords} />
        <div>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
MyApp.getInitialProps = async () => ({ pageProps: {} })

export default MyApp
