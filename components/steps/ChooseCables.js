import ChooseCable from "./ChooseCables/chooseCable"
import SelfMadeProduct from "./ChooseCables/selfMadeProduct"
import { useState, useEffect } from "react"
import SelectedSelfMadeProduct from "./ChooseCables/selectedSelfMadeProduct"

export default function ChooseCables({
    cablesType, 
    cameras, 
    selectedNVR,
    indoorCables, 
    outdoorCables, 
    selfMadeProducts, 
    selectCable, 
    deleteCable,
    selectSMProducts, 
    selectedSMProducts,
    deleteCamera,
    updateCameraName,
    deleteSMProduct,
    updateSMProductQuantity,
    duplicateCamera
}) {

    const [isEditing, setIsEditing] = useState(false);

    if(cablesType == 'pre-made')return(
        <section className="my-10">
            <div className="flex flex-row items-start justify-start flex-wrap">
                {selectedNVR != '' && 
                    <ChooseCable 
                        camera={null} 
                        selectedNVR={selectedNVR}
                        indoorCables={indoorCables} 
                        outdoorCables={outdoorCables} 
                        selectCable={selectCable}
                        deleteCable={deleteCable}
                    />
                }

                {cameras.length != 0 && 
                    cameras.map((camera, index) => {
                        return (
                            <ChooseCable 
                                camera={camera} 
                                selectedNVR={null}
                                index={index} 
                                key={index} 
                                indoorCables={indoorCables} 
                                outdoorCables={outdoorCables} 
                                selectCable={selectCable}
                                deleteCable={deleteCable}
                                deleteCamera={deleteCamera}
                                updateCameraName={updateCameraName}
                                duplicateCamera={duplicateCamera}
                                lastIndex={cameras?.length}
                            />
                        )
                    })
                }
            </div>
            
        </section>
    )

    if(cablesType == 'self-made')return(
        <section className="my-10">
            <div transition-style="in:wipe:right" className="flex justify-center bg-gray-100">
                {selfMadeProducts.map((product, index) => {
                    return <SelfMadeProduct product={product} selectSMProducts={selectSMProducts} key={index}/>
                })}
            </div>

           {selectedSMProducts.length != 0 && 
                <div className="flex justify-center mt-10">
                    <div className="flex flex-col items-center border rounded py-3 px-10 shadow-xl">
                        <h4 className="font-light text-xl mb-4">Your selections: </h4>
                        <div className="flex justify-center ">
                                {selectedSMProducts.map((product, index) => {
                                    return(
                                        <SelectedSelfMadeProduct 
                                            product={product} 
                                            index={index} 
                                            deleteSMProduct={deleteSMProduct} 
                                            updateSMProductQuantity={updateSMProductQuantity}
                                            key={index} 
                                        />
                                    )
                                })}
                        </div>
                        {isEditing &&
                        <button 
                            onClick={e => setIsEditing(false)}
                            className="uppercase text-sm tracking-wide font-semibold text-red-600 border border-red-600 my-2 px-3 py-2 rounded hover:text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-500">
                            Cancel
                        </button>}
                    </div>
            
                </div>
            }
        </section>
    )
    
}