import Image from 'next/image'
import { useState } from 'react';
import ReactLoading from 'react-loading'
import {backstreet_domain} from '../../../lib/backstreet_domain'

export default function Monitors({monitorProducts, addMonitor, addHDMI}) {
    const [isLoading, setIsLoading] = useState(true);

    const handleSelect = product => {
        if(product.sku == 'HDMI-Cable') {
            addHDMI(product)
        } else {
            addMonitor(product)
        }
    }

    const card_styles = "relative flex flex-col justify-start items-center my-10 mx-3 rounded p-3 bg-white border shadow-xl hover:border-green-300 "
    const selectButton_styles = "px-5 py-1 border rounded bg-green-600 text-white text-sm uppercase tracking-wider font-semibold mt-3 transition hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";

    return(
        <section className="mt-5">
            <p className="text-center text-lg">Video Recorders do not include a monitor, so it is recommended that you purchase one.</p>
            <div transition-style="in:wipe:right" className="mt-10 border rounded p-10 bg-gray-100">
                <div className="flex flex-row justify-center">
                    {monitorProducts.length != 0 &&
                        monitorProducts.map((product, index) => {
                            return(
                                <div 
                                    transition-style="fade:in"
                                    className={card_styles}
                                    key={index}
                                >
                                    <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                        <div className={"flex flex-row justify-center items-center " + (!isLoading ? 'hidden' : '')} style={{height: '86px', width: '120px'}}>
                                            <ReactLoading type="spin" color="#a6e3b6" />
                                        </div>
                                        <div style={(isLoading ? {height: '0px', width: '0px'} : {height: '86px', width: '120px'})}> 
                                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                                <Image
                                                    src={backstreet_domain + '/pub/media/catalog/product' + product.media_gallery_entries[0].file}
                                                    layout="fill"
                                                    objectFit="contain"
                                                    quality={20}
                                                    onLoad={e => setTimeout(() => {setIsLoading(false)}, Math.floor(Math.random() * 2000))}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p>{product.name}</p>
                                        <p className="font-light">{product.sku} </p>
                                        <p className="font-normal text-green-600">${product.price.toFixed(2)}</p>
                                        <button className={selectButton_styles} onClick={e => handleSelect(product)}>Add to cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Selected Items */}
        </section>
        
    )
}