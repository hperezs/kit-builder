import Link from "next/link";

export default function Actions({ nextStep, prevStep, step }) {

    return(
        <section className="flex flex-row justify-center mb-10 w-full border-t pt-7 border-gray-300">
            <span className={(step == 1) ? '' : 'hidden'}>
                <Link href="/">
                    <button 
                        className="text-lg text-gray-700 mx-6 border border-gray-300 rounded px-5 py-2 hover:bg-gray-100 focus:outline-none focus:ring"
                    >
                        Back
                    </button>
                </Link>
            </span>
            
            <span className={(step != 1) ? '' : 'hidden'}>
                <button 
                    className={"text-lg text-gray-700 mx-6 border border-gray-300 rounded px-5 py-2 hover:bg-gray-100 focus:outline-none focus:ring"}
                    onClick={prevStep}
                >
                    Back
                </button>
            </span>

            <button 
                className="text-lg text-white mx-6 border rounded border-green-400 bg-green-600 px-5 py-2 hover:bg-green-500 hover:text-white focus:outline-none focus:ring"
                onClick={nextStep}
            >
                Next
            </button>
        </section>
    )
}