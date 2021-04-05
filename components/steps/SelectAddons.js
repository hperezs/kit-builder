import { FaPowerOff, FaTv, FaScrewdriver } from 'react-icons/fa'
import { useState } from 'react';
import Monitors from './SelectAddons/monitors';
import Mounts from './SelectAddons/mounts';
import PowerInjectors from './SelectAddons/powerInjectors';

export default function SelectAddons({
    monitorProducts, 
    mountProducts, 
    powerInjectors, 
    cameras, 
    addHDMI,
    addMonitor,
    addMount, 
    deleteMount
}) {
    const [displayDetails, setDisplayDetails] = useState(false);
    const [addonsType, setAddonsType] = useState('');

    const selected = 'bg-green-200 border-green-200 shadow-lg';

    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center w-full">
                <section className="mt-20 mb-24 flex flex-row justify-around items-center 2xl:w-7/12 xl:w-9/12 md:w-10/12 ">
                    <span style={{width: '255px'}} className={"flex flex-col items-center text-center cursor-pointer px-10 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (addonsType == 'monitors' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => setAddonsType('monitors')}
                        >
                        <span className="text-6xl text-gray-700"><FaTv /></span>
                        <h5 className="text-xl mt-5 font-light">Monitors</h5>
                    </span>

                    <span style={{width: '255px'}} className={"flex flex-col items-center text-center cursor-pointer px-10 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (addonsType == 'mounts' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => setAddonsType('mounts')}
                        >
                        <span className="text-6xl text-gray-700"><FaScrewdriver /></span>
                        <h5 className="text-xl mt-5 font-light">Mounts</h5>
                    </span>

                    <span style={{width: '255px'}} className={"flex flex-col items-center  text-center cursor-pointer px-10 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (addonsType == 'poe' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => setAddonsType('poe')}
                        >
                        <span className="text-6xl text-gray-700"><FaPowerOff /></span>
                        <h5 className="text-xl mt-5 font-light">Power Injectors</h5>
                    </span>
                </section>
            </div>

            {addonsType == 'monitors' && <Monitors monitorProducts={monitorProducts} addMonitor={addMonitor} addHDMI={addHDMI} />}
            {addonsType == 'mounts' && <Mounts mountProducts={mountProducts} cameras={cameras} addMount={addMount} deleteMount={deleteMount}/>}
            {addonsType == 'poe' && <PowerInjectors powerInjectors={powerInjectors}/>}
        </div>
    )
}