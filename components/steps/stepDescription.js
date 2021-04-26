import Image from 'next/image'
import {BiEditAlt} from 'react-icons/bi'

export default function StepDescription({currentStep}) {

    switch(currentStep) {
        case 1:
            return(
                <div className="relative p-6 flex-auto">
                    <div className="my-4 text-lg leading-relaxed">
                        <p className="mb-5">Start by choosing the <span className="text-green-600">housing style</span> for your camera.</p>
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
                        <p className="mb-5">Then, select the <span className="text-green-600">viewing area</span>. This is how far you want your camera to be able to capture.</p>
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
                        <p className="mt-5 font-light text-gray-600 text-center">You do not need to do this for PTZ cameras.</p>
                    </div>
                </div>
            )
        case 3:
            return(
                <div className="relative p-6 flex-auto">
                    <div className="my-4 text-lg leading-relaxed">
                        <p className="mb-5">Select a <span className="text-green-600">camera lens</span>. If you need help selecting a lens, you can go back to the previous step to review the differences between each lens.</p>
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
                        <p className="mt-5 font-light text-gray-600 text-center">You do not need to do this for PTZ cameras.</p>
                    </div>
                </div>
            )
        case 4:
            return(
                <div className="relative p-6 flex-auto">
                    <div className="my-4 text-lg leading-relaxed">
                        <p className="mb-5">You can name your camera for reference. This might be helpful to visualize the purpose or location for each camera.</p>
                        <div style={{height: '300px', width: '520px'}}> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <Image
                                    src={'/images/add-camera-name.png'}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                />
                            </div>
                        </div>
                        <p className="text-center mt-5 font-light text-gray-600">Click on the <BiEditAlt className="inline text-gray-900 mb-1"/> icon to edit.</p>
                    </div>
                </div>
            )
        case 5:
            return(
                <div className="relative p-6 flex-auto">
                    <div className="my-4 text-lg leading-relaxed">
                        <p className="mb-5">Whenever you change a selection the recommended cameras will be updated.</p>
                        <div style={{height: '300px', width: '520px'}}> 
                            <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                <Image
                                    src={'/images/recommended-cameras.png'}
                                    layout="fill"
                                    objectFit="contain"
                                    quality={100}
                                />
                            </div>
                        </div>
                        <p className="text-center mt-5 font-light text-gray-600">We recommend looking at multiple options before choosing.</p>
                    </div>
                </div>
            )
    }

    
}