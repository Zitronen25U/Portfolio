import Head from 'next/head'
import Navbar from './navbar'

export default function Header() {

    return(
        <div>

            <Head>
                <title>Brian's Portfolio</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <header>
                <Navbar />
            </header>
        </div>
    )
}