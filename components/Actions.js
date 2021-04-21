import Link from "next/link";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/translucent.css';
import Image from 'next/image'

export default function Actions({ nextStep, prevStep, currentStep, canClickNext, isLastStep, displayBackToReview, goToStep, subtotal }) {
    return(
        <section className="flex flex-row items-center justify-center w-full border-t pt-7 border-gray-300">
            <a href="https://backstreet-surveillance.com/" target="_blank" className={isLastStep() ? "relative" : 'absolute top-0 left-0 mt-5'} style={{height: '60px', width: '220px'}}> 
                <div style={{maxWidth: '100%', height: '100%'}}>
                    <Image
                        src='/images/BS_logo.png'
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </div>
            </a>

            <span className={(currentStep == 1) ? '' : 'hidden'}>
                <Link href="/">
                    <button 
                        className="text-lg text-gray-700 mx-6 border border-gray-300 rounded px-5 py-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-500"
                    >
                        Back
                    </button>
                </Link>
            </span>

            {isLastStep() && 
            <div className={"flex flex-col items-center justify-center mx-auto pl-36"}>
                <div className="text-2xl font-medium">
                    Subtotal: {subtotal.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}*
                </div>
                <p className="font-light text-lg mt-2">*Does not include discounts</p>
            </div> }
            
            <span className={(currentStep != 1) ? '' : 'hidden'}>
                <button 
                    className={"text-lg text-gray-700 mx-6 border border-gray-300 rounded px-5 py-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-500"}
                    onClick={prevStep}
                >
                    Back
                </button>
            </span>
 
            {!isLastStep() && 
            <button 
                className={"text-lg text-white mx-6 border rounded px-5 py-2 transition-all duration-300 ease " 
                + (canClickNext ? 'border-green-400 bg-green-600 hover:bg-green-500 hover:text-white focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-500' 
                : 'bg-gray-300 text-gray-900 bg-opacity-80 focus:outline-none cursor-not-allowed')}
                onClick={e=> {if(canClickNext) nextStep()}}
            >
                Next
            </button>}

            {/* {isLastStep() && 
                <button 
                    className={"text-lg mx-6 border rounded px-7 py-4 transition-all duration-300 ease " 
                        + 'border-blue-700 text-blue-700 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-opacity-500'}
                >
                    Email me this quote
                </button>} */}

            {isLastStep() && 
                <button 
                    className={"text-xl text-white mx-6 border rounded px-7 py-4 transition-all duration-300 ease " 
                        + 'border-green-400 bg-green-600 hover:bg-green-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-500'}
                >
                    Proceed to checkout
                </button>
            }

            {displayBackToReview &&
                <button
                    onClick={e => goToStep('review')}
                    style={{borderWidth: '1.5px'}}
                    className="absolute right-3 text-lg text-green-600 mx-6 rounded px-5 py-2 transition-all duration-300 ease border-green-500 hover:bg-green-600 hover:text-white focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-500" 
                >
                    Back to Review
                </button>}
        </section>
    )
}