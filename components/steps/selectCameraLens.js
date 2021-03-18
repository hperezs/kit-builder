import Image from 'next/image'
import CameraLensDropdown from '../CameraLens/cameraLensDropdown'

export default function SelectCameraLens({ cameras, selectCameraLens }) {

    return(
        <section className="my-10">
            <div className="flex flex-row justify-center">
                <div className="p-5 border rounded mb-5 shadow-sm 2xl:w-8/12">
                    <p className="text-lg">Now that we know the viewing area for each camera, it's easy to choose a lens. We have already selected some of your camera lenses for you, based on the viewing distance you entered.</p>
                    
                    <br/>
                    
                    <p className="text-lg">We now just need you to select manual or motorized zoom for those cameras with a viewing area of 50-180 ft. <a className="mr-5 text-green-600 cursor-pointer hover:text-green-500">Click here to see the difference.</a></p>

                    <div className="mt-7 text-right">
                        <a className="mr-5 text-green-600 cursor-pointer hover:text-green-500">How are my camera lenses automatically chosen?</a>
                    </div>
                </div>
            </div>

            <p className="text-2xl font-light my-10">
                <span className="text-green-700">&#8594;</span> Select <span className="text-green-600 font-normal">manual</span> or <span className="text-green-600 font-normal">motorized</span> zoom lens for  the remaining cameras.
            </p>

            <div className="flex flex-row justify-around items-start mt-10">
                {cameras.outdoor.length != 0 &&
                    <div className="border rounded p-5">
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
                                            <p className="font-light mb-3">Viewing Area: {camera.viewingArea}</p>
                                            <CameraLensDropdown 
                                                indoorOrOutdoor={'outdoor'}
                                                camera={camera} 
                                                index={index} 
                                                selectCameraLens={selectCameraLens}
                                            />
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
                
                {cameras.indoor.length != 0 &&
                    <div className="border rounded p-5">
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
                                        <p className="font-light mb-3">Viewing Area: {camera.viewingArea}</p>
                                        <CameraLensDropdown 
                                            indoorOrOutdoor={'indoor'}
                                            camera={camera} 
                                            index={index} 
                                            selectCameraLens={selectCameraLens}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>

        </section>
    )
}