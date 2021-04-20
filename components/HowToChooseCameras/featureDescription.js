import CameraHousings from "./CameraHousing/cameraHousings";
import CameraLenses from "./CameraLens/cameraLenses";
import NightVision from "./nightVision";
import Resolution from "./resolution";


export default function FeatureDescription({activeFeature}) {

    if (activeFeature != '') return(
        <div className="flex justify-center">
            <section id="feature-description" className="w-8/12 p-10 border border-gray-300 shadow-lg rounded mt-20 mb-72">
                {activeFeature == 'cameraHousing' &&
                    <CameraHousings />
                }
                {activeFeature == 'cameraLens' &&
                    <CameraLenses />
                }
                {activeFeature == 'nightVision' &&
                    <NightVision />
                }
                {activeFeature == 'resolution' &&
                    <Resolution />
                }
            </section>
        </div>
    )
    else return(<></>)
}