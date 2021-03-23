import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'

const selected = 'bg-green-200 border-green-200 shadow-lg';

export default function HomeOrBusiness({homeOrBusiness, setHomeOrBusiness}) {
    return(
        <div className="flex flex-row justify-center">
            <section className="h-80 my-10 flex flex-row justify-around items-center w-10/12 xl:w-9/12 2xl:w-8/12">
                <span className={"text-center cursor-pointer px-16 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                    + (homeOrBusiness == 'home' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                    onClick={e => setHomeOrBusiness('home')}
                    >
                    <span className="text-6xl text-gray-700"><AiOutlineHome /></span>
                    <h5 className="text-xl mt-4 font-light">Home</h5>
                </span>

                <span className={"text-center cursor-pointer px-16 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                    + (homeOrBusiness == 'business' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                    onClick={e => setHomeOrBusiness('business')}
                    >
                    <span className="text-6xl text-gray-700"><HiOutlineOfficeBuilding /></span>
                    <h5 className="text-xl mt-4 font-light">Business</h5>
                </span>
            </section>
        </div>
        
    )
}