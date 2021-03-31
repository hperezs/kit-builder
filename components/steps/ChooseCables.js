import ChooseCable from "./ChooseCables/chooseCable"
import SelfMadeProduct from "./ChooseCables/selfMadeProduct"
import Image from 'next/image'
import { backstreet_domain } from '../../lib/backstreet_domain'


export default function ChooseCables({cablesType, cameras, indoorCables, outdoorCables, selfMadeProducts, selectCable, selectSMProducts, selectedSMProducts}) {

    if(cablesType == 'pre-made')return(
        <section className="my-10">
            <div className="flex flex-row items-start justify-start flex-wrap">
                {cameras.length != 0 && 
                    cameras.map((camera, index) => {
                        return <ChooseCable camera={camera} key={index} indoorCables={indoorCables} outdoorCables={outdoorCables} selectCable={selectCable}/>
                    })
                }
            </div>
            
        </section>
    )

    if(cablesType == 'self-made')return(
        <section className="my-10">
            <div className="flex justify-center">
                {selfMadeProducts.map((product, index) => {
                    return <SelfMadeProduct product={product} selectSMProducts={selectSMProducts} key={index}/>
                })}
            </div>

           {selectedSMProducts.length != 0 && 
                <div className="flex justify-center">
                    <div className="flex flex-col items-center border rounded p-3">
                        <h4 className="font-light text-xl mb-4">Your selections: </h4>
                        <div className="flex justify-center ">
                                {selectedSMProducts.map((product, index) => {
                                    return(
                                        <div className="flex flex-col justify-start items-center mx-5 mb-3 rounded p-3 border" key={index}>
                                            <div className="m-2 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
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
                                                <p>Qty: {product.quantity}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
            
                </div>
            }
        </section>
    )
    
}