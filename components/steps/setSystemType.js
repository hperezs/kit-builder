import { useState } from "react";
import { MdSettingsInputHdmi, MdSettingsInputComponent } from 'react-icons/md'
import { BsInfoCircle } from 'react-icons/bs'

export default function SetSystemType({ cviOrIp, setCviOrIp}) {

    const selected = 'bg-green-200 border-green-200 shadow-lg';

    const [ displaySystemTypeInfo, setDisplaySystemTypeInfo ] = useState(false);

    return(
        <div className="flex flex-row justify-center">
            <section className="h-80 my-10 flex flex-col justify-center items-center 2xl:w-8/12">
                <div className="flex flex-row w-full justify-around items-center">
                    <div className={"flex flex-col justify-center items-center cursor-pointer px-10 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (cviOrIp == 'cvi' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => setCviOrIp('cvi')}
                        >
                        <span className="text-6xl text-gray-700"><MdSettingsInputComponent /></span>
                        <h5 className="text-xl mt-4 font-light">Video over Coax Cable (CVI)</h5>
                    </div>

                    <div className={"flex flex-col justify-center items-center cursor-pointer px-10 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (cviOrIp == 'ip' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => setCviOrIp('ip')}
                        >
                        <span className="text-6xl text-gray-700"><MdSettingsInputHdmi /></span>
                        <h5 className="text-xl mt-4 font-light">Video Over Ethernet (IP-based)</h5>
                    </div>
                </div>

                <span className="text-center mt-5 text-green-600 cursor-pointer" onClick={e => setDisplaySystemTypeInfo(true)}>
                    <BsInfoCircle className="inline mb-1 mr-1" /> Which one should I choose?
                </span>

                <div className={"w-8/12 mt-5 " + (displaySystemTypeInfo ? '' : 'hidden')}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </section>
        </div>
    )
}