import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="flex flex-col justify-center">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="h-screen w-screen">
                <div className="relative z-10 top-0 left-0 welcome-page h-screen w-screen">

                </div>
                    <div className="absolute top-0 z-40 welcome-container flex flex-col items-center w-screen h-screen ">
                        <div className="flex flex-col justify-end w-screen h-screen ">
                            <div style={{height: '40vh', borderTopWidth: '5px'}} className="flex flex-col items-center justify-center bg-white bg-opacity-90 border-green-600">
                                <h1 className="my-8 text-5xl">
                                    Welcome
                                </h1>
                                <p className="my-8 text-2xl">
                                    This tool will guide you through all the steps of picking each component of your camera system that best fits your needs
                                </p>
                                <div className="my-8">
                                    <Link href="/guide">
                                        <a className="py-3 px-10 bg-green-600 text-xl rounded text-white transition-colors duration-300 ease hover:bg-green-500">
                                            Get started
                                        </a>
                                    </Link>
                                </div>
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
