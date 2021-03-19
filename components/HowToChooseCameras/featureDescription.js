import CameraHousings from "./CameraHousing/cameraHousings";
import CameraLenses from "./CameraLens/cameraLenses";
import NightVision from "./nightVision";
import Resolution from "./resolution";


export default function FeatureDescription({activeFeature}) {

    if (activeFeature != '') return(
        <section className="w-full p-10 border border-gray-400 rounded mt-20 mb-72">
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
    )
    else return(<></>)
}