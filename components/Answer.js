import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { MdSettingsInputHdmi, MdSettingsInputComponent } from 'react-icons/md'
import { BsInfoCircle } from 'react-icons/bs'
import Image from 'next/image'
import { useState } from 'react'

export default function Answer({
    step,
    homeOrBusiness,
    setHomeOrBusiness, 
    indoorSelected, 
    outdoorSelected, 
    setIndoorSelected, 
    setOutdoorSelected, 
    indoorCount,
    outdoorCount,
    setIndoorCount,
    setOutdoorCount,
    cviOrIp,
    setCviOrIp
    }) {

    const selected = 'bg-green-200 border-green-200 shadow-lg';

    const [ displaySystemTypeInfo, setDisplaySystemTypeInfo ] = useState(false);

    function changeOutdoorValue(e){
        let value = e.target.value;
        setOutdoorCount(value);
    }

    function changeIndoorValue(e) {
        let value = e.target.value;
        setIndoorCount(value);
    }

    switch(step) {
        case 0:
            return(
                <section className="h-80 my-10 flex flex-row justify-around items-center">
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
            )
            break;
        case 1:
            return(
                <section className="h-72 my-10 ">
                    <div className="text-2xl mb-5 font-light">
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            className="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                            checked={outdoorSelected}
                            onChange={e => setOutdoorSelected(!outdoorSelected)}
                        />
                            <span className="ml-2">Outdoors</span>
                        </label>
                    </div>
                    <div className="text-2xl font-light">
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            className="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                            checked={indoorSelected}
                            onChange={e => setIndoorSelected(!indoorSelected)}
                        />
                            <span className="ml-2">Indoors</span>
                        </label>
                    </div>
                </section>
            )
            break;
        case 2:
            return(
                <section className="h-80 my-10 ">
                    <label className={"flex flex-row items-center " + (indoorSelected ? '' : 'hidden')}>
                        <span className="text-xl font-light text-gray-700 mr-4 w-20">Indoors:</span>
                        <input
                            type="number"
                            className="mt-1 w-20 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                            value={indoorCount}
                            onChange={changeIndoorValue}
                        />
                    </label>

                    <label className={"block mt-5 "  + (outdoorSelected ? '' : 'hidden')}>
                        <span className="text-xl font-light text-gray-700 mr-4 ">Outdoors:</span>
                        <input
                            type="number"
                            className="mt-1 w-20 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                            value={outdoorCount}
                            onChange={changeOutdoorValue}
                        />
                    </label>
                </section>
            )
            break;
        case 3:
            return(
                <section className="h-80 my-10 flex flex-col justify-center items-center">
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
            )
            break;
        case 4:
            return(
                <section className="h-96 my-10">
                    <div className="text-xl">
                        <p>Before you choose your cameras, you should know your options. You'll need to consider the following core features when choosing each camera:</p>
                        <ul className="mt-5 font-light">
                            <li>- Camera Housing</li>
                            <li>- Camera Lens</li>
                            <li>- Camera Resolution</li>
                            <li>- Night Vision distance</li>
                        </ul>
                    </div>
                    
                </section>
            )
            break;
        case 5:
            return(
                <section className="h-96 my-10">
                    <p className="ml-3 text-xl">We sell cameras with 3 types of housing. Click on each one to see more information.</p>
                    <div className="flex flex-row justify-around items-center mt-5">
                        <div className="p-4 text-center border rounded border-black-200">
                            <Image src="/images/dome-style.png" width={200} height={144} />
                            <h5 className="text-lg">Dome style</h5>
                        </div>

                        <div className="p-4 text-center border rounded border-black-200">
                            <Image src="/images/bullet-style.png" width={200} height={144} />
                            <h5 className="text-lg">Bullet style </h5>
                        </div>

                        <div className="p-4 text-center border rounded border-black-200">
                            <Image src="/images/ptz-style.png" width={200} height={144} />
                            <h5 className="text-lg">PTZ style </h5>
                        </div>
                    </div>
                    
                    
                </section>
            )
    }    
}