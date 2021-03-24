import ReactLoading from 'react-loading'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { backstreet_domain } from '../../lib/backstreet_domain'

export default function VideoRecorder({nvr, selectNVR, isRecommended}) {
    const [isLoading, setIsLoading] = useState(true);

    const selectButton_styles = "px-5 py-1 border rounded bg-green-600 text-white text-sm mt-3 transition hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";
    const card_styles = "relative flex flex-col justify-start items-center my-10 mx-3 rounded p-3 cursor-pointer hover:shadow-lg hover:border-green-300 "
    const recommended_styles = "border-2 border-green-300";

    return(
        <div 
            
            className={card_styles + (isRecommended ? recommended_styles : 'border')}>
            <div className={"absolute -top-10 font-light text-xl text-green-600 " + (!isRecommended ? 'hidden' : '')}>Recommended NVR</div>
            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                <div className={"flex flex-row justify-center items-center " + (!isLoading ? 'hidden' : '')} style={{height: '86px', width: '120px'}}>
                    <ReactLoading type="spin" color="#a6e3b6" />
                </div>
                <div style={(isLoading ? {height: '0px', width: '0px'} : {height: '86px', width: '120px'})}> 
                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                        <Image
                            src="/images/nvr-hero.jpg"
                            layout="fill"
                            objectFit="contain"
                            quality={20}
                            onLoad={e => setIsLoading(false)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="">{nvr.sku} </p>
                <p className="font-light mb-1">Supports up to {nvr.channelCount} cameras</p>
                <p className="font-bold mb-1 text-yellow-500"><span className="line-through">${nvr.oldPrice}</span> Save Big!</p>
                <p className="font-normal text-green-600">${nvr.price.$numberDecimal}</p>
                <button className={selectButton_styles} onClick={e => selectNVR(nvr)}>Select</button>
            </div>
        </div>
    )
}