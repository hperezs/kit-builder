import { useState } from 'react'
import { backstreet_domain } from '../../lib/backstreet_domain'
import { BiEditAlt, BiCheck } from 'react-icons/bi' 
import { IoMdClose } from 'react-icons/io'
import {FaRegWindowClose} from 'react-icons/fa'
import Image from 'next/image'

export default function Camera({camera, displayDeleteBtn, index, updateCameraName}) {
    const [isEditingName, setIsEditingName] = useState(false);
    const [editedName, setEditedName] = useState(camera.cameraName);

    const handleNameChanges = event => {
        setEditedName(event.target.value);
    }

    const cancelChanges = () => {
        setEditedName(camera.cameraName);
        setIsEditingName(false);
    }

    const saveChanges = () => {
        updateCameraName(index, editedName)
    }

    const listenForEnterKey = event => {
        if(event.keyCode === 13) {
            saveChanges();
            setIsEditingName(false);
        }
    }

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
            {isEditingName ? 
                    <div className="flex flex-row justify-center">
                        <div>
                            <input 
                                type="text" 
                                value={editedName}
                                onChange={handleNameChanges}
                                className="text-xs border border-gray-400 rounded mt-3 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" 
                                placeholder="Name your camera"
                                autoFocus
                                onFocus={e => e.target.select()}
                                onKeyDown={listenForEnterKey}
                            />
                            <div className="flex flex-row justify-center mt-2">
                                <button 
                                    onClick={cancelChanges}
                                    className="mx-2 p-1 bg-red-500 rounded text-white "
                                >
                                    <IoMdClose />
                                </button>
                                <button 
                                    onClick={saveChanges}
                                    className="mx-2 p-1 bg-green-600 rounded text-white"
                                >
                                    <BiCheck />
                                </button>
                            </div>
                        </div>
                    </div>
                :
                    <p className="text-lg mb-3 border-b border-gray-500 px-3 italic">{camera.cameraName} {displayDeleteBtn && <BiEditAlt onClick={e => setIsEditingName(true)} className="inline cursor-pointer text-lg mb-1 ml-2" />}</p>
            }
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
}