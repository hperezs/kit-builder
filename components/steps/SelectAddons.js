import { FaPowerOff, FaTv, FaScrewdriver } from 'react-icons/fa'
import { useEffect, useState } from 'react';
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
    deleteMount,
    selectedMonitor,
    deleteMonitor,
    deleteHDMI,
    selectedPowerInjectors,
    addPowerInjector,
    deletePowerInjector,
    duplicateCamera,
    deleteCamera,
    updateCameraName
}) {
    const [addonsType, setAddonsType] = useState('');
    const [selectedMonitorCount, setSelectedMonitorCount] = useState(0);
    const [selectedMountsCount, setSelectedMountsCount] = useState(0);
    const [selectedPowerInjectorsCount, setSelectedPowerInjectorsCount] = useState(0);

    useEffect(() => {
        setSelectedMonitorCount(selectedMonitor?.cable ? 2 : 1);
    }, [selectedMonitor, selectedMonitor?.cable])

    useEffect(() => {
        let new_mountsCount = 0;
        cameras.forEach(camera => {
            if(camera?.mount) new_mountsCount++
        })

        setSelectedMountsCount(new_mountsCount);
    }, [cameras])

    useEffect(() => {
        let new_selectedPOECount = 0;
        selectedPowerInjectors.forEach(powerInjector => {
            new_selectedPOECount = new_selectedPOECount + powerInjector.quantity;
        })

        setSelectedPowerInjectorsCount(new_selectedPOECount);
    }, [selectedPowerInjectors])

    const selected = 'bg-green-200 border-green-200 shadow-lg';

    const countStyle = {paddingTop: '1px', top: '-12px', right: '-6px', height: '24px', width: '24px'};

    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center w-full">
                <section className="mt-20 mb-24 flex flex-row justify-around items-center 2xl:w-7/12 xl:w-9/12 md:w-10/12 ">
                    <span style={{width: '255px'}} className={"relative flex flex-col items-center text-center cursor-pointer px-10 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (addonsType == 'monitors' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => setAddonsType('monitors')}
                        >
                        <span className="text-6xl text-gray-700"><FaTv /></span>
                        <h5 className="text-xl mt-5 font-light">Monitors</h5>
                        {selectedMonitor && <div style={countStyle} className="absolute rounded-full shadow font-semibold bg-green-500 text-white text-sm">{selectedMonitorCount}</div>}
                    </span>

                    <span style={{width: '255px'}} className={"relative flex flex-col items-center text-center cursor-pointer px-10 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (addonsType == 'mounts' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => setAddonsType('mounts')}
                        >
                        <span className="text-6xl text-gray-700"><FaScrewdriver /></span>
                        <h5 className="text-xl mt-5 font-light">Mounts</h5>
                        {selectedMountsCount != 0 && <div style={countStyle} className="absolute rounded-full shadow font-semibold bg-green-500 text-white text-sm">{selectedMountsCount}</div>}
                    </span>

                    <span style={{width: '255px'}} className={"relative flex flex-col items-center  text-center cursor-pointer px-10 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (addonsType == 'poe' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => setAddonsType('poe')}
                        >
                        <span className="text-6xl text-gray-700"><FaPowerOff /></span>
                        <h5 className="text-xl mt-5 font-light">Power Injectors</h5>
                        {selectedPowerInjectorsCount != 0 && <div style={countStyle} className="absolute rounded-full shadow font-semibold bg-green-500 text-white text-sm">{selectedPowerInjectorsCount}</div>}
                    </span>
                </section>
            </div>

            {addonsType == 'monitors' && 
                <Monitors 
                    monitorProducts={monitorProducts} 
                    addMonitor={addMonitor} 
                    addHDMI={addHDMI} 
                    selectedMonitor={selectedMonitor} 
                    deleteMonitor={deleteMonitor} 
                    deleteHDMI={deleteHDMI}
                />
            }
            {addonsType == 'mounts' && 
                <Mounts 
                    mountProducts={mountProducts} 
                    cameras={cameras} 
                    addMount={addMount} 
                    deleteMount={deleteMount}
                    duplicateCamera={duplicateCamera}
                    deleteCamera={deleteCamera} 
                    updateCameraName={updateCameraName}
                />
            }
            {addonsType == 'poe' && 
                <PowerInjectors 
                    powerInjectors={powerInjectors} 
                    selectedPowerInjectors={selectedPowerInjectors}
                    addPowerInjector={addPowerInjector}
                    deletePowerInjector={deletePowerInjector}
                />
            }
        </div>
    )
}