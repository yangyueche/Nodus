import '../styles/globals.css'
import type { AppProps } from 'next/app'

// The Component prop is the active page, so whenever you navigate between routes, Component will change to the new page. Therefore, any props you send to Component will be received by the page.

// pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
