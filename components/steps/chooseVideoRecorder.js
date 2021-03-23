import VideoRecorder from "./videoRecorder"
import Image from 'next/image'
import { backstreet_domain } from '../../lib/backstreet_domain'
import { useEffect } from "react";

export default function ChooseVideoRecorder({cameras, videoRecorders, selectedNVR, selectNVR}) {

    useEffect(() => {
            document.getElementById('#selectedNVR')?.scrollIntoView();
    }, [selectedNVR])

    let recommendedChannelCount = 4;

    // calculate recommended channel count
    if(cameras.length > 4) {
        recommendedChannelCount = 8;
    }
    if(cameras.length > 8) {
        recommendedChannelCount = 16;
    }
    if(cameras.length > 16) {
        recommendedChannelCount = 32;
    }

    const card_styles = "relative flex flex-col justify-start items-center my-10 mx-3 rounded px-3 py-7 cursor-pointer hover:shadow-lg hover:border-green-300 "

    return(
        <section className="my-10">
            <p className="text-lg">Select your video recorder according to the number of cameras you are purchasing.</p>

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
                                    selectNVR={selectNVR}
                                />
                            )
                        })
                    }
                </div>
            </div>

            {selectedNVR != '' &&
                <section id="#selectedNVR" className="flex flex-row justify-center">
                    <div className="mt-10 px-20 py-10 border rounded flex flex-col items-center">
                        <p className="text-center text-2xl font-light">Your selected NVR:</p>
                        <div className={card_styles + 'border'}>
                            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                <div style={{height: '86px', width: '120px'}}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <Image
                                            src={backstreet_domain + selectedNVR.imageLink}
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
                    </div>
                </section>
            }
            
        </section>
    )
}
