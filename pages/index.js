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

            <main className="relative h-screen w-screen">
                <div className="absolute z-10 top-0 left-0 welcome-page h-screen w-screen">

                </div>
                <div className="absolute top-0 left-0 z-20 welcome-container flex flex-col items-center bg-white h-screen bg-opacity-95 p-10 w-6/12 xl:w-4/12">
                    <div className="flex flex-col items-center " style={{width: '500px'}}>
                        <h1 className="mt-20 mb-10 text-5xl">
                            Welcome
                        </h1>
                        <p className="mt-5 text-xl">
                            This tool will guide you through all the steps of picking each component of your camera system that best fits your needs
                        </p>
                        <div className="mt-14">
                            <Link href="/guide">
                                <a className="flex-none p-3 text-lg rounded border border-green-700 text-green-700 bg-gray-50 transition-colors hover:bg-green-600 hover:text-white">
                                    Get started
                                </a>
                            </Link>
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
      </footer> */} </div>
    )
}
