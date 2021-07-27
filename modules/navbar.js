import Link from 'next/link';

export default function Navbar(){
    return (
        <div className="flex p-2 m-4">
            <Link href="/blog">
                <h1>TEST</h1>
            </Link>
        </div>
        
    )
}
