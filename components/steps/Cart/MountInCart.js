import Image from 'next/image'
import {useState} from 'react';
import {FaEdit} from 'react-icons/fa'
import { backstreet_domain } from '../../../lib/backstreet_domain'

export default function MountInCart({camera, cablesType, goToStep}) {
    const [displayEditButton, setDisplayEditButton] = useState(false);

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
        </div>
    )
}