import { useState } from 'react';
import {BsDot} from 'react-icons/bs'
import Image from 'next/image'

export default function ChooseInstallation({homeOrBusiness, cameras, isInstallationSelected, addInstallation}){
    const [ selfInstallationSelected, setSelfInstallationSelected ] = useState(false);

    const baseFee = (homeOrBusiness == 'home' ? 299 : 349);
    const subtotal = baseFee + (212 * cameras.length);

    const selectButton_styles = "px-5 py-1 mt-10 border rounded bg-green-600 text-white text-sm uppercase tracking-wider font-semibold transition hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";

    return(
        <section className="my-10 flex flex-col justify-center items-center">
            {/* Installation item container */}
            {!isInstallationSelected && 
            <div 
                transition-style="fade:in"
                className={"relative flex justify-evenly items-center rounded p-10 shadow-lg w-10/12 lg:w-8/12 xl:w-6/12 transition-all duration-300 ease " 
                + (isInstallationSelected ? 'border-2 border-green-300 border-opacity-80 bg-green-50 bg-opacity-30 ' : 'border cursor-pointer hover:border-green-400 hover:shadow-xl')}
            >
                {/* Icon or graphic */}
                <div style={{width: '200px', height: '200px'}} className="m-4">
                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                        <Image
                            src={`/images/${homeOrBusiness}_installation.png`}
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                        />
                    </div>
                </div>
                {/* Details */}
                <div className="flex flex-col items-center mx-4 p-4">
                    <h2 className="text-2xl font-semibold border-b pb-2 px-4 border-gray-300 w-full text-center">{homeOrBusiness == 'home' ? 'Home' : 'Business'} Installation</h2>
                    <ul className="mt-3 mb-5 text-lg">
                        <li><BsDot className="inline"/> All Cameras</li>
                        <li><BsDot className="inline"/> Video Recorder</li>
                        <li><BsDot className="inline"/> Remote viewing</li>
                        <li><BsDot className="inline"/> 1-Year Installation Warranty</li>
                        <li><BsDot className="inline"/> 5-Year Equipment Warranty</li>
                    </ul>

                    <div className="flex justify-between w-full mt-7 mb-2 pb-3 px-2 border-b-2 border-dashed border-gray-700 border-opacity-80">
                        <span className="mr-5">Base fee</span>
                        <span>${baseFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between w-full mb-2 px-2">
                        <span className="mr-5">Installation fee per camera</span>
                        <span>$212.00</span>
                    </div>
                    <div className="flex justify-between w-full px-2 pb-2">
                        <span className="mr-5">Your cameras</span>
                        <span>x{cameras?.length}</span>
                    </div>
                    <div className="flex justify-between w-full pt-3 border-t border-gray-400 mt-2 px-2">
                        <span className="mr-5 font-semibold">Subtotal</span>
                        <span className="text-green-600">{subtotal.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
                    </div>
                    <button 
                        onClick={e => {setSelfInstallationSelected(false); addInstallation(true)}} 
                        className={selectButton_styles}
                    >
                        Add to cart
                    </button>
                </div>
                
                {selfInstallationSelected && <div onClick={e => {setSelfInstallationSelected(false); addInstallation(true)}} transition-style="faded-disable" className="absolute w-full h-full bg-gray-100 opacity-50"></div>}
            </div>}

            {isInstallationSelected && 
            <div 
                transition-style="in:square:center"
                className={"relative flex flex-col items-center justify-evenly items-center rounded m-5 p-10 shadow-lg transition-all duration-300 ease border border-green-400 " }
            >
                {/* Icon or graphic */}
                <div style={{width: '200px', height: '200px'}} className="m-4">
                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                        <Image
                            src={`/images/${homeOrBusiness}_installation.png`}
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                        />
                    </div>
                </div>
                {/* Details */}
                <div className="flex flex-col items-center mx-4 p-4">
                    <h2 className="text-2xl font-semibold border-b pb-2 px-4 border-gray-300 w-full text-center">{homeOrBusiness == 'home' ? 'Home' : 'Business'} Installation</h2>

                    <div className="flex justify-between w-full mt-7 mb-2 pb-3 px-2 border-b-2 border-dashed border-gray-700 border-opacity-80">
                        <span className="mr-5">Base fee</span>
                        <span>${baseFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between w-full mb-2 px-2">
                        <span className="mr-5">Installation fee per camera</span>
                        <span>$212.00</span>
                    </div>
                    <div className="flex justify-between w-full px-2 pb-2">
                        <span className="mr-5">Your cameras</span>
                        <span>x{cameras?.length}</span>
                    </div>
                    <div className="flex justify-between w-full pt-3 border-t border-gray-400 mt-2 px-2">
                        <span className="mr-5 font-semibold">Subtotal</span>
                        <span className="text-green-600">{subtotal.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
                    </div>
                </div>
            </div>
            }

            {/* Self-install option */}
            <button 
                className={"mt-20 text-lg px-10 py-2 border rounded shadow focus:outline-none transition-all duration-200 ease focus:ring focus:ring-green-200 focus:ring-opacity-500 " 
                + (selfInstallationSelected ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-50 hover:border-gray-300')}
                onClick={e => {setSelfInstallationSelected(true); addInstallation(false)}}
            >
                I will install my system myself
            </button>
        </section>
    )
}