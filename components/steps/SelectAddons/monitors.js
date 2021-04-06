import Image from 'next/image'
import { useState } from 'react';
import ReactLoading from 'react-loading'
import {backstreet_domain} from '../../../lib/backstreet_domain'
import {FiPlus} from 'react-icons/fi'
import {FaTrashAlt} from 'react-icons/fa'

export default function Monitors({monitorProducts, addMonitor, addHDMI, selectedMonitor, deleteMonitor, deleteHDMI}) {
    const [isLoading, setIsLoading] = useState(true);
    const [isChoosing, setIsChoosing] = useState(selectedMonitor == '');
    const [isAddingHDMI, setIsAddingHDMI] = useState(false);
    const [selectedHDMI, setSelectedHDMI] = useState(selectedMonitor.cable);

    const handleSelect = product => {
        if(product.sku == 'HDMI-Cable') {
            addHDMI(product);
            setSelectedHDMI(product);
            setIsAddingHDMI(false);
        } else {
            addMonitor(product);
            setIsChoosing(false);
        }
    }

    const card_styles = "relative flex flex-col justify-start items-center my-10 mx-3 rounded px-3 py-5 bg-white border shadow-xl hover:border-green-300 "
    const selectButton_styles = "px-5 py-1 mb-4 border rounded bg-green-600 text-white text-sm uppercase tracking-wider font-semibold mt-3 transition hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";

    return(
        <section className="mt-5">
            <p className="text-center text-lg">Video Recorders do not include a monitor, so it is recommended that you purchase one.</p>
            {isChoosing &&
            <div transition-style="in:wipe:right" className="mt-10 border rounded p-10 bg-gray-100">
                <div className="flex flex-row justify-center">
                    {monitorProducts.length != 0 &&
                        monitorProducts.map((product, index) => {
                            if(product.sku.includes('MON'))return(
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
            </div>}

            {/* Selected Items */}
            {!isChoosing && 
            <div transition-style="in:square:center" className="flex flex-col items-center mt-10 border border-gray-300 rounded p-10 shadow">
                <h4 className="font-light text-xl">Your selection:</h4>
                <div className="flex flex-row justify-center items-center">
                    {/* Selected Monitor */}
                    {selectedMonitor != '' &&
                        <div 
                            transition-style="fade:in"
                            className={card_styles + 'border-green-400'}
                        >
                            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded bg-white border-gray-300 ">
                                <div className={"flex flex-row justify-center items-center " + (!isLoading ? 'hidden' : '')} style={{height: '86px', width: '120px'}}>
                                    <ReactLoading type="spin" color="#a6e3b6" />
                                </div>
                                <div style={(isLoading ? {height: '0px', width: '0px'} : {height: '86px', width: '120px'})}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <Image
                                            src={backstreet_domain + '/pub/media/catalog/product' + selectedMonitor.media_gallery_entries[0].file}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={20}
                                            onLoad={e => setTimeout(() => {setIsLoading(false)}, Math.floor(Math.random() * 2000))}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center mt-3 mb-4">
                                <p>{selectedMonitor.name}</p>
                                <p className="font-light">{selectedMonitor.sku} </p>
                                <p className="font-normal text-green-600">${selectedMonitor.price.toFixed(2)}</p>
                            </div>
                            <span
                                onClick={e => {setIsChoosing(true); deleteMonitor()}}
                                className={"absolute bottom-0 right-0 cursor-pointer p-2 "}
                            >
                                <FaTrashAlt className="fill-current text-red-600 text-xl hover:text-red-400"/>
                            </span>
                        </div>
                    }
                    {/* Add HDMI Button */}
                    {!selectedMonitor?.cable && !isAddingHDMI && 
                        <div
                            transition-style="fade:in" 
                            className="m-4 p-6 flex flex-col justify-center bg-white shadow-lg items-center rounded border border-gray-300 cursor-pointer hover:shadow-xl hover:border-green-500"
                            onClick={e => {setIsAddingHDMI(true);}}
                        >
                            <span className="text-5xl my-6 text-green-600 opacity-90"><FiPlus /></span>
                            <p className="text-lg my-3 text-green-600">Add an HDMI cable</p>
                        </div>
                    }
                    {/* HDMI option */}
                    {isAddingHDMI && 
                        <div 
                            transition-style="fade:in"
                            className={card_styles}
                        >
                            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded bg-white border-gray-300 ">
                                <div className={"flex flex-row justify-center items-center " + (!isLoading ? 'hidden' : '')} style={{height: '86px', width: '120px'}}>
                                    <ReactLoading type="spin" color="#a6e3b6" />
                                </div>
                                <div style={(isLoading ? {height: '0px', width: '0px'} : {height: '86px', width: '120px'})}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <Image
                                            src={backstreet_domain + '/pub/media/catalog/product' + monitorProducts[0].media_gallery_entries[0].file}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={20}
                                            onLoad={e => setTimeout(() => {setIsLoading(false)}, Math.floor(Math.random() * 2000))}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <p>{monitorProducts[0].name}</p>
                                <p className="font-light">{monitorProducts[0].sku} </p>
                                <p className="font-normal text-green-600">${monitorProducts[0].price.toFixed(2)}</p>
                                <button className={selectButton_styles} onClick={e => handleSelect(monitorProducts[0])}>Add to cart</button>
                            </div>
                        </div>
                    }
                    {/* Selected HDMI */}
                    {selectedMonitor?.cable && 
                        <div 
                            transition-style="fade:in"
                            className={card_styles + 'border-green-400'}
                        >
                            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded bg-white border-gray-300 ">
                                <div className={"flex flex-row justify-center items-center " + (!isLoading ? 'hidden' : '')} style={{height: '86px', width: '120px'}}>
                                    <ReactLoading type="spin" color="#a6e3b6" />
                                </div>
                                <div style={(isLoading ? {height: '0px', width: '0px'} : {height: '86px', width: '120px'})}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <Image
                                            src={backstreet_domain + '/pub/media/catalog/product' + selectedMonitor.cable.media_gallery_entries[0].file}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={20}
                                            onLoad={e => setTimeout(() => {setIsLoading(false)}, Math.floor(Math.random() * 2000))}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center mt-3 mb-4 mx-2">
                                <p>{selectedMonitor.cable.name}</p>
                                <p className="font-light">{selectedMonitor.cable.sku}</p>
                                <p className="font-normal text-green-600">${selectedMonitor.cable.price.toFixed(2)}</p>
                            </div>
                            <span
                                onClick={e => {deleteHDMI(); setSelectedHDMI(null)}}
                                className={"absolute bottom-0 right-0 cursor-pointer p-2 "}
                            >
                                <FaTrashAlt className="fill-current text-red-600 text-xl hover:text-red-400"/>
                            </span>
                        </div>
                    }
                </div>
                {!isChoosing &&
                <button 
                    onClick={e => setIsChoosing(true)}
                    className="uppercase text-sm tracking-wide font-semibold text-green-600 border border-green-600 my-2 px-3 py-2 rounded hover:text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-500">
                    Change
                </button>}
            </div>
            }
        </section>
        
    )
}