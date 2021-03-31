import Image from 'next/image';
import { useState } from 'react';
import { GrAdd } from 'react-icons/gr'

export default function SelectHousing({ cameraHousing, setCameraHousing}) {
    const [ displayPopover, setDisplayPopover ] = useState(false);

    // Wrapping the housing property inside the component's state to cause a re-render
    const [ housingStyle, setHousingStyle ] = useState(cameraHousing)
    const submitHousing = (housing) => {
        setHousingStyle(housing);
        setCameraHousing(housing);
    }

    const popover_style = "absolute w-72 -top-full z-20 bg-white border rounded border-gray-200 shadow-lg flex flex-row justify-around";
    const base_style = "relative m-4 p-5 flex flex-col justify-center items-center rounded hover:shadow-md hover:border-green-300 cursor-pointer ";

    return(
        <div 
            className={base_style + (cameraHousing == '' ? 'border-2 border-green-300' : 'border')}
            onClick={e => setDisplayPopover(!displayPopover)}
        >
            {(housingStyle == '') ? 
                <div className="flex flex-col justify-center items-center py-3"><GrAdd className="text-2xl mb-5" /><p>Click to select housing</p></div> : 
                <Image loading="eager" src={`/images/${housingStyle}-style.png`} width={80} height={57}/>}

            <div transition-style="in:wipe:up" className={(!displayPopover ? 'hidden' : popover_style )}>
                <div className="p-3 hover:shadow-lg border hover:border-green-400"
                     onClick={e => submitHousing('dome')}
                >
                    <Image loading="eager" src={`/images/dome-style.png`} width={80} height={57}/>
                    <p className="text-center mt-2">Dome</p>
                </div>
                <div className="p-3 hover:shadow-lg border hover:border-green-400"
                     onClick={e => submitHousing('bullet')}
                >
                    <Image loading="eager" src={`/images/bullet-style.png`} width={80} height={57}/>
                    <p className="text-center mt-2">Bullet</p>
                </div>
                <div className="p-3 hover:shadow-lg border hover:border-green-400"
                     onClick={e => submitHousing('ptz')}
                >
                    <Image loading="eager" src={`/images/ptz-style.png`} width={80} height={57}/>
                    <p className="text-center mt-2">PTZ</p>
                </div>
            </div>
        </div>
    )
}