import Image from 'next/image'
import {useState} from 'react';
import {FaEdit} from 'react-icons/fa'
import { backstreet_domain } from '../../../lib/backstreet_domain'
import DeleteModal from './DeleteModal';

export default function SelfMadeProductInCart({product, cablesType, goToStep, index, deleteSMProduct, isReviewStep}) {
    const [displayEditButton, setDisplayEditButton] = useState(false);

    return(
        <div 
            onMouseEnter={e => setDisplayEditButton(true)}
            onMouseLeave={e => setDisplayEditButton(false)}
            className={"relative flex flex-row justify-start items-center mb-3 rounded p-5 border bg-white border-gray-300 shadow " + (cablesType == 'pre-made' ? 'w-7/12' : 'w-9/12')} 
        >
            <div className="m-2 p-3 flex flex-col justify-center items-center rounded border-gray-300 ">
                <div style={{height: '66px', width: '100px'}}> 
                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                        <Image
                            src={backstreet_domain + '/pub/media/catalog/product' + product.media_gallery_entries[0].file}
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            <div style={{width: '114px'}} className="flex flex-col items-center mx-7">
                <p className="text-center">{product.name}</p>
                <p className="font-normal text-green-600">${product.price.toFixed(2)}</p>
            </div>
            <div className="flex flex-col justify-center items-center mx-7">
                <p>Quantity:</p>
                <span>{product.quantity}</span>
            </div>
            <div className="flex flex-col justify-center items-center mx-7">
                <p>Subtotal:</p>
                <span className="text-green-600">${(product.quantity * product.price).toFixed(2)}</span>
            </div>
            {displayEditButton && 
            <span 
                transition-style="fade:in:faster"
                onClick={e => goToStep('cables')}
                className={"absolute top-0 right-0 cursor-pointer m-2 "}
            >
                <FaEdit className="fill-current text-yellow-600 text-xl hover:text-yellow-400"/>
            </span>}
            {isReviewStep &&
                <DeleteModal confirmDelete={() => deleteSMProduct(index)}/>
            }
        </div>
    )
}