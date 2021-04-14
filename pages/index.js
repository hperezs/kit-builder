import Head from 'next/head'
import NextImage from 'next/image';
import Link from 'next/link'
import {useEffect} from 'react'

export default function Home() {
    useEffect(() => {
        let backgroundImage = new Image();
        backgroundImage.onload = () => {
            console.log('image loaded');    
            document.getElementById('background-image').style.backgroundImage = 'url(' + backgroundImage.src + ')';
            document.getElementById('background-image').classList.remove('welcome-page-loading');
        }
        backgroundImage.src = '../images/welcome-background.jpg';
    }, [])
    
    const handleClick = () => {
        document.getElementById('animation-container').classList.remove('hidden');
        document.getElementById('animation-container').addEventListener('animationend', () => {document.getElementById('get-started-link').click()});
        document.getElementById('animation-container').classList.add('out-wipe-right');
    }

    return (
        <div className="flex flex-col justify-center">
            <Head>
                <title>CCTV Kit Builder</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="h-screen w-screen">
                <div id="animation-container" className="fixed top-0 h-screen w-screen z-50 bg-green-600 hidden">
                    <div style={{top: '50%', right: '50%', transform: 'translate(50%, -50%)'}} className="absolute" >
                        <NextImage src="/images/BS_Logo_White.png" width={500} height={133.5} />
                    </div>
                </div>
                
                <div id="background-image" className="relative z-10 top-0 left-0 welcome-page welcome-page-loading h-screen w-screen transition-filter duration-1000 ease"></div>
                
                <div className="absolute top-0 z-40 welcome-container flex flex-col items-center w-screen h-screen ">
                    <div className="flex flex-col justify-end w-screen h-screen ">
                        <div style={{minHeight: '40vh', borderTopWidth: '5px'}} className="flex flex-col items-center justify-center bg-white bg-opacity-90 border-green-600">
                            <h1 className="my-8 text-5xl">
                                Welcome
                            </h1>
                            <p className="my-8 text-2xl text-center w-7/12">
                                We will guide you through all of the steps of picking each component for your surveillance system so that it best fits your needs
                            </p>
                            
                            <a onClick={handleClick} className="py-3 px-10 bg-green-600 text-xl rounded text-white transition-colors duration-300 ease hover:bg-green-500 my-8 cursor-pointer">
                                Get started
                            </a>
                            

                            <Link href="/guide"><span className="-z-50 opacity-0" id='get-started-link'>get started link</span></Link>
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
