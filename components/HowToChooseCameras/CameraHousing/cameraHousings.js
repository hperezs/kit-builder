import Image from 'next/image'
import { useEffect, useState } from 'react';
import Description from './description';

export default function CameraHousings() {
    const [ displayMoreInfo, setDisplayMoreInfo ] = useState(false);
    const [ housingSelected, setHousingSelected ] = useState('');

    useEffect(() => {
        if(!displayMoreInfo && housingSelected != '') {
            setDisplayMoreInfo(true);
        }
    }, [housingSelected])


    const selected = 'border-green-200 border-4 shadow-lg';

    return (
        <section id="cameraHousings" className="my-10 pb-20">
            <h3 className="text-center my-10 text-4xl font-light">Camera Housings</h3>
            <p className="ml-3 text-xl mb-14 text-center">There are 3 types of camera housings. Click on each one to see more information about them.</p>
            <div className="flex flex-row justify-center items-center mt-5 mb-20">
                <div 
                    className={"p-5 text-center mx-10 rounded border-black-200 " + (housingSelected == 'dome' ? selected : 'border hover:shadow-lg hover:border-green-200')}
                    onClick={e => setHousingSelected('dome')}
                >
                    <Image src="/images/dome-style.png"
                        width={160}
                        height={115}/>
                    <h5 className="text-lg mt-3">Dome style</h5>
                </div>

                <div 
                    className={"p-5 text-center mx-10 rounded border-black-200 " + (housingSelected == 'bullet' ? selected : 'border hover:shadow-lg hover:border-green-200')}
                    onClick={e => setHousingSelected('bullet')}
                >
                    <Image src="/images/bullet-style.png"
                        width={160}
                        height={115}/>
                    <h5 className="text-lg mt-3">Bullet style
                    </h5>
                </div>

                <div 
                    className={"p-5 text-center mx-10 rounded border-black-200 " + (housingSelected == 'ptz' ? selected : 'border hover:shadow-lg hover:border-green-200')}
                    onClick={e => setHousingSelected('ptz')}
                >
                    <Image src="/images/ptz-style.png"
                        width={160}
                        height={115}/>
                    <h5 className="text-lg mt-3">PTZ style
                    </h5>
                </div>
            </div>
            <Description 
                displayMoreInfo={displayMoreInfo} 
                housingSelected={housingSelected}
            />
        </section>
    )
}
