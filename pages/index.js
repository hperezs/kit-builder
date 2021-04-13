import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const handleClick = () => {
    document.getElementById('animation-container').classList.remove('hidden');
    document.getElementById('animation-container').addEventListener('animationend', () => {document.getElementById('get-started-link').click()});
    document.getElementById('animation-container').classList.add('out-wipe-right');
    
}

export default function Home() {
    return (
        <div className="flex flex-col justify-center">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="h-screen w-screen">
                <div id="animation-container" className="fixed top-0 h-screen w-screen z-50 bg-green-600 hidden"></div>

                <div className="relative z-10 top-0 left-0 welcome-page h-screen w-screen"></div>
                    <div className="absolute top-0 z-40 welcome-container flex flex-col items-center w-screen h-screen ">
                        <div className="flex flex-col justify-end w-screen h-screen ">
                            <div style={{height: '40vh', borderTopWidth: '5px'}} className="flex flex-col items-center justify-center bg-white bg-opacity-90 border-green-600">
                                <h1 className="my-8 text-5xl">
                                    Welcome
                                </h1>
                                <p className="my-8 text-2xl">
                                    We will guide you through all of the steps of picking each component for your surveillance system so that it best fits your needs
                                </p>
                                
                                <a onClick={handleClick} className="py-3 px-10 bg-green-600 text-xl rounded text-white transition-colors duration-300 ease hover:bg-green-500 my-8 cursor-pointer">
                                    Get started
                                </a>
                                

                                <Link href="/guide"><span className="-z-50" id='get-started-link'>get started link</span></Link>
                            </div>

                        </div>
                    </div>
            </main>

            {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */} 
      </div>
    )
}
