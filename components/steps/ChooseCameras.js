import { useEffect, useState } from "react"
import AddNewCamera from "./AddNewCamera";
import Instructions from "./instructions";
import Camera from "./Camera";

export default function ChooseCameras({allProducts, selectNewCamera, cameras, deleteCamera, updateCameraName}) {
    const [isAddingNewCamera, setIsAddingNewCamera] = useState(true);

    useEffect(() => {
        if(cameras.length != 0) {
            setIsAddingNewCamera(false);
        }
    }, [])

    const addCameraButton_styles = "mr-5 px-5 uppercase font-bold text-sm py-3 bg-green-600 text-white rounded hover:bg-green-500 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 transition-colors duration-300 ease";
    const editButton_styles = "px-3 py-1 uppercase font-bold border rounded bg-yellow-500 text-white text-sm mb-3 transition hover:bg-yellow-400 focus:outline-none focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-500 ";

    return(
        <section className="my-10 relative">
            <div className="flex flex-row justify-center">
                <button 
                    onClick={e => setIsAddingNewCamera(true)}
                    className={addCameraButton_styles + (isAddingNewCamera ? 'hidden' : '')}
                >
                    Add a camera
                </button>

                <Instructions />
            </div>
            

            <AddNewCamera 
                displayAddNewCamera={true} 
                allProducts={allProducts} 
                selectNewCamera={selectNewCamera} 
                isAddingNewCamera={isAddingNewCamera} 
                setIsAddingNewCamera={setIsAddingNewCamera}
                lastIndex={cameras?.length + 1} 
            />

            {/* Camera List */}
            {cameras.length != 0 &&
                <section 
                    transition-style="in:wipe:right"
                    className="mt-20 border rounded shadow">
                    <div className="flex flex-row justify-start border-b bg-white pt-5 px-5">
                        <span className="text-xl mb-5">Your cameras</span>
                    </div>
                    <div className="flex flex-row justify-start items-center flex-wrap p-5 bg-gray-200">
                        {
                            cameras.map((camera, index) => {
                                return(
                                    <Camera 
                                        camera={camera} 
                                        key={index} 
                                        index={index} 
                                        updateCameraName={updateCameraName}
                                        deleteCamera={deleteCamera}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            }
            
        </section>
    )
}
