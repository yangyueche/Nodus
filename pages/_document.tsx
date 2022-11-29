import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Document() {
  return (
    <Html className="h-full bg-gray-50">
      <Head />
      <body className="h-full">
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
