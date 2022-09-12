import { AppProps } from 'next/app'
import '../styles/index.css'
import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <NextNProgress
      color="#29D"
    />
    <Component {...pageProps} />
  </>
}
