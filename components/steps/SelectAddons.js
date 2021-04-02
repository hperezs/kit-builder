import { AiFillShop } from 'react-icons/ai'
import { GiTinker } from 'react-icons/gi'
import { CgToolbox } from 'react-icons/cg'
import { FaPowerOff, FaTv, FaScrewdriver } from 'react-icons/fa'
import { useState } from 'react';

export default function SelectAddons({cablesType = '', selectCablesType = () => {}}) {
    const [displayDetails, setDisplayDetails] = useState(false);

    const selected = 'bg-green-200 border-green-200 shadow-lg';

    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center w-full">
                <section className="mt-40 flex flex-row justify-around items-center 2xl:w-7/12 xl:w-9/12 md:w-10/12 ">
                    <span style={{width: '255px'}} className={"flex flex-col items-center text-center cursor-pointer px-10 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (cablesType == 'pre-made' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => selectCablesType('pre-made')}
                        >
                        <span className="text-6xl text-gray-700"><FaTv /></span>
                        <h5 className="text-xl mt-5 font-light">Monitors</h5>
                    </span>

                    <span style={{width: '255px'}} className={"flex flex-col items-center text-center cursor-pointer px-10 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (cablesType == 'self-made' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => selectCablesType('self-made')}
                        >
                        <span className="text-6xl text-gray-700"><FaScrewdriver /></span>
                        <h5 className="text-xl mt-5 font-light">Mounts</h5>
                    </span>

                    <span style={{width: '255px'}} className={"flex flex-col items-center  text-center cursor-pointer px-10 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (cablesType == 'none' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => selectCablesType('none')}
                        >
                        <span className="text-6xl text-gray-700"><FaPowerOff /></span>
                        <h5 className="text-xl mt-5 font-light">Power Injectors</h5>
                    </span>
                </section>
            </div>
        </div>
    )
}