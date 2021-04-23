import { useState } from 'react'
import { backstreet_domain } from '../../lib/backstreet_domain'
import { BiEditAlt, BiCheck } from 'react-icons/bi' 
import { IoMdClose } from 'react-icons/io'
import {FaTrashAlt, FaEdit, FaCheckCircle} from 'react-icons/fa'
import Image from 'next/image'

export default function Camera({camera, index, updateCameraName, deleteCamera}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(camera.cameraName);
    const [isBeingDeleted, setIsBeingDeleted] = useState(false);

    const handleNameChanges = event => {
        setEditedName(event.target.value);
    }

    const cancelChanges = () => {
        setEditedName(camera.cameraName);
        setIsEditing(false);
    }

    const saveChanges = () => {
        updateCameraName(index, editedName);
        setIsEditing(false);
    }

    const listenForEnterKey = event => {
        if(event.keyCode === 13) {
            saveChanges();
            setIsEditing(false);
        }
    }

    const handleDelete = index => {
        setIsEditing(false);
        setIsBeingDeleted(true);

        // Wait for the animation to complete
        setTimeout(() => {deleteCamera(index); setIsBeingDeleted(false)}, 400)
    }

    return(
        <div 
            transition-style={isBeingDeleted ? "out:square:bottom-right" : "fade:in"}
            className={"relative flex flex-col justify-start items-center my-7 mx-3 border rounded p-5 bg-white shadow-xl " + (isEditing ? 'edit-grow overflow-hidden' : '')}
        >
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
            {isEditing ? 
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
                            <div className="flex flex-row justify-center my-3">
                                <button 
                                    onClick={cancelChanges}
                                    className="mx-2 p-1 bg-gray-400 rounded text-white focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
                                >
                                    <IoMdClose />
                                </button>
                                <button 
                                    onClick={saveChanges}
                                    className="mx-2 p-1 bg-green-600 rounded text-white focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
                                >
                                    <BiCheck />
                                </button>
                            </div>
                        </div>
                    </div>
                :
                    <p className="text-lg mb-3 border-b border-gray-500 px-3 italic">{camera.cameraName}</p>
            }
                <p className="">{camera.sku} </p>
                <p className="font-light mb-1">Lens: {camera.cameraLens}</p>
                <p className="font-light mb-1">Night Vision: {camera.nightVision}</p>
                <p className="font-light mb-1">Resolution: {camera.resolution}</p>
                <p className={"font-light mb-1 " + (camera.audio != 'No Audio' ? 'text-blue-600' : '')}>{camera.audio}</p>
                <p className="font-normal text-green-600">${parseFloat(camera.price?.$numberDecimal).toFixed(2)}</p>
            </div>
            <span 
                onClick={e => handleDelete(index)}
                className={"absolute bottom-0 right-0 cursor-pointer p-2 " + (!isEditing ? 'hidden' : '')}
            >
                <FaTrashAlt className="fill-current text-red-600 text-2xl hover:text-red-400"/>
            </span>
            <span 
                onClick={e => setIsEditing(true)}
                className={"absolute top-0 right-0 cursor-pointer p-2 " + (isEditing ? 'hidden' : '')}
            >
                <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
            </span>
        </div>
    )
}