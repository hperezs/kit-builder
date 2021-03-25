import { useState } from "react"
import { BiEditAlt, BiCheck } from 'react-icons/bi' 
import { IoMdClose } from 'react-icons/io'
import ViewingAreaDropdown from './dropdowns/viewingAreaDropdown' 
import CameraLensDropdown from './dropdowns/cameraLensDropdown'
import NightVisionDropdown from './dropdowns/nightVisionDropdown'
import RecommendedCameras from "./RecommendedCameras"
import SelectHousing from "./SelectHousing"

export default function AddNewCamera({displayAddNewCamera , allProducts, selectNewCamera, isAddingNewCamera, setIsAddingNewCamera, lastIndex}) {
    const [isEditingName, setIsEditingName] = useState(false);

    const [cameraHousing, setCameraHousing] = useState('');
    const [cameraName, setCameraName] = useState('Camera Name');
    const [viewingArea, setViewingArea] = useState('');
    const [cameraLens, setCameraLens] = useState('');
    const [nightVisionDist, setNightVisionDist] = useState('');

    const handleNameChanges = event => {
        setCameraName(event.target.value);
    }

    const cancelChanges = () => {
        setIsEditingName(false);
    }

    const saveChanges = event => {
        setIsEditingName(false);
    }

    const selectInputValue = event => {
        event.target.select();
    }

    const listenForEnterKey = event => {
        if(event.keyCode === 13) {
            saveChanges();
        }
    }

    const handleSelect = camera => {
        let new_camera = camera;
        new_camera.cameraName = (cameraName != 'Camera Name' ? cameraName : 'Camera ' + lastIndex);
        setIsAddingNewCamera(false);
        selectNewCamera(new_camera);

        // Clear to default
        setCameraName('Camera Name');
        setCameraHousing('');
        setViewingArea('');
        setCameraLens('');
        setNightVisionDist('');
    }

    if(isAddingNewCamera) return(
        <section className="border rounded p-10 my-10 flex flex-row items-center ease-linear transition-all duration-150 ">
            <div className="flex-shrink-0 min-w-min">
                <SelectHousing cameraHousing={cameraHousing} setCameraHousing={setCameraHousing} />
                {isEditingName ? 
                    <div className="flex flex-row justify-center">
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
                    </div>
                :
                    <p className="mt-3 text-center">{cameraName} <BiEditAlt onClick={e => setIsEditingName(true)} className="inline cursor-pointer text-lg mb-1 ml-2" /></p>    
                }
            </div>
            {/* Inputs */}
            <div className="w-max flex flex-col justify-center ml-7 h-full p-4 border rounded">
                <div className="mb-3 flex flex-row justify-between items-center">
                    <span>Viewing Area: </span>
                    <ViewingAreaDropdown viewingArea={viewingArea} setViewingArea={setViewingArea} cameraHousing={cameraHousing}/>
                </div>
                <div className="mb-3 flex flex-row justify-between items-center">
                    <span>Camera Lens:</span>
                    <CameraLensDropdown
                        cameraLens={cameraLens}
                        setCameraLens={setCameraLens} 
                        viewingArea={viewingArea} 
                    />
                </div>
                <div className="flex flex-row justify-between items-center">
                    <span>Night Vision:</span>
                    <NightVisionDropdown 
                        viewingArea={viewingArea} 
                        cameraHousing={cameraHousing}
                        nightVisionDist={nightVisionDist}
                        setNightVisionDist={setNightVisionDist}
                    />
                </div>
            </div>

            {/* Recommended Cameras */}
            <div>
                <RecommendedCameras 
                    allProducts={allProducts} 
                    cameraHousing={cameraHousing}
                    cameraLens={cameraLens}
                    nightVisionDist={nightVisionDist}
                    handleSelect={handleSelect}
                />
            </div>
        </section>
    ) 
    else return (<></>)
}