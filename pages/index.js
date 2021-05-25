import Head from 'next/head'
import NextImage from 'next/image';
import Link from 'next/link'
import React, {useEffect} from 'react'
import ReactGa from 'react-ga'

export default function Home() {
    //  Google Analytics
    useEffect(() => {
         ReactGa.initialize("UA-195816848-1");
         ReactGa.pageview(window.location.pathname + window.location.search);
    }, [])

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
                <title>Build the Perfect Surveillance System | Backstreet Surveillance</title>
                <meta name="title" content="Build the Perfect Surveillance System"/>
                <meta name="description" content="Build your own complete CCTV Kit, including cameras, video recorder, cables, hard drives, and other accessories in minutes. We guide you through the complexity of picking the right components of your system with short simple steps."/>

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.cctvkitbuilder.com/"/>
                <meta property="og:title" content="Build the Perfect Surveillance System"/>
                <meta property="og:description" content="Build your own complete CCTV Kit, including cameras, video recorder, cables, hard drives, and other accessories in minutes. We guide you through the complexity of picking the right components of your system with short simple steps."/>
                <meta property="og:image" content="https://www.cctvkitbuilder.com/images/meta-data-picture.PNG"/>

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://www.cctvkitbuilder.com/"/>
                <meta property="twitter:title" content="Build the Perfect Surveillance System"/>
                <meta property="twitter:description" content="Build your own complete CCTV Kit, including cameras, video recorder, cables, hard drives, and other accessories in minutes. We guide you through the complexity of picking the right components of your system with short simple steps."/>
                <meta property="twitter:image" content="https://www.cctvkitbuilder.com/images/meta-data-picture.PNG"/>
                <link rel="icon" href="/KitBuilderFavicon.png"/>
                <link rel="alternate" href="https://www.cctvkitbuilder.com/" hrefLang="en" />
            </Head>

            <main className=" relative h-screen w-screen">
                <div id="animation-container" style={{backgroundColor: '#438241'}} className="fixed top-0 z-50 h-screen w-screen hidden">
                    <div style={{top: '50%', right: '50%', transform: 'translate(50%, -50%)'}} className="absolute" >
                        <NextImage src="/images/BS_Logo_White.png" width={375} height={100} priority={true} alt="backstreet-logo-white"/>
                    </div>
                </div>
                
                {/* Banner */}
                <div id="background-image" className="relative welcome-banner welcome-banner-loading relative flex justify-start z-10 w-screen transition-filter duration-1000 ease"></div>
                <div transition-style="in:wipe:right:delayed" style={{width: '35%', maxWidth: '850px'}} className="page-title flex flex-col absolute top-0 left-0 items-center justify-center z-20 bg-green-700 bg-opacity-80">
                    <h1 className="text-4xl lg:text-7xl uppercase font-semibold p-10 text-gray-100">CCTV Kit <br/> Builder</h1>
                </div>
                
                {/* Welcome section */}
                <section style={{borderTopWidth: '5px'}} className="relative welcome-container flex justify-evenly items-center w-screen border-green-600">
                    <div className="industryEra sm:hidden lg:block"> 
                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                            <NextImage
                                src={"/images/IndustryEra.png"}
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                                alt="Industry Era Awarded"
                                priority={true}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center lg:mx-10">
                        <div className="flex flex-col items-center justify-start">
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl text-center px-3 font-semibold mt-14 text-green-800">Build Your Custom Surveillance System in Minutes</h2>
                            <p style={{maxWidth: '850px'}} className="welcome-text text-xl xl:text-2xl text-center my-10">
                                Our Custom Kit Builder will guide you through each step, choosing the components that best fit your needs. No skill or previous knowledge about security cameras is needed.
                            </p>
                            <a style={{paddingBottom: '14px', paddingRight: '41px'}} onClick={handleClick} className="get-started py-3 px-10 mb-5 text-white border bg-green-700 bg-opacity-90 text-xl lg:text-2xl xl:text-3xl rounded text-white text-center align-middle transition-colors duration-300 ease hover:bg-green-500 my`-8 cursor-pointer">
                                Get started
                            </a>
                            <Link href="/guide"><span className="-z-50 opacity-0" id='get-started-link'>get started link</span></Link>
                        </div>
                    </div>
                    <div className="bestOfState sm:hidden lg:block w-3/12"> 
                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                            <NextImage
                                src={"/images/BestOfState.png"}
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                                alt="Best of State Winner"
                                priority={true}
                            />
                        </div>
                    </div>
                </section>

                <section style={{backgroundColor: '#494949'}} className="flex flex-col items-center justify-center text-gray-50 py-12 mt-10 bg-opacity-80 ">
                    <div>
                        <h5 className="need-help sm:text-3xl lg:text-4xl text-center">Looking for Individual Security Products?</h5>
                        <div className="flex justify-between w-full mt-5">
                            <a 
                                href="https://www.backstreet-surveillance.com/pro-vue-4k-live-video/4k-live-video-cctv.html" 
                                target="_blank" 
                                className="lg:text-xl mt-5 cursor-pointer text-center mx-1 lg:border-r lg:border-l border-gray-50 px-5 pb-1 hover:text-green-100"
                            >
                                4K Cameras
                            </a>
                            <a 
                                href="https://www.backstreet-surveillance.com/pro-vue-4k-live-video/pro-vue-video-recorders.html" 
                                target="_blank" 
                                className="lg:text-xl mt-5 cursor-pointer text-center mx-1 lg:border-r lg:border-l border-gray-50 px-5 pb-1 hover:text-green-100"
                            >
                                Video Recorders
                            </a>
                            <a 
                                href="https://www.backstreet-surveillance.com/ip-security-camera-systems/4-camera-systems.html" 
                                target="_blank" 
                                className="lg:text-xl mt-5 cursor-pointer text-center mx-1 lg:border-r lg:border-l border-gray-50 sm:px-2 lg:px-5 pb-1 hover:text-green-100"
                            >
                                Camera Systems
                            </a>
                        </div>

                    </div>
                </section>

                <div style={{height: '500px', width: '100%'}} className="kit-banner mt-20"> 
                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                        <NextImage
                            src={"/images/kitbuilder-banner.jpg"}
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                            alt="kit-builder-banner"
                        />
                    </div>
                </div>
                
                {/* How it works section */}
                <section className="mx-5 lg:px-5 xl:mx-20 my-14 xl:p-10 flex flex-wrap justify-center items-center">
                    <div style={{maxWidth: '600px'}} className="">
                        <h3 className="text-2xl xl:text-3xl mb-8 font-semibold text-green-900">How it works</h3>   
                        <p className="text-lg xl:text-xl">The experts at Backstreet Surveillance have applied their 57+ years of experience and created this beginner-friendly CCTV design tool. The Custom Kit Builder simplifies the complex process of assembling the perfect video surveillance system.  <br/> <br/> We have removed the hassle of researching and finding each individual component. Our Kit Builder allows you to design your ideal system in a matter of minutes, then proceed to purchase or have a line item quote sent to your email.</p>
                    </div>
                    <div style={{height: '400px', width: '600px'}} className="how-it-works-img sm:mt-10 lg:ml-20"> 
                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                            <NextImage
                                src={"/images/how-it-works.png"}
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                                alt="personalized selections of cameras"
                            />
                        </div>
                    </div>
                </section>

                <section className="my-14 py-20 border-t border-b border-gray-400">
                    <h3 className="text-center text-3xl mb-10 font-semibold text-green-900">What's included</h3>
                    <p className="text-xl text-center">We make sure you don't miss any of the essential components of a high-performance video surveillance system.</p>
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
                                            alt="camera-icon"
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
                                            alt="video-recorder-icon"
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
                                            alt="hard-drive-icon"
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
                                            alt="cables-icon"
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
                                            alt="mounts-icon"
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
                                            alt="monitor-icon"
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
                                            alt="power-injector-icon"
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
                                            alt="installation-icon"
                                        />
                                    </div>
                                </div>
                                <div className="text-xl font-light mt-7">Installation</div>
                            </div>
                        </div>
                    
                    </div>
                    
                </section>

                {/* Quote or Purchase */}
                <section className="mx-5 lg:px-5 xl:mx-20 my-20 xl:p-10 flex flex-wrap justify-center">
                    <div style={{height: '400px', width: '600px'}} className="custom-quotes-img lg:mr-20"> 
                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                            <NextImage
                                src={"/images/custom-quotes.png"}
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                                alt="custom quotes"
                            />
                        </div>
                    </div>
                    <div style={{maxWidth: '600px'}} className="flex flex-col sm:items-center lg:items-start">
                        <h3 className="text-2xl xl:text-3xl mb-8 font-semibold text-green-900">Proceed to Purchase or Quote</h3>   
                        <p className="text-lg xl:text-xl">We understand that purchasing a surveillance system is an important decision. It might take time to evaluate what components best fit your needs.</p>
                        <br/>
                        <p className="text-lg xl:text-xl">After you are done building your system, you can choose to receive a quote with your selections if you are not ready to place an order today. We also automatically save your selections, so you can come back and make changes until you are ready to purchase your system.</p>
                        <button
                            onClick={handleClick} 
                            className="mt-7 py-2 px-5 xl:py-3 xl:px-7 text-white border bg-green-700 bg-opacity-90 text-xl xl:text-2xl rounded text-white text-center transition-colors duration-300 ease hover:bg-green-500 cursor-pointer outline-none focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-80"
                        >
                            Get started
                        </button>
                    </div>
                </section>

                <hr className="border-gray-400"/>

                {/* Why backstreet? */}
                <section className="mx-5 lg:px-5 xl:mx-20 mt-20 mb-10 xl:p-10 flex flex-wrap justify-center">
                    <div style={{maxWidth: '600px'}} className="mt-10">
                        <h3 className="text-2xl xl:text-3xl mb-8 font-semibold text-green-900">Why purchase from Backstreet?</h3>   
                        <p className="text-lg xl:text-xl">Backstreet is the affordable solution for easy to use professional surveillance equipment. We are an American owned company and all of our support representatives and facilities are located in the U.S. We only offer ultra high definition equipment and we back it with a 5 year warranty and free lifetime technical support. The Backstreet promise says it all: “We promise that you will not find a lower price for the same quality and support, anywhere.”</p>
                    </div>
                    <div style={{height: '400px', width: '600px'}} className="why-backstreet-img lg:ml-20"> 
                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                            <NextImage
                                src={"/images/why_backstreet.png"}
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                                alt="System Designer app"
                            />
                        </div>
                    </div>
                </section>

                <section className="mx-5 lg:mx-20 lg:p-10 col items-center">
                    <div className="flex justify-center flex-wrap items-center mb-10">
                        <div style={{maxWidth: '600px'}}>
                            <h5 className="text-2xl font-semibold text-green-900">30-Day Money Back Guarantee</h5>
                            <p className="text-lg mt-5">Any item can be returned within 30 days from the date of delivery for a refund. If you need to change an item, we will be glad to exchange any item for another. If the equipment is just not right for you then we will provide a 100% refund once we receive the equipment and all materials back. </p>
                        </div>
                        <div style={{height: '225px', width: '280px'}} className="sm:mt-10 lg:mt-0 lg:ml-20"> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <NextImage
                                    src={"/images/moneyback.png"}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    alt="30-day money-back guarantee"
                                />
                            </div>
                        </div>
                    </div>    
                    <div className="flex justify-center flex-wrap items-center mb-10">
                        <div style={{maxWidth: '600px'}}>
                            <h5 className="text-2xl font-semibold text-green-900">Longest Warranty in the Industry</h5>
                            <p className="text-lg mt-5">All equipment is covered under a complete 5 year warranty from the date of delivery. During this time all products are guaranteed against manufacturing and operational defects. In the event of such defects during this period, it is our responsibility to replace the defective item with an exact or comparable product.</p>
                        </div>
                        <div style={{height: '225px', width: '280px'}} className="sm:mt-10 lg:mt-0 lg:ml-20"> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <NextImage
                                    src={"/images/5YearWarranty.png"}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    alt="5-year warranty"
                                />
                            </div>
                        </div>
                    </div> 
                    <div className="flex justify-center flex-wrap items-center mb-10">
                        <div style={{maxWidth: '600px'}}>
                            <h5 className="text-2xl font-semibold text-green-900">USA-Based Unlimited Technical Support</h5>
                            <p className="text-lg mt-5">We provide USA-based, free, unlimited, life-time technical support for all of the equipment that we offer. We answer all kinds of questions, from simple ones such as installing your system for the first time, to more advanced questions such as port forwarding or network performance improvements. Feel free to call for any questions. We make sure you get the most out of your system.</p>
                        </div>
                        <div style={{height: '255px', width: '280px'}} className="sm:mt-10 lg:mt-0 lg:ml-20"> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <NextImage
                                    src={"/images/usa_support.png"}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    alt="usa-based"
                                />
                            </div>
                        </div>
                    </div>                     
                </section>
                <hr className="border-gray-400"/>
                {/* System Designer */}
                <section className="mx-5 lg:px-5 xl:mx-20 my-20 xl:p-10 flex flex-wrap justify-center">
                    <div style={{height: '400px', width: '600px'}} className="custom-quotes-img lg:mr-20"> 
                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                            <NextImage
                                src={"/images/home-design-demo.png"}
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                                alt="custom quotes"
                            />
                        </div>
                    </div>
                    <div style={{maxWidth: '600px'}} className="flex flex-col sm:items-center lg:items-start">
                        <h3 className="text-2xl xl:text-3xl mb-8 font-semibold text-green-900">Take your System Design to the Next Level</h3>   
                        <p className="text-lg xl:text-xl">Visualize the location of each camera and their viewing distances on your home or business with our System Designer.</p>
                        <br/>
                        <p className="text-lg xl:text-xl">Strategically design all aspects of your surveillance system. From the cameras and their viewing areas, to their connection to the NVR, router and much more - this surveillance system design tool covers it all.</p>
                        <a
                            href="https://system-designer.vercel.app/"
                            className="mt-7 py-2 px-5 xl:py-3 xl:px-7 text-white border bg-green-700 bg-opacity-90 text-xl xl:text-2xl rounded text-white text-center transition-colors duration-300 ease hover:bg-green-500 cursor-pointer outline-none focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-80"
                        >
                            Go to System Designer
                        </a>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center bg-green-700 text-gray-50 py-12">
                    <h5 className="need-help sm:text-3xl lg:text-4xl sm:mx-5 sm:text-center">Need More Information About Security Cameras?</h5>
                    <a href="https://backstreet-surveillance.com/blog" target="_blank" className="text-xl mt-5 cursor-pointer hover:text-green-100">View our security blog</a>
                </section>
                <footer style={{backgroundColor: '#494949'}} className="flex sm:flex-col lg:flex-row justify-between items-center justify-center w-full lg:py-4 sm:py-10 sm:px-5 lg:px-10">
                    {/* Icons */}
                    <div style={{maxWidth: '420px'}} className="flex justify-start">
                        <a href="https://www.facebook.com/Backstreetsecure/" target="_blank" style={{height: '35px', width: '45px'}} className="mx-2 cursor-pointer"> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <NextImage
                                    src={"/images/social_media/facebook.png"}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    alt="facebook-link"
                                />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/backstreet_surveillance/" target="_blank" style={{height: '35px', width: '45px'}} className="mx-2 cursor-pointer"> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <NextImage
                                    src={"/images/social_media/instagram.png"}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    alt="instagram-link"
                                />
                            </div>
                        </a>
                        <a href="https://twitter.com/backstreet_surv" target="_blank" style={{height: '35px', width: '45px'}} className="mx-2 cursor-pointer"> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <NextImage
                                    src={"/images/social_media/twitter.png"}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    alt="twitter-link"
                                />
                            </div>
                        </a>
                        <a href="https://pinterest.com/backstreetcam" target="_blank" style={{height: '35px', width: '45px'}} className="mx-2 cursor-pointer"> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <NextImage
                                    src={"/images/social_media/pinterest.png"}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    alt="pinterest-link"
                                />
                            </div>
                        </a>
                    </div>
                    {/* Link */}
                    <div style={{maxWidth: '420px'}} className="flex flex-col items-center justify-center lg:ml-16">
                        <a href="https://www.backstreet-surveillance.com" target="_blank" className="text-gray-100 tracking-wider sm:text-lg sm:mt-7 lg:text-2xl lg:mt-0">Visit: www.Backstreet-Surveillance.com</a>
                        <span className="tracking-wider text-sm font-light text-gray-200 text-center my-1">Copyright © 2021 Backstreet Surveillance. All rights reserved.</span>
                    </div>
                    {/* Contact */}
                    <div style={{maxWidth: '420px'}} className="flex flex-col items-end sm:items-center sm:mt-5 lg:mt-0 text-gray-100 lg:mr-10">
                        <span className="text-2xl">
                            <div style={{height: '20px', width: '30px'}} className="inline-block"> 
                                <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                    <NextImage
                                        src={"/images/social_media/phone_icon.png"}
                                        layout="fill"
                                        objectFit="contain"
                                        quality={100}
                                        alt="phone-icon"
                                    />
                                </div>
                            </div>800-431-3056
                        </span>
                        <span className="text-xl font-light">Support@BackstreetSurveillance.com</span>
                    </div>
                </footer>
            </main>
      </div>
    )
}
