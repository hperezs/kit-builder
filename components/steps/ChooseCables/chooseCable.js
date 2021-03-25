import { useEffect, useState } from "react"
import Image from 'next/image'
import { backstreet_domain } from '../../../lib/backstreet_domain'
import CableProduct from "./cableProduct"
import CableLengthDropdown from "../dropdowns/cableLengthDropdown"
import CableLocationDropdown from '../dropdowns/cableLocationDropdown'
import CableColorDropdown from '../dropdowns/cableColorDropdown'

export default function ChooseCable({camera, indoorCables, outdoorCables, selectCable}) {
    const [cableLength, setCableLength] = useState(25);
    const [indoorOrOutdoor, setIndoorOrOutdoor] = useState('indoor');
    const [cableColor, setCableColor] = useState("White");
    const [selectedCable, setSelectedCable] = useState(camera.cable);

    useEffect(() => {
        if(cableLength == 1000) {
            setCableColor("Black");
        }
    }, [cableLength])

    const handleSelect = cable => {
        let selectedCable = {
            sku: cable.sku,
            name: cable.name,
            price: cable.price,
            imageLink: '/pub/media/catalog/product' + cable.media_gallery_entries[0].file,
        }

        selectCable(selectedCable, camera);
        setSelectedCable(selectedCable);
    }

    const selected_card_styles = "flex flex-col justify-start items-center bg-white mb-3 border-green-400 rounded p-3 border "

    return(
        <div className="flex flex-row justify-start items-center overflow-x-auto mb-10">
            <div className="flex flex-col justify-start items-center flex-wrap mx-3 border rounded p-5 ">
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
                <p className={"text-lg mb-3 border-b border-gray-500 px-3 italic " + (camera.cameraName == '' ? 'hidden' : '')}>{camera.cameraName}</p>
                    <p className="">{camera.sku} </p>
                    <p className="font-light mb-1">Lens: {camera.cameraLens}</p>
                    <p className="font-light mb-1">Night Vision: {camera.nightVision}</p>
                    <p className="font-light mb-1">Resolution: {camera.resolution}</p>
                    <p className={"font-light mb-1 " + (camera.hasAudio ? 'text-blue-600' : '')}>{camera.hasAudio ? 'Built-in Microphone' : ' No Audio'}</p>
                    <p className="font-normal text-green-600">${camera.price?.$numberDecimal}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mr-5">
                <label className="mb-3">Select cable location:</label>
                <CableLocationDropdown setCableLocation={setIndoorOrOutdoor} />
                
                <label className="mt-7 mb-3">Select cable length:</label>
                <CableLengthDropdown setCableLength={setCableLength} indoorOrOutdoor={indoorOrOutdoor}/>

                {(indoorOrOutdoor == 'outdoor' && cableLength != 1000) && 
                    <div className="flex flex-col items-center mt-7">                
                        <label className="mb-3">Select cable color:</label>
                        <CableColorDropdown setCableColor={setCableColor}/>
                    </div>
                }
            </div>
            
            {(indoorCables.length != 0 && indoorOrOutdoor == 'indoor') &&
                <div className="">
                    {indoorCables.map((cable) => {
                        let length = cable.sku.split('-')[1]
                        if(cableLength == length) return(
                            <CableProduct cable={cable} handleSelect={handleSelect}/>
                        )
                    })}
                </div>
            }

            {(outdoorCables.length != 0 && indoorOrOutdoor == 'outdoor') &&
                <div className="flex flex-row justify-start">
                    {outdoorCables.map((cable) => {
                        // White cables have W at the end of the sku so the W has to be cut off first
                        if(cableColor == 'White') {
                            if(cable.sku.split('').splice(-1)[0] == 'W'){
                                console.log(cable.sku);
                                let sku_no_W = cable.sku.split('');
                                sku_no_W.pop();
                                let productLength = sku_no_W.join('').split('6-')[1];
                                console.log(productLength)
                                if((cableLength == productLength)) return <CableProduct cable={cable} handleSelect={handleSelect}/>
                            }
                        } else {
                            // Black cables are fine with this logic
                            let productLength = cable.sku.split('6-')[1]
                            if(cableLength == productLength) return <CableProduct cable={cable} handleSelect={handleSelect}/>    
                        }                        
                    })}
                </div>
            }

            {selectedCable &&
            <div className="flex flex-col justify-center ml-5 p-5 border">
                <p className="font-light text-center text-lg mb-3">Your selection:</p> 
                    <div className={selected_card_styles}>
                        <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 bg-white ">
                            <div style={{height: '86px', width: '120px'}}> 
                                <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                    <Image
                                        src={backstreet_domain + selectedCable.imageLink}
                                        layout="fill"
                                        objectFit="contain"
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>{selectedCable.name}</p>
                            <p className="font-light">{selectedCable.sku} </p>
                            <p className="font-normal text-green-600">${selectedCable.price.toFixed(2)}</p>
                        </div>
                    </div>
            </div>}
        </div>
    )
}