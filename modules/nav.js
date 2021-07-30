
import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <header className="flex items-center w-full h-16 p-6 bg-blue-500 justify-left drop-shadow-md">
      
                <nav className="flex items-center justify-end w-full ">

                    <Link href="/index" onClick={() => window.location.reload()}>
                        <a target='_blank' className="p-2 ml-2 mr-2 text-lg font-semibold text-gray-900 transition-colors hover:text-blue-200 hover:border border-gray-50">Home</a>
                    </Link>
                   
                    <Link href="/about">
                        <a className="ml-2 mr-2 text-lg text-gray-900 transition-colors hover:text-blue-200">About us</a>
                    </Link>
                    <Link href="https://github.com/Online-Rubric">
                        <button className="p-2 ml-4 text-blue-100 transition-colors border-2 border-gray-900 hover:border-blue-200 hover:text-gray-900 drop-shadow" target="_blank">See on Github</button>
                    </Link>
                    {/* <a className="ml-2 text-lg" href="/api/auth/logout">Logout</a> */}
                </nav>
            </header>
            
        </>
    )

}