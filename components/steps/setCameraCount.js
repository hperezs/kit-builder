import { GrAdd } from 'react-icons/gr'
import { BiCameraHome } from 'react-icons/bi'
import { AiOutlineMinus } from 'react-icons/ai'
import Image from 'next/image'

export default function SetCameraCount({
    cameras, 
    indoorSelected, 
    outdoorSelected, 
    incrementOutdoorCount, 
    incrementIndoorCount, 
    decrementOutdoorCount, 
    decrementIndoorCount}) {

    return (
        <section className="my-10 ">
            <p className="mb-10">You can always come back to this step and change the quantities.</p>

            {/* Outdoor Cameras */}
            <div className={
                "flex flex-row items-center mb-10 " + (
                outdoorSelected ? '' : 'hidden'
            )
            }>
                <div className="flex flex-col w-2/12 items-center">
                    <span className="text-xl text-gray-700">Outdoors:</span>
                    <div className="flex flex-row justify-center mt-4 w-full" >
                        {/* Remove Camera button */}
                        <button 
                            className="flex flex-row justify-center mr-3 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                            onClick={decrementOutdoorCount}
                        >
                            <div className="p-2 flex flex-col justify-center items-center border rounded border-gray-300 hover:shadow-md hover:border-green-300 cursor-pointer ">
                                <span className="text-lg"><AiOutlineMinus /></span>
                            </div>
                        </button>

                        {/* Add camera button */}
                        <button 
                            className="flex flex-row justify-center focus:outline-none focus:border-green-300 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                            onClick={incrementOutdoorCount}
                        >
                            <div className="p-2 flex flex-col justify-center items-center border rounded border-gray-300 hover:shadow-md hover:border-green-300 cursor-pointer ">
                                <span className="text-lg"><GrAdd /></span>
                            </div>
                        </button>
                    </div>
                </div>

                

                <div className="flex flex-row flex-wrap items-center w-10/12 border border-gray-300 rounded">
                    {/* List Cameras */}
                    {(cameras.outdoor.length == 0 ? 
                        <div className="flex flex-row justify-center flex-wrap mt-4">
                            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">

                                <p className="mt-3 text-center">No cameras <br/>yet.</p>
                            </div>
                        </div>
                    : 
                        cameras.outdoor.map((camera, index) => {
                            return(
                                <div className="flex flex-row justify-center flex-wrap mt-4">
                                    <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                    {
                                        (camera.housing == '') ? <span className="text-2xl"><BiCameraHome /></span> :
                                        <Image src={`/images/${camera.housing}-style.png`} width={80} height={57}/>
                                    }
                                        <p className="mt-3">Camera {index + 1} </p>
                                    </div>
                                </div>
                            )})
                    )}

                </div> 
            </div>

            {/* Indoor Cameras */}
            <div className={
                "flex flex-row items-center " + (
                indoorSelected ? '' : 'hidden'
            )
            }>
                <div className="flex flex-col w-2/12 items-center">
                    <span className="text-xl text-gray-700">Indoors:</span>
                    <div className="flex flex-row justify-center mt-4 w-full" >
                        {/* Remove Camera button */}
                        <button 
                            className="flex flex-row justify-center mr-3 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                            onClick={decrementIndoorCount}
                        >
                            <div className="p-2 flex flex-col justify-center items-center border rounded border-gray-300 hover:shadow-md hover:border-green-300 cursor-pointer ">
                                <span className="text-lg"><AiOutlineMinus /></span>
                            </div>
                        </button>

                        {/* Add camera button */}
                        <button 
                            className="flex flex-row justify-center focus:outline-none focus:border-green-300 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                            onClick={incrementIndoorCount}
                        >
                            <div className="p-2 flex flex-col justify-center items-center border rounded border-gray-300 hover:shadow-md hover:border-green-300 cursor-pointer ">
                                <span className="text-lg"><GrAdd /></span>
                            </div>
                        </button>
                    </div>
                </div>

                

                <div className="flex flex-row flex-wrap items-center w-10/12 border border-gray-300 rounded">
                    {/* List Cameras */}
                    {(cameras.indoor.length == 0 ? 
                        <div className="flex flex-row justify-center flex-wrap mt-4">
                            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">

                                <p className="mt-3 text-center">No cameras <br/>yet.</p>
                            </div>
                        </div>
                    : 
                        cameras.indoor.map((camera, index) => {
                            return(
                                <div className="flex flex-row justify-center flex-wrap mt-4">
                                    <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                    {
                                        (camera.housing == '') ? <span className="text-2xl"><BiCameraHome /></span> :
                                        <Image src={`/images/${camera.housing}-style.png`} width={80} height={57}/>
                                    }
                                        <p className="mt-3">Camera {index + 1} </p>
                                    </div>
                                </div>
                            )})
                    )}
                </div> 

            </div>
        </section>
    )
}
