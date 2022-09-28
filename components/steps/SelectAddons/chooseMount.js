import Image from 'next/image'
import { useState } from 'react';
import {backstreet_domain} from '../../../lib/backstreet_domain'
import Camera from '../Camera';
import RecommendedMount from './recommendedMount';
import {FaTrashAlt} from 'react-icons/fa'

export default function ChooseMount({camera, cameraIndex, mountProducts, addMount, deleteMount, lastIndex, duplicateCamera, deleteCamera, updateCameraName}) {
    const [isChoosing, setIsChoosing] = useState(!camera?.mount);

    const hasSpecialMount = () => {
      let hasSpecialMount = false;
      mountProducts.forEach((product) => {
        if (
          product.custom_attributes[5].value
            .toUpperCase()
            .includes(camera.sku.toUpperCase())
        )
          hasSpecialMount = true;
      });
      return hasSpecialMount;
    };

    const handleSelect = (index, mount) => {
        setIsChoosing(false);
        addMount(index, mount);
    }

    const handleDelete = index => {
        setIsChoosing(true);
        deleteMount(index)
    }

    const card_styles = "relative flex flex-col justify-start items-center m-3 rounded px-5 py-7 bg-white border shadow-xl "

    return(
        <div className="flex sm:flex-col lg:flex-row justify-start items-center sm:border-b lg:border-0 sm:pb-4 sm:pt-4 lg:p-0" key={cameraIndex}>
            <Camera 
                camera={camera}
                index={cameraIndex} 
                updateCameraName={updateCameraName}
                deleteCamera={deleteCamera}
                duplicateCamera={duplicateCamera}
                lastIndex={lastIndex}
            />
            <div className="flex flex-row justify-start items-center overflow-x-auto">
                {!isChoosing ? 
                    <div transition-style="in:square:center" className="flex flex-col items-center justify-center p-5">
                        <div className={card_styles}>
                            <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                <div style={{height: '86px', width: '120px'}}> 
                                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                        <Image
                                            src={backstreet_domain + '/pub/media/catalog/product' + camera.mount.media_gallery_entries[0].file}
                                            layout="fill"
                                            objectFit="contain"
                                            quality={20}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <p>{camera.mount.name}</p>
                                <p className="font-light">{camera.mount.sku} </p>
                                <p className="font-normal text-green-600">${camera.mount.price.toFixed(2)}</p>
                            </div>
                            <span 
                                onClick={e => handleDelete(cameraIndex)}
                                className={"absolute bottom-0 right-0 cursor-pointer p-2 "}
                            >
                                <FaTrashAlt className="fill-current text-red-600 text-2xl hover:text-red-400"/>
                            </span>
                        </div>
                    </div>
                :
                    camera.mounts ? 
                        camera.mounts.map((mountSku, index) => (
                            <RecommendedMount product={mountProducts[mountSku]} cameraIndex={cameraIndex} addMount={handleSelect} key={mountSku + index} />
                        ))
                    :
                    <>
                        <RecommendedMount product={mountProducts["M5"]} cameraIndex={cameraIndex} addMount={handleSelect}/>
                        <RecommendedMount product={mountProducts["M5B-Universal-Mount"]} cameraIndex={cameraIndex} addMount={handleSelect}/>
                    </>
                }            
            </div>
        </div>
    )
}