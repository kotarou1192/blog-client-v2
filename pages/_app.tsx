import "../styles/globals.css"
import "@/styles/hideScrollbar.css"
import type { AppProps } from "next/app"
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
MyApp.getInitialProps = async () => ({ pageProps: {} })

export default MyApp
