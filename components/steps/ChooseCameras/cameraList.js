import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function CameraList({cameras}) {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [outdoorCalculatedList, setOutdoorCalculatedList] = useState([])
    const [indoorCalculatedList, setIndoorCalculatedList] = useState([])

    const backstreet_domain = 'https://staging3.entretek.com';

    useEffect(() => {
        fetch('/api/getAllProducts')
            .then(response => {
                response.json().then(data => {
                    console.log(data);
                    setAllProducts(data);
                })
            })
    }, [])

    useEffect(() => {
        if (allProducts.length != 0) {
            // Outdoor cameras
            let outdoor_calculated_list = cameras?.outdoor.map((camera, index) => {
                let allProductsCopy = allProducts;
                console.log(camera);
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
            console.log(outdoor_calculated_list);
            setOutdoorCalculatedList(outdoor_calculated_list);

            // Indoor Cameras
            let indoor_calculated_list = cameras?.indoor.map((camera, index) => {
                let allProductsCopy = allProducts;
                console.log(allProductsCopy);
                let filteredProducts = allProductsCopy.filter(product => {
                                            return(
                                                (camera.housing == product.housingStyle) &&
                                                ((camera.cameraLens == product.cameraLens) &&
                                                (camera.nightVisionDist == product.nightVision) )
                                            )
                                        })
                return([camera].concat(filteredProducts))
            })
            console.log(indoor_calculated_list);
            setIndoorCalculatedList(indoor_calculated_list);
            
        }
        
    }, [allProducts])


    return(
        <section>
            <div className="flex flex-col justify-center items-start mt-10">
                <div className="flex flex-col justify-center items-start my-10 w-full">
                    {/* Outdoor */}
                    <h3 className="text-2xl pb-3 text-center w-full">Outdoor Cameras</h3>
                    { outdoorCalculatedList.length != 0 &&
                        outdoorCalculatedList.map((cameraArray, index) => (
                            <div className="flex flex-row justify-start items-center border-b border-gray-300 py-10 w-full overflow-x-auto">
                                {cameraArray.map((camera, index) => {
                                    if(index == 0) return(
                                        <div className="mt-3 mr-10 flex-shrink-0">
                                            <p className="text-center text-lg">{camera.name} </p>
                                            <div className="flex flex-col justify-start items-center flex-wrap ">
                                                <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                                    <div style={{height: '66px', width: '100px'}}> 
                                                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                            <Image
                                                                src={`/images/${camera.housing}-style.png`}
                                                                layout="fill"
                                                                objectFit="contain"
                                                                quality={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <p className="font-light mb-1">Viewing Area: {camera.viewingArea}</p>
                                                    <p className="font-light mb-1">Lens: {camera.cameraLens}</p>
                                                    <p className="font-light mb-1">Night Vision: {camera.nightVisionDist}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                    else return(
                                        <div className="flex flex-col justify-start items-center flex-wrap mt-4 mx-3 border rounded p-3 cursor-pointer hover:shadow-lg hover:border-green-300 ">
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
                                                <p className={"font-light mb-1 text-blue-600 " + (camera.hasAudio ? '' : 'hidden')}>Built-in Microphone</p>
                                                <p className="font-normal text-green-600">${camera.price?.$numberDecimal}</p>
                                            </div>
                                        </div>
                                    )
                                    })}
                            </div>
                        ))
                    }
                </div>
                
                <div className="flex flex-col justify-center items-start my-10 w-full">
                    {/* Indoor */}
                    <h3 className="text-2xl pb-3 text-center w-full">Indoor Cameras</h3>
                    { indoorCalculatedList.length != 0 &&
                        indoorCalculatedList.map((cameraArray, index) => (
                            <div className="flex flex-row justify-start items-center border-b mb-5 pb-10 w-full">
                                {cameraArray.map((camera, index) => {
                                    if(index == 0) return(
                                        <div className="mt-3 mr-10">
                                            <p className="text-center text-lg">{camera.name} </p>
                                            <div className="flex flex-col justify-start items-center flex-wrap ">
                                                <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                                    <Image src={`/images/${camera.housing}-style.png`} width={80} height={57}/>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <p className="font-light mb-1">Viewing Area: {camera.viewingArea}</p>
                                                    <p className="font-light mb-1">Lens: {camera.cameraLens}</p>
                                                    <p className="font-light mb-1">Night Vision: {camera.nightVisionDist}</p>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    )

                                    else return(
                                        <div className="flex flex-col justify-start items-center flex-wrap mt-4 mx-3 border rounded p-3 cursor-pointer hover:shadow-lg hover:border-green-300 ">
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
                                                <p className="font-normal text-green-600">${camera.price?.$numberDecimal}</p>
                                            </div>
                                        </div>
                                    )
                                    })}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}