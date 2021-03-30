import ReactLoading from 'react-loading'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { backstreet_domain } from '../../../lib/backstreet_domain'

export default function SelfMadeProduct({product, selectSMProducts}) {
    const [isLoading, setIsLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const selectButton_styles = "px-5 py-1 border rounded bg-green-600 text-white text-sm uppercase tracking-wider font-semibold mt-3 transition hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";
    const card_styles = "flex flex-col justify-start items-center my-14 mx-5 rounded p-3 border hover:shadow-lg hover:border-green-300 "

    const handleSelect = product => {
        product.quantity = quantity;
        console.log('Adding to cart ' + product.quantity + ' ' + product.name);
        selectSMProducts(product);
    }

    return(
        <div className={card_styles}>
            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                <div className={"flex flex-row justify-center items-center " + (!isLoading ? 'hidden' : '')} style={{height: '86px', width: '120px'}}>
                    <ReactLoading type="spin" color="#a6e3b6" />
                </div>
                <div style={(isLoading ? {height: '0px', width: '0px'} : {height: '86px', width: '120px'})}> 
                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                        <Image
                            src={backstreet_domain + '/pub/media/catalog/product' + product.media_gallery_entries[0].file}
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                            onLoad={e => setIsLoading(false)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p>{product.name}</p>
                <p className="font-light">{product.sku} </p>
                <p className="font-normal text-green-600">${product.price.toFixed(2)}</p>
                <div className="flex justify-center items-center mt-3">
                    <button
                        onClick={e => setQuantity(quantity != 1 ? quantity - 1 : quantity)} 
                        className="px-2 mr-1 border bg-gray-50 focus:outline-none shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    >
                        -
                    </button>
                    <input 
                        type="number" 
                        defaultValue={1} 
                        min={1} 
                        value={quantity} 
                        onChange={e => setQuantity(e.target.value)}
                        className="w-14 text-center mx-1 border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    />
                    <button 
                        onClick={e => setQuantity(quantity + 1)}
                        className="px-2 ml-1 border bg-gray-50 focus:outline-none shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                    >
                        +
                    </button>
                </div>
                <button className={selectButton_styles} onClick={e => handleSelect(product)}>Add to cart</button>
            </div>
        </div>
    )
}