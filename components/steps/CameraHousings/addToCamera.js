import Image from 'next/image';
import { useState } from 'react';
import { GrAdd } from 'react-icons/gr'

export default function AddToCamera({camera, indoorOrOutdoor, housing, index, selectHousing}) {
    const [ displayPopover, setDisplayPopover ] = useState(false);

    // Wrapping the housing property inside the component's state to cause a re-render
    const [ housingStyle, setHousingStyle ] = useState(housing)
    const submitHousing = (indoorOrOutdoor, housing, index) => {
        setHousingStyle(housing);
        selectHousing(indoorOrOutdoor, housing, index)
    }

    const popover_style = "absolute -top-full z-50 bg-white border rounded border-gray-200 shadow-lg flex flex-row justify-around";

    return(
        <div 
            className="relative m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 hover:shadow-md hover:border-green-300 cursor-pointer"
            onClick={e => setDisplayPopover(!displayPopover)}
        >
            {(housingStyle == '') ? 
                <span className="text-2xl"><GrAdd /></span> : 
                <Image src={`/images/${housingStyle}-style.png`} width={80} height={57}/>}

            <p className="mt-3">{camera.name}</p>

            <div className={(!displayPopover ? 'hidden' : popover_style + (indoorOrOutdoor == 'outdoor' ? ' w-72' : ' w-56' ) )}>
                <div className="p-5 hover:shadow-lg border hover:border-green-400"
                     onClick={e => submitHousing(indoorOrOutdoor, 'dome', index) }
                >
                    <Image src={`/images/dome-style.png`} width={80} height={57}/>
                    <p>Dome</p>
                </div>
                <div className="p-5 hover:shadow-lg border hover:border-green-400"
                     onClick={e => submitHousing(indoorOrOutdoor, 'bullet', index)}
                >
                    <Image src={`/images/bullet-style.png`} width={80} height={57}/>
                    <p>Bullet</p>
                </div>
                <div className={(indoorOrOutdoor == 'outdoor' ? "p-5 hover:shadow-lg border hover:border-green-400" : 'hidden')}
                     onClick={e => submitHousing(indoorOrOutdoor, 'ptz', index)}
                >
                    <Image src={`/images/ptz-style.png`} width={80} height={57}/>
                    <p>PTZ</p>
                </div>
            </div>
        </div>
    )
}