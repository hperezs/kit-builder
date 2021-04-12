import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center text-center">
        <div>
          <div className="mb-10 w-screen h-screen"> 
            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                <Image
                    src='/images/KitBuilderWelcomeBanner.png'
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                />
            </div>
          </div>

          <h1 className="mt-20 mb-10 text-5xl">
            Welcome
          </h1>
                  
          <p className=" text-xl">
            This tool will guide you through all the steps of picking each component of your camera system that best fits your needs
          </p>

          <div className="mt-20">
            <Link href="/guide">
              <a className="flex-none p-3 text-lg rounded border border-green-700 text-green-700 transition-colors hover:bg-green-600 hover:text-white">
                Get started
              </a>
            </Link>
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
