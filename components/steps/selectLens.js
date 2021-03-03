import Image from 'next/image'

export default function SelectLens({ cameras }) {

    return(
        <section className="my-10">
            <p className="text-lg">To select a lens, first we need to know the length of the viewing area.</p>
            <p className="text-2xl font-light my-10"><span className="text-green-700">&#8594;</span> Select the <span className="text-green-600 font-normal">lenght of the viewing area</span> for each of your cameras.</p>

            <div className="flex flex-row justify-between items-start">
                
                <div>
                    {/* Outdoor */}
                    <h3 className="border-b text-lg pb-3 text-center">Outdoor Cameras</h3>
                    {cameras.outdoor.map((camera, index) => {
                        return(
                            <div className="flex flex-row justify-start items-center flex-wrap mt-4">
                                <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                    <Image src={`/images/${camera.housing}-style.png`} width={80} height={57}/>
                                    <p className="mt-3">Camera {index + 1} </p>
                                </div>
                                <select
                                    placeholder="Select"
                                    class="block w-40 h-14 mt-1 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                                    >
                                    <option>Under 50 ft</option>
                                    <option>50-180 ft</option>
                                    <option>200-1000 ft</option>
                                </select>
                            </div>
                        )
                    })}
                </div>
                
                <div>
                    {/* Indoor */}
                    <h3 className="border-b text-lg pb-3 text-center">Indoor Cameras</h3>
                    {cameras.indoor.map((camera, index) => {
                        return(
                            <div className="flex flex-row justify-start items-center flex-wrap mt-4">
                                <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                    <Image src={`/images/${camera.housing}-style.png`} width={80} height={57}/>
                                    <p className="mt-3">Camera {index + 1} </p>
                                </div>
                                <select
                                    placeholder="Select"
                                    class="block w-40 h-14 mt-1 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                                    >
                                    <option>Under 50 ft</option>
                                    <option>50-180 ft</option>
                                </select>
                            </div>
                        )
                    })}
                </div>
                
            </div>

        </section>
    )
}