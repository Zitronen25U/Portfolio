import 'tailwindcss/tailwind.css'
import Head from '../modules/head'
import Nav from '../modules/nav'

function MyApp({ Component, pageProps }) {
  return (

    <div className="App">

      <Head />
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
