import ChooseCable from "./ChooseCables/chooseCable"
import SelfMadeProduct from "./ChooseCables/selfMadeProduct"
import { useState } from "react"
import SelectedSelfMadeProduct from "./ChooseCables/selectedSelfMadeProduct"
import { useEffect } from "react/cjs/react.development";


export default function ChooseCables({
    cablesType, 
    cameras, 
    indoorCables, 
    outdoorCables, 
    selfMadeProducts, 
    selectCable, 
    selectSMProducts, 
    selectedSMProducts,
    deleteCamera,
    updateCameraName,
    deleteSMProduct,
    updateSMProductQuantity
}) {

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setIsEditing(false);
    }, [selectedSMProducts])

    if(cablesType == 'pre-made')return(
        <section className="my-10">
            <div className="flex flex-row items-start justify-start flex-wrap">
                {cameras.length != 0 && 
                    cameras.map((camera, index) => {
                        return (
                            <ChooseCable 
                                camera={camera} 
                                index={index} 
                                key={index} 
                                indoorCables={indoorCables} 
                                outdoorCables={outdoorCables} 
                                selectCable={selectCable}
                                deleteCamera={deleteCamera}
                                updateCameraName={updateCameraName}
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
                                            isEditing={isEditing} 
                                            deleteSMProduct={deleteSMProduct} 
                                            updateSMProductQuantity={updateSMProductQuantity}
                                            key={index} 
                                        />
                                    )
                                })}
                        </div>
                        {!isEditing &&
                        <button 
                            onClick={e => setIsEditing(true)}
                            className="uppercase text-sm tracking-wide font-semibold text-yellow-600 border border-yellow-600 my-2 px-3 py-2 rounded hover:text-white hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-opacity-500">
                            Edit
                        </button>}
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