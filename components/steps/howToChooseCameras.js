import {RiCameraLensFill} from 'react-icons/ri'
import {FaPhotoVideo} from 'react-icons/fa'
import {CgDarkMode} from 'react-icons/cg'
import {BsShieldShaded} from 'react-icons/bs'
import {useState, useEffect} from 'react'
import FeatureDescription from '../HowToChooseCameras/featureDescription'


export default function HowToChooseCameras() {
    const [activeFeature, setActiveFeature] = useState('')

    useEffect(() => {
        if(activeFeature) {
            document.getElementById('feature-description').scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        }
    }, [activeFeature])

    const feature_card_styles = "flex flex-col justify-center w-56 items-center p-7 border border-gray-400 rounded mx-5 cursor-pointer focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 ";
    const active_card_styles = "bg-green-200 shadow-lg";

    return(
        <section className="h-96 my-10">
            <div className="text-xl">
                <p>Before you choose your cameras, spend some time looking at these key camera features. You'll need to consider them when choosing each camera.</p>
                <br/> 
                <div id="featureDescription"></div>
                <p className="font-light rounded p-3 bg-green-50"><span className="text-green-700">&#8594;</span> When you are ready to move on, click <span className="text-green-600 font-normal">Next</span>.</p>

                <div className="flex flex-row justify-evenly mt-10">
                    <a
                        tabIndex={0}
                        onClick={e => setActiveFeature('cameraHousing')} 
                        className={feature_card_styles + (activeFeature == 'cameraHousing' ? active_card_styles : 'hover:bg-green-50 hover:shadow-lg hover:border-green-300')}>
                        <span className="text-5xl mb-5 mt-3 text-gray-700"><BsShieldShaded /></span>Camera Housing
                    </a>
                    <a  
                        tabIndex={0}
                        onClick={e => setActiveFeature('cameraLens')} 
                        className={feature_card_styles + (activeFeature == 'cameraLens' ? active_card_styles : 'hover:bg-green-50 hover:shadow-lg hover:border-green-300')}>
                        <span className="text-5xl mb-5 mt-3 text-gray-700"><RiCameraLensFill /></span>Camera Lens
                    </a>
                    <a
                        tabIndex={0}
                        onClick={e => setActiveFeature('nightVision')} 
                        className={feature_card_styles + (activeFeature == 'nightVision' ? active_card_styles : 'hover:bg-green-50 hover:shadow-lg hover:border-green-300')}>
                        <span className="text-5xl mb-5 mt-3 text-gray-700"><CgDarkMode /></span>Night Vision
                    </a>
                    <a  
                        tabIndex={0}
                        onClick={e => setActiveFeature('resolution')} 
                        className={feature_card_styles + (activeFeature == 'resolution' ? active_card_styles : 'hover:bg-green-50 hover:shadow-lg hover:border-green-300')}>
                        <span className="text-5xl mb-5 mt-3 text-gray-700"><FaPhotoVideo /></span>Resolution
                    </a>
                </div>

                <FeatureDescription activeFeature={activeFeature}/>
                <br/> <br/> <br/> <br/> <br/> <br/>
            </div>
        </section>
    )
}