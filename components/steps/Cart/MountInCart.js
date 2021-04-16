import Image from 'next/image'
import {useState} from 'react';
import {FaEdit, FaTrashAlt} from 'react-icons/fa'
import { backstreet_domain } from '../../../lib/backstreet_domain'
import DeleteModal from './DeleteModal';

export default function MountInCart({camera, cablesType, goToStep, deleteMount, index, isReviewStep}) {
    const [displayEditButton, setDisplayEditButton] = useState(false);

    if(!camera?.mount) return(
        <div 
            onMouseEnter={e => setDisplayEditButton(true)}
            onMouseLeave={e => setDisplayEditButton(false)}
            className={"relative flex flex-col items-center justify-center border rounded p-3 ml-3 bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-3/12' : 'w-4/12')}
        >
            <div style={{height: '36px', width: '70px'}}> 
                <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                    <Image
                        src={'/images/mount.png'}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </div>
            </div>
            <div className="font-light mt-7">No mount added yet</div>
            {displayEditButton && isReviewStep &&
            <span 
                onClick={e => goToStep('addons')}
                className={"absolute top-0 right-0 cursor-pointer m-2 "}
            >
                <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
            </span>}
        </div>
    )

    return(
        <div 
            onMouseEnter={e => setDisplayEditButton(true)}
            onMouseLeave={e => setDisplayEditButton(false)}
            className={"relative flex flex-col items-center justify-center border rounded p-4 ml-3 bg-white border-gray-300 shadow min-h-max " + (cablesType == 'pre-made' ? 'w-3/12' : 'w-4/12')}
        >
            <div className="my-2 max-w-max flex flex-col justify-center items-center bg-white ">
                <div style={{height: '56px', width: '56px'}}> 
                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                        <Image
                            src={backstreet_domain + '/pub/media/catalog/product' + camera.mount.media_gallery_entries[0].file}
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p>{camera.mount.name}</p>
                <p className="font-light">{camera.mount.sku} </p>
                <p className="font-normal text-green-600">${camera.mount.price.toFixed(2)}</p>
            </div>
            {displayEditButton &&
            <span 
                onClick={e => goToStep('addons')}
                className={"absolute top-0 right-0 cursor-pointer m-2 "}
            >
                <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
            </span>}
            {isReviewStep &&
                <DeleteModal confirmDelete={() => {deleteMount(index)}} />
            }
        </div>
    )
}