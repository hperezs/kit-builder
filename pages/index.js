import { bottom } from '@popperjs/core';
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
            document.getElementById('background-image').classList.remove('welcome-banner-loading');
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
                <meta property="og:title" content="CCTV Kit Builder" key="title" />
                <meta description="Build your own complete CCTV Kit, including cameras, video recorder, cables, hard drives, and other accessories. We guide you through the complexity of picking the right components of your system with short simple steps."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className=" relative h-screen w-screen">
                <div id="animation-container" style={{backgroundColor: '#438241'}} className="fixed top-0 z-50 h-screen w-screen hidden">
                    <div style={{top: '50%', right: '50%', transform: 'translate(50%, -50%)'}} className="absolute" >
                        <NextImage src="/images/BS_Logo_White.png" width={375} height={100} priority={true}/>
                    </div>
                </div>
                
                {/* Banner */}
                <div id="background-image" className="welcome-banner welcome-banner-loading relative flex justify-start z-10 w-screen transition-filter duration-1000 ease"></div>
                <div style={{width: '35%', maxWidth: '850px'}} className="page-title flex flex-col absolute top-0 left-0 items-center justify-center z-20 bg-green-700 bg-opacity-80">
                    <h1 className="text-7xl uppercase font-semibold p-10 text-gray-100">CCTV Kit <br/> Builder</h1>
                </div>
                
                {/* Welcome section */}
                <section className="welcome-container flex flex-col items-center w-screen border-b border-gray-300">
                    <div className="flex flex-col justify-end w-screen ">
                        <div style={{borderTopWidth: '5px'}} className="flex flex-col items-center justify-start border-green-600">
                            <h2 className="mb-8 mt-20 text-5xl">
                                Welcome
                            </h2>
                            <p style={{maxWidth: '900px'}} className="my-8 text-2xl text-center w-7/12">
                                We will guide you through all of the steps of choosing each component for your surveillance system so that it best fits your needs
                            </p>
                            <a style={{paddingBottom: '14px', paddingRight: '41px'}} onClick={handleClick} className="py-3 px-10 text-white border bg-green-700 bg-opacity-90 text-3xl rounded text-white text-center align-middle transition-colors duration-300 ease hover:bg-green-500 my-8 cursor-pointer">
                                Get started
                            </a>
                            <Link href="/guide"><span className="-z-50 opacity-0" id='get-started-link'>get started link</span></Link>
                        </div>
                    </div>
                </section>
                
                {/* How it works section */}
                <section className="mx-20 my-40 p-10 flex justify-center">
                    <div style={{maxWidth: '600px'}} className="mt-10">
                        <h3 className="text-3xl mb-8">How it works</h3>   
                        <p className="text-xl">We have applied our years of expertise and simplified the complexity of building a surveillance system. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div style={{height: '400px', width: '600px'}} className="ml-20"> 
                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                            <NextImage
                                src={"/images/kit-builder.png"}
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                            />
                        </div>
                    </div>
                </section>

                <section className="my-20 py-20 border-t border-b shadow border-gray-300">
                    <h3 className="text-center text-3xl mb-10">What's included</h3>
                    <p className="text-xl text-center">We make sure you don't miss any of the essentials components to cover all the requirements of your system.</p>
                    <div className="flex justify-center">
                        <div className="flex justify-center mt-20 md:w-10/12 lg:w-8/12 xl:w-10/12 flex-wrap">
                            <div className="flex flex-col justify-center items-center mx-7 my-4">
                                <div style={{height: '76px', width: '110px'}}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <NextImage
                                            src={'/images/camera.png'}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={100}
                                        />
                                    </div>
                                </div>
                                <div className="text-xl font-light mt-7">Cameras</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mx-7 my-4">
                                <div style={{height: '76px', width: '110px'}}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <NextImage
                                            src={'/images/nvr.png'}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={100}
                                        />
                                    </div>
                                </div>
                                <div className="text-xl font-light mt-7">Video Recorder</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mx-7 my-4">
                                <div style={{height: '76px', width: '110px'}}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <NextImage
                                            src={'/images/hardDrive.png'}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={100}
                                        />
                                    </div>
                                </div>
                                <div className="text-xl font-light mt-7">Hard Drive</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mx-7 my-4">
                                <div style={{height: '76px', width: '110px'}}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <NextImage
                                            src={'/images/ethernet.png'}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={100}
                                        />
                                    </div>
                                </div>
                                <div className="text-xl font-light mt-7">Cables</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mx-7 my-4">
                                <div className="p-3" style={{height: '76px', width: '110px'}}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <NextImage
                                            src={'/images/mount.png'}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={100}
                                        />
                                    </div>
                                </div>
                                <div className="text-xl font-light mt-7">Mounts</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mx-7 my-4">
                                <div style={{height: '76px', width: '110px'}}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <NextImage
                                            src={'/images/monitor.png'}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={100}
                                        />
                                    </div>
                                </div>
                                <div className="text-xl font-light mt-7">Monitor</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mx-7 my-4">
                                <div style={{height: '76px', width: '110px'}}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <NextImage
                                            src={'/images/poe.png'}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={100}
                                        />
                                    </div>
                                </div>
                                <div className="text-xl font-light mt-7">Power Injectors</div>
                            </div>
                            <div className="flex flex-col justify-center items-center mx-7 my-4">
                                <div style={{height: '76px', width: '110px'}}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <NextImage
                                            src={'/images/installation_icon.png'}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={100}
                                        />
                                    </div>
                                </div>
                                <div className="text-xl font-light mt-7">Installation</div>
                            </div>
                        </div>
                    
                    </div>
                    
                </section>

                {/* Why backstreet? */}
                <section className="mx-20 my-40 p-10 flex justify-center">
                    <div style={{height: '400px', width: '600px'}} className="mr-20"> 
                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                            <NextImage
                                src={"/images/why_backstreet.png"}
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                            />
                        </div>
                    </div>
                    <div style={{maxWidth: '600px'}} className="mt-10">
                        <h3 className="text-3xl mb-8">Why purchase from Backstreet?</h3>   
                        <p className="text-xl">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </section>

                <section className="h-screen">

                </section>
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
