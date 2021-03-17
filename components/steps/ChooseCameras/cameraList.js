import Image from 'next/image'

export default function CameraList({cameras}) {

    return(
        <section>
            <div className="flex flex-col justify-center items-start mt-10">
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
                                        <p className="font-light mb-1">Camera Lens: {camera.cameraLens}</p>
                                        <p className="font-light mb-1">Night Vision: {camera.nightVisionDist}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <div className="flex flex-col justify-center items-center ml-7 mt-10 ">
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
                                    <p className="font-light mb-1">Camera Lens: {camera.cameraLens}</p>
                                    <p className="font-light mb-1">Night Vision: {camera.nightVisionDist}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}