import Image from 'next/image'
import { GrAdd, GrClose } from 'react-icons/gr'

export default function AddToCamera({ displayAddToCamera, setDisplayAddToCamera, cameras, housingSelected, selectHousing }) {

    return(
        <section className={"relative my-6 border border-gray-300 rounded py-5 " + (displayAddToCamera ? '' : 'hidden')}>
            <span onClick={e => setDisplayAddToCamera(false)} className="absolute top-4 right-4 text-lg text-gray-300 cursor-pointer"><GrClose /></span>

            <p className="mt-3 mb-5 text-xl font-light text-center">Click the camera(s) you wish to select the <span className="text-green-600 font-normal" >{housingSelected}</span> style housing for</p>
            {/* // Outdoor */}
            <div className={"text-center " }>
                <h3 className="text-lg">Outdoor Cameras</h3>
                <div className="flex flex-row justify-center flex-wrap mt-4">
                    {cameras.outdoor.map((camera, index) => {
                        return(
                            <div 
                                className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 hover:shadow-md hover:border-green-300 cursor-pointer "
                                onClick={e => selectHousing('outdoor', index, housingSelected)}    
                            >
                                {(camera.housing == '') ? 
                                    <span className="text-2xl"><GrAdd /></span> : 
                                    <Image src={`/images/${camera.housing}-style.png`} width={80} height={57}/>}
                                
                                <p className="mt-3">Camera {index + 1}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

             {/* // Indoor */}
            <div className={"text-center mt-3 " }>
                <h3 className="text-lg">Indoor Cameras</h3>
                <div className="flex flex-row justify-center flex-wrap mt-4">
                    {cameras.indoor.map((camera, index) => {
                        return(
                            <div 
                                className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 hover:shadow-md hover:border-green-300 cursor-pointer "
                                onClick={e => selectHousing('indoor', index, housingSelected)}    
                            >
                                {(camera.housing == '') ? 
                                    <span className="text-2xl"><GrAdd /></span> : 
                                    <Image src={`/images/${camera.housing}-style.png`} width={80} height={57}/>}
                        
                                <p className="mt-3">Camera {index + 1}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}