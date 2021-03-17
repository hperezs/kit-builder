import Image from 'next/image'
import NightVisionDropdown from '../NightVisionDistance/nightVisionDropdown'

export default function SelectNightVision({ cameras, selectNightVision }) {

    return (
        <section className="my-10">
            <p>
                With the information you have provided, we've been able to select the night vision distance for some of your cameras. 
            </p>

            <p className="text-2xl font-light my-10">
                <span className="text-green-700">&#8594;</span> Select the <span className="text-green-600 font-normal">night vision distance</span> for  the remaining cameras.
            </p>

            <div className="flex flex-row justify-around items-start mt-10">
                <div>
                    {/* Outdoor */}
                    <h3 className="border-b text-lg pb-3 text-center">Outdoor Cameras</h3>
                    {cameras.outdoor.map((camera, index) => {
                        return(
                            <div>
                                <div className="flex flex-col justify-start items-center flex-wrap mt-4">
                                    <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                        <Image src={`/images/${camera.housing}-style.png`} width={80} height={57}/>
                                        <p className="mt-3">{camera.name} </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p className="font-light mb-1">Viewing Area: {camera.viewingArea}</p>
                                        <p className="font-light mb-3">Camera Lens: {camera.cameraLens}</p>
                                        <div className="w-full flex flex-row justify-center items-center">
                                            <p className="mr-3">Night Vision:</p>
                                            <NightVisionDropdown 
                                                camera={camera} 
                                                selectNightVision={selectNightVision}
                                                indoorOrOutdoor={'outdoor'}
                                                index={index}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div>
                    {/* Indoor */}
                    <h3 className="border-b text-lg pb-3 text-center">Indoor Cameras</h3>
                    {cameras.indoor.map((camera, index) => {
                        return(
                            <div className="flex flex-col justify-start items-center flex-wrap mt-4">
                                <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                    <Image src={`/images/${camera.housing}-style.png`} width={80} height={57}/>
                                    <p className="mt-3">{camera.name} </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="font-light mb-1">Viewing Area: {camera.viewingArea}</p>
                                    <p className="font-light mb-3">Camera Lens: {camera.cameraLens}</p>
                                    <div className="w-full flex flex-row justify-center items-center">
                                        <p className="mr-3">Night Vision:</p>
                                        <NightVisionDropdown 
                                            camera={camera} 
                                            selectNightVision={selectNightVision}
                                            indoorOrOutdoor={'indoor'}
                                            index={index}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="mt-7 pb-7 text-right">
                <a className="mr-5 text-green-600 cursor-pointer hover:text-green-500">Why are some options disabled?</a>
            </div>
        </section>
    )
}