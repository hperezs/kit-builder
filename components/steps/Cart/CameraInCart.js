import Image from 'next/image'
import { useRef, useState, useEffect } from 'react';
import {backstreet_domain} from '../../../lib/backstreet_domain'
import {FaEdit, FaTrashAlt} from 'react-icons/fa'
import DeleteModal from './DeleteModal';

export default function CameraInCart({camera, cablesType, goToStep, deleteCamera, index, isReviewStep}) {
    const [displayMoreDetails, setDisplayMoreDetails] = useState(false);
    const [displayEditButton, setDisplayEditButton] = useState(false);

    const item = useRef();

    const handleClick = e => {
        if(!item.current?.contains(e.target)){
          setDisplayMoreDetails(false);
        }
      }
  
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [])

    return(
        <div 
            onMouseEnter={e => setDisplayEditButton(true)}
            onMouseLeave={e => setDisplayEditButton(false)}
            ref={item} 
            style={{height: (displayMoreDetails ? '240px' : '176px')}}
            className={"relative flex flex-row px-5 py-4 sm:mx-3 lg:mx-0 items-center border rounded flex-shrink-0 bg-white border-gray-300 shadow transition-all duration-500 ease overflow-hidden lg:w-6/12"}
        >
            <div  
                style={{left: '6%'}}
                className="absolute top-10 flex flex-col justify-center items-center  border-gray-300 "
            >
                <div style={{height: '86px', width: (window?.innerWidth > 800 ? '120px' : '90px')}}> 
                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                        <Image
                            src={backstreet_domain + camera.imageLink}
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
            <div 
                style={{left: (displayMoreDetails ? '38%' : '35%')}}
                className={"absolute top-10 flex flex-col items-center transition-all duration-500 ease"}
            >
                <p className="text-lg mb-3 border-b border-gray-500 px-3 italic">{camera.cameraName}</p>
                <p className="mb-1">{camera.sku} </p>
                {!displayMoreDetails && <a onClick={e => setDisplayMoreDetails(true)} className="text-green-700 font-light cursor-pointer hover:text-green-500">See more details</a>}
                {displayMoreDetails &&
                <div className="text-center ">
                    <p className="font-light mb-1">Lens: {camera.cameraLens}</p>
                    <p className="font-light mb-1">Night Vision: {camera.nightVision}</p>
                    <p className="font-light mb-1">Resolution: {camera.resolution}</p>
                    <p className={"font-light mb-1 " + (camera.audio != 'No Audio' ? 'text-blue-600' : '')}>{camera.audio}</p>
                </div>
                }
            </div>
            <div 
                style={{right: (window?.innerWidth > 800 ? (displayMoreDetails ? '10%' : '14%') : (displayMoreDetails ? '2%' : '6%')), padding: '15px 15px 0px 0px'}}
                className={"absolute top-10 flex flex-col items-center rounded transition-all duration-500 ease"}
            >
                <p>Price:</p>
                <span className="text-lg text-green-600">${parseFloat(camera.price?.$numberDecimal).toFixed(2)}</span>
            </div>
            {displayEditButton &&
            <span 
                transition-style="fade:in:faster"
                onClick={e => goToStep('cameras')}
                className={"absolute top-0 right-0 cursor-pointer m-2 "}
            >
                <FaEdit className="fill-current text-yellow-600 text-2xl hover:text-yellow-400"/>
            </span>}
            {displayEditButton && 
                <DeleteModal confirmDelete={() => {deleteCamera(index)}} />
            }
        </div>
    )
}