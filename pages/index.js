import Head from 'next/head'
import NextImage from 'next/image';
import Link from 'next/link'
import React, {useEffect} from 'react'
import ReactGa from 'react-ga'

export default function Home() {
    const access_key = process.env.IPREGISTRY_KEY;

    useEffect(() => {
        let backgroundImage = new Image();
        backgroundImage.onload = () => {
            console.log('image loaded');    
            document.getElementById('background-image').style.backgroundImage = 'url(' + backgroundImage.src + ')';
            document.getElementById('background-image').classList.remove('welcome-banner-loading');
        }
        backgroundImage.src = '../images/welcome-background.jpg';
    }, [])
    
    // Analytics
    useEffect(() => {
        // Manual
        fetch('https://morning-anchorage-80357.herokuapp.com/http://api.ipify.org/?format=json').then(response => {
            response.json().then(data => {
                console.log(data);
                const getlocation_url = 'https://api.ipregistry.co/' + data.ip + '?key=' + access_key;
                fetch(getlocation_url).then(response => {
                    response.json().then(locationData => {
                        console.log(locationData)
                        let userLog = {
                            ipAddress: data.ip,
                            country: locationData.location.country.name,
                            state: locationData.location.region.name,
                            city: locationData.location.city,
                        }
                        fetch('/api/logUserTraffic', {
                            method: "POST",
                            body: JSON.stringify({
                                userLog: JSON.stringify(userLog),
                                timeOfVisit: locationData.time_zone.current_time,
                            })
                        }).then(response => {
                            console.log(response);
                        }).catch(error => console.log(error))
                    });
                })

            })
        });

        //  Google Analytics
        ReactGa.initialize("G-NQTZFQMX8R");

        ReactGa.pageview('/');

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
                <div id="background-image" className="welcome-banner welcome-banner-loading relative flex justify-start z-10 w-screen transition-filter duration-1000 ease"></div>
                <div transition-style="in:wipe:right:delayed" style={{width: '35%', maxWidth: '850px'}} className="page-title flex flex-col absolute top-0 left-0 items-center justify-center z-20 bg-green-700 bg-opacity-80">
                    <h1 className="text-4xl lg:text-7xl uppercase font-semibold p-10 text-gray-100">CCTV Kit <br/> Builder</h1>
                </div>
                
                {/* Welcome section */}
                <section className="welcome-container flex flex-col items-center w-screen border-b border-gray-400">
                    <div className="flex flex-col justify-center w-screen ">
                        <div style={{borderTopWidth: '5px'}} className="flex flex-col items-center justify-start border-green-600">
                            <h2 className="text-2xl lg:text-4xl text-center px-3 font-semibold mt-14 text-green-800">Build Your Custom Surveillance System in Minutes</h2>
                            <p style={{maxWidth: '850px'}} className="welcome-text text-xl lg:text-2xl text-center w-6/12 my-10">
                                Our Custom Kit Builder will guide you through each step, choosing the components that best fit your needs. No skill or previous knowledge about security cameras is needed.
                            </p>
                            <a style={{paddingBottom: '14px', paddingRight: '41px'}} onClick={handleClick} className="get-started py-3 px-10 mb-5 text-white border bg-green-700 bg-opacity-90 text-xl lg:text-3xl rounded text-white text-center align-middle transition-colors duration-300 ease hover:bg-green-500 my`-8 cursor-pointer">
                                Get started
                            </a>
                            <Link href="/guide"><span className="-z-50 opacity-0" id='get-started-link'>get started link</span></Link>
                        </div>
                    </div>
                </section>

                <div style={{height: '500px', width: '100%'}} className="kit-banner mt-16"> 
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
                <section className="mx-5 lg:mx-20 my-14 lg:p-10 flex flex-wrap justify-center items-center">
                    <div style={{maxWidth: '600px'}} className="">
                        <h3 className="text-3xl mb-8 font-semibold text-green-900">How it works</h3>   
                        <p className="text-xl">The experts at Backstreet Surveillance have applied their 57+ years of experience and created this beginner-friendly CCTV design tool. The Custom Kit Builder simplifies the complex process of assembling the perfect video surveillance system.  <br/> <br/> We have removed the hassle of researching and finding each individual component. Our Kit Builder allows you to design your ideal system in a matter of minutes, then proceed to purchase or have a line item quote sent to your email.</p>
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

                {/* Why backstreet? */}
                <section className="mx-5 lg:mx-20 mt-20 mb-10 lg:p-10 flex flex-wrap justify-center">
                    <div style={{height: '400px', width: '600px'}} className="why-backstreet-img lg:mr-20"> 
                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                            <NextImage
                                src={"/images/why_backstreet.png"}
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                                alt="backstreet employee stocking products"
                            />
                        </div>
                    </div>
                    <div style={{maxWidth: '600px'}} className="mt-10">
                        <h3 className="text-3xl font-semibold mb-8 text-green-900">Why purchase from Backstreet?</h3>   
                        <p className="text-xl">Backstreet is the affordable solution for easy to use professional surveillance equipment. We are an American owned company and all of our support representatives and facilities are located in the U.S. We only offer ultra high definition equipment and we back it with a 5 year warranty and free lifetime technical support. The Backstreet promise says it all: “We promise that you will not find a lower price for the same quality and support, anywhere.”</p>
                    </div>
                </section>

                <section className="mx-5 lg:mx-20 lg:p-10 col items-center">
                    <div className="flex justify-center flex-wrap items-center mb-10">
                        <div style={{maxWidth: '600px'}}>
                            <h5 className="text-2xl font-semibold text-green-900">30-Day Money Back Guarantee</h5>
                            <p className="text-lg mt-5">Any item can be returned within 30 days from the date of delivery for a refund. If you need to change an item, we will be glad to exchange any item for another. If the equipment is just not right for you then we will provide a 100% refund once we receive the equipment and all materials back. </p>
                        </div>
                        <div style={{height: '225px', width: '280px'}} className="sm:mt-10 lg:ml-20"> 
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
                        <div style={{height: '225px', width: '280px'}} className="sm:mt-10 lg:ml-20"> 
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
                            <h5 className="text-2xl font-semibold text-green-900">USA Based - Unlimited Technical Support</h5>
                            <p className="text-lg mt-5">We provide USA based, Free, Unlimited, Life-time Technical Support for all the equipment that we offer.</p>
                        </div>
                        <div style={{height: '200px', width: '280px'}} className="sm:mt-10 lg:ml-20"> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <NextImage
                                    src={"/images/BasedInTheUSA.png"}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                    alt="usa-based"
                                />
                            </div>
                        </div>
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
