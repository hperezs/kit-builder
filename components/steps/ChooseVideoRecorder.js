import VideoRecorder from "./videoRecorder"
import Image from 'next/image'
import { backstreet_domain } from '../../lib/backstreet_domain'
import { useEffect, useState } from "react";

export default function ChooseVideoRecorder({cameras, videoRecorders, selectedNVR, selectNVR}) {
    const [isChoosing, setIsChoosing] = useState(selectedNVR == '');

    useEffect(() => {
            document.getElementById('#selectedNVR')?.scrollIntoView();
    }, [selectedNVR])

    const handleSelect = nvr => {
        selectNVR(nvr);
        setIsChoosing(false);
    }

    // calculate recommended channel count    
    let recommendedChannelCount = 4;

    if(cameras.length > 4) {
        recommendedChannelCount = 8;
    }
    if(cameras.length > 8) {
        recommendedChannelCount = 16;
    }
    if(cameras.length > 16) {
        recommendedChannelCount = 32;
    }

    const card_styles = "relative flex flex-col justify-start items-center mt-7 mb-4 mx-3 rounded px-3 py-7 "

    return(
        <section className="my-10">
            <p className="text-lg">Select your video recorder according to the number of cameras you are purchasing.</p>

            {isChoosing &&
            <div className="mt-20 border rounded py-10">
                <p className="text-center text-2xl font-light">You have selected <span className="text-green-600 font-normal">{cameras.length}</span> camera(s)</p>
                <div className="mt-10 flex flex-row justify-center">
                    {videoRecorders.length != 0 &&
                        videoRecorders.map((nvr, index) => {
                            return(
                                <VideoRecorder 
                                    key={index} 
                                    nvr={nvr} 
                                    isRecommended={(nvr.channelCount == recommendedChannelCount)} 
                                    handleSelect={handleSelect}
                                />
                            )
                        })
                    }
                </div>
            </div>}

            {!isChoosing &&
                <section id="#selectedNVR" className="flex flex-col items-center justify-center">
                    <div className="mt-10 px-20 py-5 border rounded flex flex-col items-center">
                        <p className="text-center text-2xl font-light">Your selected NVR:</p>
                        <div className={card_styles + 'border'}>
                            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                <div style={{height: '86px', width: '120px'}}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <Image
                                            src={'/images/nvr-hero.jpg'}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={100}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="">{selectedNVR.sku} </p>
                                <p className="font-light mb-1">Supports up to {selectedNVR.channelCount} cameras</p>
                                <p className="font-normal text-green-600">${selectedNVR.price.$numberDecimal}</p>
                            </div>
                        </div>
                        <button 
                            onClick={e => setIsChoosing(true)}
                            className="uppercase text-sm tracking-wide font-semibold text-green-600 border border-green-600 my-2 px-3 py-2 rounded hover:text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-500">
                            Change
                        </button>
                    </div>
                </section>
            }
            
        </section>
    )
}
