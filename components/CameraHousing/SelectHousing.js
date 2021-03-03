import AddToCamera from './addToCamera';

export default function SelectHousing({ cameras,  selectHousing, indoorSelected, outdoorSelected }) {


    return(
        <section className={"relative my-6 border border-gray-300 rounded py-5"}>
            <p className="mt-3 mb-5 text-xl font-light text-center">Click on each camera to make your selection</p>
            {/* // Outdoor */}
            <div className={"text-center " + (!outdoorSelected ? 'hidden' : '')}>
                <h3 className={"text-lg"}>Outdoor Cameras</h3>
                <div className="flex flex-row justify-center flex-wrap mt-4">
                    {cameras.outdoor.map((camera, index) => {
                        return(
                            <AddToCamera 
                                housing={camera.housing} 
                                index={index} 
                                indoorOrOutdoor={'outdoor'} 
                                selectHousing={selectHousing}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>

             {/* Indoor */}
             <div className={"text-center " + (!indoorSelected ? 'hidden' : '')}>
                <h3 className="text-lg">Indoor Cameras</h3>
                <div className="flex flex-row justify-center flex-wrap mt-4">
                    {cameras.indoor.map((camera, index) => {
                        return(
                            <AddToCamera 
                                housing={camera.housing} 
                                index={index} 
                                indoorOrOutdoor={'indoor'} 
                                selectHousing={selectHousing} 
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}