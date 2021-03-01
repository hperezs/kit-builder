import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1 px-20 text-center">
        <h1 className="mt-20 text-5xl">
          Welcome
        </h1>

        <p className="mt-10 text-xl">
          This page will guide you through all the steps of picking each component of your camera system that best fits your needs
        </p>

        <div className="mt-10">
          <Link href="/guide">
            <a className="flex-none p-3 text-lg rounded border border-green-700 text-green-700 transition-colors hover:bg-green-600 hover:text-white">
              Get started
            </a>
          </Link>
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
