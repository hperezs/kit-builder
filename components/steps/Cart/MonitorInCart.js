import Image from 'next/image'
import { useRef, useState, useEffect } from 'react';
import {backstreet_domain} from '../../../lib/backstreet_domain'
import {FaEdit, FaTrashAlt} from 'react-icons/fa'
import DeleteModal from './DeleteModal';

export default function MonitorInCart({selectedMonitor, cablesType, goToStep, deleteMonitor, isReviewStep}) {
    const [displayEditButton, setDisplayEditButton] = useState(false);

    return(
        <div 
            onMouseEnter={e => setDisplayEditButton(true)}
            onMouseLeave={e => setDisplayEditButton(false)}
            className={"relative flex flex-row justify-start items-center py-4 px-5 border rounded flex-shrink-0 bg-white border-gray-300 shadow  " + (cablesType == 'pre-made' ? 'w-6/12' : 'w-8/12')}
        >
            <div className="m-3" style={{height: '86px', width: '120px'}}> 
                <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                    <Image
                        src={backstreet_domain + '/pub/media/catalog/product' + selectedMonitor?.media_gallery_entries[0].file}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </div>
            </div>
            <div className="ml-3 flex flex-col justify-center">
                <p className="mb-1">{selectedMonitor.name} </p>
                <p className="font-light mb-1">{selectedMonitor.sku}</p>
                <p className="font-normal text-green-600">${selectedMonitor.price.toFixed(2)}</p>
            </div>
            {displayEditButton &&
            <span 
                transition-style="fade:in:faster"
                onClick={e => goToStep('addons')}
                className={"absolute top-0 right-0 cursor-pointer m-2 "}
            >
                <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
            </span>}
            {isReviewStep && displayEditButton && 
                <DeleteModal confirmDelete={deleteMonitor} />
            }
        </div>
    )
}