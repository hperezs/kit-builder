import { BiCameraHome } from 'react-icons/bi'
import CyberSecureModal from './CyberSecureModal';

const selected = 'bg-green-200 border-green-200 shadow-lg';

export default function ChooseCameraSeries({cyberSecure, setCyberSecure}) {
    return(
        <div className="flex flex-row justify-center">
            <section className="h-80 my-10 flex flex-row justify-around items-center 2xl:w-7/12 xl:w-9/12 md:w-10/12 ">
                <span className={"home-business-option flex flex-col items-center text-center cursor-pointer sm:mx-3 lg:mx-0 sm:px-10 sm:py-8 lg:px-16 lg:py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                    + (!cyberSecure ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                    onClick={e => setCyberSecure(false)}
                    >
                    <span className="sm:text-4xl lg:text-6xl text-gray-700"><BiCameraHome /></span>
                    <h5 className="text-xl mt-4 font-light">ProVue</h5>
                </span>

                <div>
                    <span className={"home-business-option flex flex-col items-center text-center cursor-pointer sm:mx-3 lg:mx-0 sm:px-10 sm:py-8 lg:px-16 lg:py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (cyberSecure ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => setCyberSecure(true)}
                        >
                        <img src="/images/CyberSafeLogoLong.png" width={100}/>
                        <h5 className="text-xl mt-4 font-light">Cyber Secure</h5>
                    </span>
                    <CyberSecureModal />
                </div>
            </section>
        </div>
    )
}