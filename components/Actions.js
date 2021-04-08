import Link from "next/link";

export default function Actions({ nextStep, prevStep, currentStep, canClickNext }) {
    return(
        <section className="flex flex-row justify-center mb-10 w-full border-t pt-7 border-gray-300">
            <span className={(currentStep == 1) ? '' : 'hidden'}>
                <Link href="/">
                    <button 
                        className="text-lg text-gray-700 mx-6 border border-gray-300 rounded px-5 py-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-500"
                    >
                        Back
                    </button>
                </Link>
            </span>
            
            <span className={(currentStep != 1) ? '' : 'hidden'}>
                <button 
                    className={"text-lg text-gray-700 mx-6 border border-gray-300 rounded px-5 py-2 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-500"}
                    onClick={prevStep}
                >
                    Back
                </button>
            </span>

            <button 
                className={"text-lg text-white mx-6 border rounded px-5 py-2 transition-all duration-300 ease " 
                + (canClickNext ? 'border-green-400 bg-green-600 hover:bg-green-500 hover:text-white focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-500' 
                : 'bg-gray-300 text-gray-900 bg-opacity-80 focus:outline-none cursor-not-allowed')}
                onClick={e=> {if(canClickNext) nextStep()}}
            >
                Next
            </button>
        </section>
    )
}