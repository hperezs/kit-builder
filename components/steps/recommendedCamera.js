import ReactLoading from 'react-loading'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { backstreet_domain } from '../../lib/backstreet_domain'

export default function RecommendedCamera({camera, handleSelect}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
    }, [camera])

    const addToCart_styles = "px-3 py-1 border rounded bg-green-600 text-white text-sm mt-3 transition hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";

    return(
        <div 
            className="flex flex-col justify-start items-center flex-wrap my-10 mx-3 border rounded p-3 cursor-pointer hover:shadow-lg hover:border-green-300 ">
            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                <div className={"flex flex-row justify-center items-center " + (!isLoading ? 'hidden' : '')} style={{height: '86px', width: '120px'}}>
                    <ReactLoading type="spin" color="#a6e3b6" />
                </div>
                <div style={(isLoading ? {height: '0px', width: '0px'} : {height: '86px', width: '120px'})}> 
                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                        <Image
                            src={backstreet_domain + camera.imageLink}
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                            onLoad={e => setIsLoading(false)}
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
                <button className={addToCart_styles} onClick={e => handleSelect(camera)}>Select Camera</button>
            </div>
        </div>
    )
}