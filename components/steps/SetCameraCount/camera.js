import { BiCameraHome, BiEditAlt, BiCheck } from 'react-icons/bi' 
import { IoMdClose } from 'react-icons/io'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Camera({camera, index, indoorOrOutdoor, submitCameraName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [cameraName, setCameraName] = useState(camera.name);

    const card_styles = "m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ";

    const handleNameChanges = event => {
        setCameraName(event.target.value);
    }

    const cancelChanges = () => {
        setCameraName(camera.name);
        setIsEditing(false);
    }

    const saveChanges = () => {
        submitCameraName(indoorOrOutdoor, cameraName, index);
        setIsEditing(false);
    }

    const selectInputValue = event => {
        event.target.select();
    }

    const listenForEnterKey = event => {
        if(event.keyCode === 13) {
            saveChanges();
        }
    }

    return (
        <div className="flex flex-row justify-center flex-wrap mt-4">
            <div className={card_styles}>
            {
                (camera.housing == '') ? 
                    <span className="text-2xl"><BiCameraHome /></span> 
                :
                    <Image src={`/images/${camera.housing}-style.png`} width={80} height={57}/>
            }
            {
                isEditing ? 
                    <div>
                        <input 
                            type="text" 
                            value={cameraName}
                            onChange={handleNameChanges}
                            className="text-xs border border-gray-400 rounded mt-3 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" 
                            placeholder="Name your camera"
                            autoFocus
                            onFocus={selectInputValue}
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
                :
                    <p className="mt-3">{cameraName} <BiEditAlt onClick={e => setIsEditing(true)} className="inline cursor-pointer text-lg mb-1 ml-2" /></p>    
            }
                
            </div>
        </div>
    )
}