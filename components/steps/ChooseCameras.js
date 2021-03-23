import { useEffect, useState } from "react"
import AddNewCamera from "./AddNewCamera";
import Image from 'next/image'
import { backstreet_domain } from '../../lib/backstreet_domain'
import {FaRegWindowClose} from 'react-icons/fa'

export default function ChooseCameras({allProducts, selectNewCamera, cameras, deleteCamera}) {
    const [isAddingNewCamera, setIsAddingNewCamera] = useState(true);
    const [displayDeleteBtn, setDisplayDeleteBtn] = useState(false);

    useEffect(() => {
        if(cameras.length != 0) {
            setIsAddingNewCamera(false);
        }
    }, [])

    const handleDelete = index => {
        setDisplayDeleteBtn(false);
        deleteCamera(index);
    }

    const addCameraButton_styles = "ml-5 px-5 uppercase font-bold text-sm py-3 bg-green-500 text-white rounded hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";
    const editButton_styles = "px-3 py-1 uppercase font-bold border rounded bg-yellow-500 text-white text-sm mb-3 transition hover:bg-yellow-400 focus:outline-none focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-500 ";

    return(
        <section className="my-10">
            <button 
                onClick={e => setIsAddingNewCamera(true)}
                className={addCameraButton_styles + (isAddingNewCamera ? 'hidden' : '')}
            >
                Add a camera
            </button>

            <AddNewCamera displayAddNewCamera={true} allProducts={allProducts} selectNewCamera={selectNewCamera} isAddingNewCamera={isAddingNewCamera} setIsAddingNewCamera={setIsAddingNewCamera}/>


            {/* Camera List */}
            {cameras.length != 0 &&
                <section className="mt-20 border rounded p-5">
                    <div className="flex flex-row justify-between border-b">
                        <span className="text-xl align-bottom">Your cameras</span>
                        <button className={editButton_styles} onClick={e => setDisplayDeleteBtn(true)}>
                            Edit
                        </button>
                    </div>
                    <div className="flex flex-row justify-start items-center">
                        {
                            cameras.map((camera, index) => {
                                console.log(camera)
                                return(
                                    <div 
                                        className="relative flex flex-col justify-start items-center flex-wrap my-10 mx-3 border rounded p-5 ">
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
                                        <p className={"text-lg mb-3 border-b border-gray-500 px-3 " + (camera.cameraName == '' ? 'hidden' : '')}>{camera.cameraName}</p>
                                            <p className="">{camera.sku} </p>
                                            <p className="font-light mb-1">Lens: {camera.cameraLens}</p>
                                            <p className="font-light mb-1">Night Vision: {camera.nightVision}</p>
                                            <p className="font-light mb-1">Resolution: {camera.resolution}</p>
                                            <p className={"font-light mb-1 " + (camera.hasAudio ? 'text-blue-600' : '')}>{camera.hasAudio ? 'Built-in Microphone' : ' No Audio'}</p>
                                            <p className="font-normal text-green-600">${camera.price?.$numberDecimal}</p>
                                        </div>
                                        <span 
                                            onClick={e => handleDelete(index)}
                                            className={"absolute top-0 right-0 cursor-pointer p-2 " + (!displayDeleteBtn ? 'hidden' : '')}
                                        >
                                            <FaRegWindowClose className="fill-current text-red-600 text-2xl hover:text-red-400"/>
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            }
            
        </section>
    )
}
