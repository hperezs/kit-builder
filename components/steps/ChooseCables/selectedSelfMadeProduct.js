import Image from 'next/image'
import { backstreet_domain } from '../../../lib/backstreet_domain'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function SelectedSelfMadeProduct({product, index, deleteSMProduct, updateSMProductQuantity}) {
    const [quantity, setQuantity] = useState(parseInt(product.quantity))
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setQuantity(product.quantity);
    }, [product.quantity])

    return(
        <div transition-style="fade:in" className="relative flex flex-col justify-start items-center mx-5 mb-3 rounded px-5 pt-7 pb-10 border border-gray-300 shadow">
            <div className="m-2 p-5 flex flex-col justify-center items-center border rounded border-gray-300">
                <div style={{height: '86px', width: '120px'}}> 
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
            <div className="flex flex-col items-center">
                <p>{product.name}</p>
                <p className="font-light">{product.sku} </p>
                <p className="font-normal text-green-600">${product.price.toFixed(2)}</p>
                {!isEditing && <p>Qty: {product.quantity}</p>}
                {isEditing &&
                    <div className="flex justify-center items-center mt-3">
                        <button
                            onClick={e => setQuantity(quantity != 1 ? quantity - 1 : quantity)} 
                            className="px-2 mr-1 border bg-gray-50 focus:outline-none shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                        >
                            -
                        </button>
                        <input 
                            autoFocus
                            type="number" 
                            defaultValue={1} 
                            min={1} 
                            value={quantity} 
                            onChange={e => setQuantity(e.target.value)}
                            className="w-14 text-center mx-1 border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                        />
                        <button 
                            onClick={e => setQuantity(parseInt(quantity) + 1)}
                            className="px-2 ml-1 border bg-gray-50 focus:outline-none shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                        >
                            +
                        </button>
                    </div>
                }
                {isEditing &&
                <button 
                    onClick={e => {updateSMProductQuantity(index, quantity); setIsEditing(false)}}
                    className="uppercase text-sm tracking-wide font-semibold text-green-600 border border-green-600 mt-4 px-3 py-2 rounded hover:text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-500">
                    Update
                </button>}
            </div>
            <span 
                onClick={e => {deleteSMProduct(index); setIsEditing(false)}} 
                className={"absolute bottom-0 right-0 cursor-pointer p-2 " + (!isEditing ? 'hidden' : '')}
            >
                <FaTrashAlt className="fill-current text-red-600 text-xl hover:text-red-400"/>
            </span>
            <span 
                onClick={e => setIsEditing(true)}
                className={"absolute top-0 right-0 cursor-pointer p-2 " + (isEditing ? 'hidden' : '')}
            >
                <FaEdit className="fill-current text-yellow-600 text-xl hover:text-yellow-400"/>
            </span>
        </div>
    )
}