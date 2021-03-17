import AddToCamera from '../CameraHousing/addToCamera';

export default function SelectHousing({ cameras,  selectHousing, indoorSelected, outdoorSelected }) {


    return(
        <section className="flex flex-row justify-center">
            <div className="relative my-6 border border-gray-300 rounded py-5 sm:w-full 2xl:w-8/12">
                <p className="mt-3 mb-5 text-xl font-light text-center"><span className="text-green-700">&#8594;</span>  Click on each camera to make your selection</p>
                {/* // Outdoor */}
                <div className={"text-center " + (!outdoorSelected ? 'hidden' : '')}>
                    <h3 className={"text-lg"}>Outdoor Cameras</h3>
                    <div className="flex flex-row justify-center flex-wrap mt-4">
                        {cameras.outdoor.map((camera, index) => {
                            return(
                                <AddToCamera 
                                    camera={camera}
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
                                    camera={camera}
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
            </div>
        </section>
    )
}