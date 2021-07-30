// import Nav from '../modules/nav';
import Footer from '../modules/footer';
// import Head from '../modules/head';


export default function Home() {
  return (
    <>
      {/* <Head />
      <Nav /> */}

      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-400">
        
        <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
          <div>
            <div>LANDING PAGE</div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
