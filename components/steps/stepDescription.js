import Image from 'next/image'
import {BiEditAlt} from 'react-icons/bi'

export default function StepDescription({currentStep}) {

    switch(currentStep) {
        case 1:
            return(
                <div className="relative p-6 flex-auto">
                    <div className="my-4 text-lg leading-relaxed">
                        <p>Start by choosing the <span className="text-green-600">housing style</span> for your camera.</p>
                        <div style={{height: '386px', width: '520px'}}> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <Image
                                    src={'/images/select-housing.png'}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        case 2:
            return(
                <div className="relative p-6 flex-auto">
                    <div className="my-4 text-lg leading-relaxed">
                        <p>Then, select the <span className="text-green-600">viewing area</span>. This is how far you want your camera to be able to capture.</p>
                        <div style={{height: '300px', width: '520px'}}> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <Image
                                    src={'/images/select-viewing-area.png'}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                />
                            </div>
                        </div>
                        <p className="mt-2 font-light text-gray-600">Note: PTZ cameras should have a viewing area of 200-1000 ft. It will automatically selected.</p>
                    </div>
                </div>
            )
        case 3:
            return(
                <div className="relative p-6 flex-auto">
                    <div className="my-4 text-lg leading-relaxed">
                        <p>When selecting a camera with a viewing area of 50-180 ft, select <span className="text-green-600">manual</span> or <span className="text-green-600">motorized zoom</span>. </p>
                        <div style={{height: '300px', width: '520px'}}> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <Image
                                    src={'/images/select-camera-lens.png'}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                />
                            </div>
                        </div>
                        <p className="mt-2 font-light text-gray-600">Cameras with viewing areas of Under 50 ft or 200-1000 ft will have their camera lens automatically selected.</p>
                    </div>
                </div>
            )
        case 4:
            return(
                <div className="relative p-6 flex-auto">
                    <div className="my-4 text-lg leading-relaxed">
                        <p>If you are choosing a PTZ camera, select the <span className="text-green-600">night vision</span> distance.</p>
                        <div style={{height: '300px', width: '520px'}}> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <Image
                                    src={'/images/select-night-vision.png'}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                />
                            </div>
                        </div>
                        <p className="mt-2 font-light text-gray-600">All other cameras will have their night vision distance automatically selected.</p>
                    </div>
                </div>
            )
        case 5:
            return(
                <div className="relative p-6 flex-auto">
                    <div className="my-4 text-lg leading-relaxed">
                        <p>You can name your camera for reference. This might be helpful to visualize the purpose or location for each camera.</p>
                        <div style={{height: '300px', width: '520px'}}> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <Image
                                    src={'/images/name-camera.png'}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                />
                            </div>
                        </div>
                        <p className="text-center mt-2 font-light text-gray-600">Click on the <BiEditAlt className="inline text-gray-900 mb-1"/> icon to edit.</p>
                    </div>
                </div>
            )
        case 6:
            return(
                <div className="relative p-6 flex-auto">
                    <div className="my-4 text-lg leading-relaxed">
                        <p>Whenever you change a selection the recommended cameras will be updated.</p>
                        <div style={{height: '300px', width: '520px'}}> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <Image
                                    src={'/images/select-camera.png'}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                />
                            </div>
                        </div>
                        <p className="text-center mt-2 font-light text-gray-600">We recommend looking at multiple options before choosing.</p>
                    </div>
                </div>
            )
    }

    
}