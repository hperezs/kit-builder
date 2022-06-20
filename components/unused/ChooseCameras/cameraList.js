import Image from 'next/image'
import { useEffect, useState } from 'react'
import EditCamera from './editCamera';

export default function CameraList({cameras, allProducts}) {
    const [isLoading, setIsLoading] = useState(true);
    const [outdoorCalculatedList, setOutdoorCalculatedList] = useState([])
    const [indoorCalculatedList, setIndoorCalculatedList] = useState([])

    const backstreet_domain = 'https://staging3.entretek.com';

    const edit_styles = "px-3 py-2 border rounded border-green-600 text-green-600 text-sm mt-3 transition hover:bg-green-500 hover:border-green-500 hover:text-white focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50";   
    const addToCart_styles = "px-3 py-1 border rounded bg-green-600 text-white text-sm mt-3 transition hover:bg-green-400 "

    useEffect(() => {
        if (allProducts.length != 0) {
            // Outdoor cameras
            let outdoor_calculated_list = cameras?.outdoor.map((camera, index) => {
                let allProductsCopy = allProducts;
                let filteredProducts = allProductsCopy.filter(product => { 
                                            if(camera.housing == 'bullet' && camera.cameraLens == '2.8-12mm manual') return(
                                                camera.housing == product.housingStyle &&
                                                product.cameraLens == '2.8-12mm manual'
                                            )                                            

                                            if(camera.housing == 'bullet' && camera.cameraLens == '2.8-12mm motorized') return(
                                                camera.housing == product.housingStyle &&
                                                product.cameraLens.includes('motorized')
                                            )
                    
                                            if(camera.housing == 'dome' && camera.cameraLens == '2.8-12mm motorized') return (
                                                camera.housing == product.housingStyle &&
                                                (camera.cameraLens == product.cameraLens || product.cameraLens.includes('motorized'))
                                            )

                                            if(camera.housing == 'dome' && camera.cameraLens == '2.8-12mm manual')return(
                                                camera.housing == product.housingStyle &&
                                                camera.cameraLens == product.cameraLens
                                            )
                                            
                                            if(camera.housing == 'ptz') return (
                                                camera.housing == product.housingStyle && 
                                                camera.nightVisionDist == product.nightVision
                                            )

                                            return(
                                                (camera.housing == product.housingStyle) &&
                                                ((camera.cameraLens == product.cameraLens) &&
                                                (camera.nightVisionDist == product.nightVision) )
                                            )
                                        })
                return([camera].concat(filteredProducts))
            })
            setOutdoorCalculatedList(outdoor_calculated_list);

            // Indoor Cameras
            let indoor_calculated_list = cameras?.indoor.map((camera, index) => {
                let allProductsCopy = allProducts;
                let filteredProducts = allProductsCopy.filter(product => {
                                            return(
                                                (camera.housing == product.housingStyle) &&
                                                ((camera.cameraLens == product.cameraLens) &&
                                                (camera.nightVisionDist == product.nightVision) )
                                            )
                                        })
                return([camera].concat(filteredProducts))
            })
            setIndoorCalculatedList(indoor_calculated_list);
            
        }
        
    }, [allProducts])


    return(
        <section>
            <div className="flex flex-col justify-center items-start mt-10">
                <div className="flex flex-col justify-center items-start my-10 w-full">
                    {/* Outdoor */}
                    { outdoorCalculatedList.length != 0 &&
                        <div className='w-full'>
                            <h3 className="text-2xl pb-3 text-center w-full">Outdoor Cameras</h3>
                            <div className="flex flex-row justify-start w-full overflow-x-auto">
                                <table className="mt-10 pr-10 w-full" >
                                    <tr className="border-b">
                                        <th className="font-normal py-5 border">Your camera(s)</th>
                                        <th className="font-normal py-5 border-t border-r">Recommended camera(s)</th>
                                    </tr>
                                    
                                    {outdoorCalculatedList.map((cameraArray) => (
                                        <tr className="items-center border-b border-gray-300 border-l border-r">
                                            {
                                                <td className="mt-3 mr-10 px-5 py-7 border-r">
                                                    <p className="text-center text-lg">{cameraArray[0].name} </p>
                                                    <div className="flex flex-col justify-start items-center flex-wrap ">
                                                        <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                                            <div style={{height: '66px', width: '100px'}}> 
                                                                <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                                    <Image
                                                                        src={`/images/${cameraArray[0].housing}-style.png`}
                                                                        layout="fill"
                                                                        objectFit="contain"
                                                                        quality={100}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-center">
                                                            <p className="font-light mb-1">Viewing Area: {cameraArray[0].viewingArea}</p>
                                                            <p className="font-light mb-1">Lens: {cameraArray[0].cameraLens}</p>
                                                            <p className="font-light mb-1">Night Vision: {cameraArray[0].nightVisionDist}</p>
                                                            <EditCamera camera={cameraArray[0]}/>
                                                        </div>
                                                    </div>
                                                </td>
                                            }
                                            
                                            <td className="flex flex-row justify-start px-5 overflow-x-auto">
                                                {cameraArray.map((camera, index) => {

                                                    if(index != 0) return(
                                                        <a 
                                                            href={backstreet_domain + camera.productLink}
                                                            target="_blank"
                                                            className="flex flex-col justify-start items-center flex-wrap my-10 mx-3 border rounded p-3 cursor-pointer hover:shadow-lg hover:border-green-300 ">
                                                            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                                                <div style={{height: '86px', width: '120px'}}> 
                                                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                                        <Image
                                                                            src={backstreet_domain + camera.imageLink}
                                                                            layout="fill"
                                                                            objectFit="contain"
                                                                            quality={100}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col items-center">
                                                                <p className="">{camera.sku} </p>
                                                                <p className="font-light mb-1">Lens: {camera.cameraLens}</p>
                                                                <p className="font-light mb-1">Night Vision: {camera.nightVision}</p>
                                                                <p className="font-light mb-1">Resolution: {camera.resolution}</p>
                                                                <p className={"font-light mb-1 " + (camera.hasAudio ? 'text-blue-600' : '')}>{camera.hasAudio ? 'Built-in Microphone' : ' No Audio'}</p>
                                                                <p className="font-normal text-green-600">${camera.price?.$numberDecimal}</p>
                                                                <button className={addToCart_styles}>Add to Cart</button>
                                                            </div>
                                                        </a>
                                                    )
                                                    })}
                                                </td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                    }
                </div>
                
                <div className="flex flex-col justify-center items-start my-10 w-full">
                    {/* Indoor */}
                    { indoorCalculatedList.length != 0 &&
                        <div className='w-full'>
                            <h3 className="text-2xl pb-3 text-center w-full">Indoor Cameras</h3>
                            <div className="flex flex-row justify-center w-full overflow-auto">
                                <table className="mt-10 pr-10 w-full" >
                                    <tr className="border-b">
                                        <th className="font-normal py-5 border">Your camera(s)</th>
                                        <th className="font-normal py-5 border-t border-r">Recommended camera(s)</th>
                                    </tr>
                                    
                                    {indoorCalculatedList.map((cameraArray) => (
                                        <tr className="items-center border-b border-gray-300 overflow-x-auto border-l border-r">
                                            {
                                                <td className="mt-3 mr-10 px-5 py-7 border-r">
                                                    <p className="text-center text-lg">{cameraArray[0].name} </p>
                                                    <div className="flex flex-col justify-start items-center flex-wrap ">
                                                        <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                                            <div style={{height: '66px', width: '100px'}}> 
                                                                <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                                    <Image
                                                                        src={`/images/${cameraArray[0].housing}-style.png`}
                                                                        layout="fill"
                                                                        objectFit="contain"
                                                                        quality={100}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-center">
                                                            <p className="font-light mb-1">Viewing Area: {cameraArray[0].viewingArea}</p>
                                                            <p className="font-light mb-1">Lens: {cameraArray[0].cameraLens}</p>
                                                            <p className="font-light mb-1">Night Vision: {cameraArray[0].nightVisionDist}</p>
                                                            <button className={edit_styles}>Edit this camera</button>
                                                        </div>
                                                    </div>
                                                </td>
                                            }
                                            
                                            <td className="flex flex-row justify-start px-5">
                                                {cameraArray.map((camera, index) => {

                                                    if(index != 0) return(
                                                        <a 
                                                            href={backstreet_domain + camera.productLink}
                                                            target="_blank"
                                                            className="flex flex-col justify-start items-center flex-wrap my-10 mx-3 border rounded p-3 cursor-pointer hover:shadow-lg hover:border-green-300 ">
                                                            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                                                <div style={{height: '86px', width: '120px'}}> 
                                                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                                        <Image
                                                                            src={backstreet_domain + camera.imageLink}
                                                                            layout="fill"
                                                                            objectFit="contain"
                                                                            quality={100}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col items-center">
                                                                <p className="">{camera.sku} </p>
                                                                <p className="font-light mb-1">Lens: {camera.cameraLens}</p>
                                                                <p className="font-light mb-1">Night Vision: {camera.nightVision}</p>
                                                                <p className="font-light mb-1">Resolution: {camera.resolution}</p>
                                                                <p className={"font-light mb-1 " + (camera.hasAudio ? 'text-blue-600' : '')}>{camera.hasAudio ? 'Built-in Microphone' : ' No Audio'}</p>
                                                                <p className="font-normal text-green-600">${camera.price?.$numberDecimal}</p>
                                                                <button className={addToCart_styles}>Add to Cart</button>
                                                            </div>
                                                        </a>
                                                    )
                                                    })}
                                                </td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                    }


                </div>
            </div>
        </section>
    )
}