import { MdSettingsInputHdmi, MdSettingsInputComponent } from 'react-icons/md'
import { BsInfoCircle } from 'react-icons/bs'
import Image from 'next/image'
import { useState } from 'react'
import HomeOrBusiness from './steps/homeOrBusiness'
import CameraHousings from './CameraHousing/camera_housings'
import SetCameraCount from './steps/setCameraCount'

export default function Answer({
    step,
    cameras,
    homeOrBusiness,
    setHomeOrBusiness, 
    indoorSelected, 
    outdoorSelected, 
    setIndoorSelected, 
    setOutdoorSelected, 
    indoorCount,
    outdoorCount,
    incrementOutdoorCount,
    incrementIndoorCount,
    decrementOutdoorCount,
    decrementIndoorCount,
    cviOrIp,
    setCviOrIp,
    selectHousing
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
                <HomeOrBusiness homeOrBusiness={homeOrBusiness} setHomeOrBusiness={setHomeOrBusiness}/>
            )
            break;
        case 1:
            return(
                <section className="h-72 my-10 ">
                    <p className="mb-8 text-xl">Select any that apply.</p>
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
                <SetCameraCount 
                    cameras={cameras}
                    indoorSelected={indoorSelected} 
                    outdoorSelected={outdoorSelected} 
                    incrementOutdoorCount={incrementOutdoorCount}
                    incrementIndoorCount={incrementIndoorCount}
                    decrementOutdoorCount={decrementOutdoorCount}
                    decrementIndoorCount={decrementIndoorCount}
                />
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
                <CameraHousings 
                    cameras={cameras}
                    selectHousing={selectHousing}
                />
            )
    }    
}