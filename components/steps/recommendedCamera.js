import ReactLoading from 'react-loading'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { backstreet_domain } from '../../lib/backstreet_domain'

export default function RecommendedCamera({camera, handleSelect}) {
    const [isLoading, setIsLoading] = useState(false);
    const [onLoadCount, setOnLoadCount] = useState(0);

    useEffect(() => {
        setIsLoading(true);
    }, [camera])

    const handleOnLoad = () => {
        // Nextjs calls onLoad twice apparently, so I'm waiting for the second time to setIsLoading to true when it is actually done loading
        console.log('On load ran for ' + camera.sku + ' count: ' + onLoadCount)
        if(onLoadCount == 0) {
            setOnLoadCount(onLoadCount + 1)
        }
        if(onLoadCount == 1) {
            setIsLoading(false);
            setOnLoadCount(0);
        }
    }

    const addToCart_styles = "px-3 py-1 border rounded bg-green-600 text-white text-sm uppercase tracking-wider font-semibold mt-3 transition hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";

    return(
        <div 
            transition-style="in:wipe:down"
            className="flex flex-col justify-start items-center flex-wrap my-10 mx-3 bg-white border rounded p-3 hover:shadow-lg hover:border-green-300 "
        >
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
                            onLoad={e => setTimeout(() => {setIsLoading(false)}, Math.floor(Math.random() * 2000))}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="">{camera.name} </p>
                <p className="font-light mb-1">Lens: {camera.cameraLens}</p>
                <p className="font-light mb-1">Night Vision: {camera.nightVision}</p>
                <p className={"font-light mb-1 " + (camera.resolution == '4K' ? 'text-yellow-600' : '')}>Resolution: {camera.resolution}</p>
                <p className={"font-light mb-1 " + (camera.audio != 'No Audio' ? 'text-blue-600' : '')}>{camera.audio}</p>
                <p className="font-bold mb-1 text-red-500">Save 20% @ Checkout</p>
                <p className="font-normal text-green-600">${parseFloat(camera.price?.$numberDecimal).toFixed(2)}</p>
                <button className={addToCart_styles} onClick={e => handleSelect(camera)}>Select</button>
                <a href={backstreet_domain + camera.productLink} target="_blank" className="font-light mt-2 text-green-600 hover:text-green-400">See more details</a>
            </div>
        </div>
    )
}