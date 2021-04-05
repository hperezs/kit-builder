import Image from 'next/image'
import {backstreet_domain} from '../../../lib/backstreet_domain'

export default function RecommendedMount({product, productIndex, cameraIndex, addMount}) {

    const card_styles = "relative flex flex-col justify-start items-center my-10 mx-3 rounded px-5 py-7 bg-white border shadow-xl hover:border-green-300 "
    const selectButton_styles = "px-5 py-1 border rounded bg-green-600 text-white text-sm uppercase tracking-wider font-semibold mt-3 transition hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";

    return(
        <div 
            transition-style="fade:in:fast"
            className={card_styles}
            key={productIndex}
        >
            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                <div style={{height: '86px', width: '120px'}}> 
                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                        <Image
                            src={backstreet_domain + '/pub/media/catalog/product' + product.media_gallery_entries[0].file}
                            layout="fill"
                            objectFit="contain"
                            quality={20}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p>{product.name}</p>
                <p className="font-light">{product.sku} </p>
                <p className="font-normal text-green-600">${product.price.toFixed(2)}</p>
                <button className={selectButton_styles} onClick={e => addMount(cameraIndex, product)}>Add to cart</button>
            </div>
        </div>
    )
}