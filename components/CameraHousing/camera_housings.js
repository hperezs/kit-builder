import Image from 'next/image'
import { useEffect, useState } from 'react';
import AddToCamera from './addToCamera';
import Description from './description';

export default function CameraHousings({ cameras, selectHousing }) {
    const [ displayMoreInfo, setDisplayMoreInfo ] = useState(false);
    const [ housingSelected, setHousingSelected ] = useState('');
    const [ displayAddToCamera, setDisplayAddToCamera ] = useState(false);

    useEffect(() => {
        if(!displayMoreInfo && housingSelected != '') {
            setDisplayMoreInfo(true);
        }
    }, [housingSelected])


    const selected = 'border-green-200 border-4 shadow-lg';

    return (
        <section className="my-10">
            <p className="ml-3 text-xl mb-14">We sell cameras with 3 types of housing. Click on each one to see more information and add to your cameras.</p>
            <div className="flex flex-row justify-around items-center mt-5 mb-10">
                <div className={"p-4 text-center rounded border-black-200 "
                        + (housingSelected == 'dome' ? selected : 'border hover:shadow-lg hover:border-green-200')}
                    onClick={e => setHousingSelected('dome')}
                >
                    <Image src="/images/dome-style.png"
                        width={200}
                        height={144}/>
                    <h5 className="text-lg">Dome style</h5>
                </div>

                <div className={"p-4 text-center rounded border-black-200 "
                        + (housingSelected == 'bullet' ? selected : 'border hover:shadow-lg hover:border-green-200')}
                    onClick={e => setHousingSelected('bullet')}
                >
                    <Image src="/images/bullet-style.png"
                        width={200}
                        height={144}/>
                    <h5 className="text-lg">Bullet style
                    </h5>
                </div>

                <div className={"p-4 text-center rounded border-black-200 "
                        + (housingSelected == 'ptz' ? selected : 'border hover:shadow-lg hover:border-green-200')}
                    onClick={e => setHousingSelected('ptz')}
                >
                    <Image src="/images/ptz-style.png"
                        width={200}
                        height={144}/>
                    <h5 className="text-lg">PTZ style
                    </h5>
                </div>
            </div>
            <Description 
                displayMoreInfo={displayMoreInfo} 
                setDisplayAddToCamera={setDisplayAddToCamera} 
                housingSelected={housingSelected}
                displayAddToCamera={displayAddToCamera}
            />
            <AddToCamera 
                displayAddToCamera={displayAddToCamera} 
                setDisplayAddToCamera={setDisplayAddToCamera}
                cameras={cameras}
                housingSelected={housingSelected}
                selectHousing={selectHousing}
            />
        </section>
    )
}
