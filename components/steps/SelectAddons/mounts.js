import Image from 'next/image'
import { useState } from 'react';
import {backstreet_domain} from '../../../lib/backstreet_domain'
import Camera from '../Camera';
import RecommendedMount from './recommendedMount';
import {FaTrashAlt} from 'react-icons/fa'
import ChooseMount from './chooseMount';

export default function Mounts({mountProducts, cameras, addMount, deleteMount}) {
    
    return(
        <section className="mt-5">
            <p className="text-center text-lg">Bellow, you will find the recommended mount for each of your cameras.</p>
            <div transition-style="in:wipe:right" className="mt-10 border rounded px-10 py-5 bg-gray-100">
                {
                    cameras.map((camera, cameraIndex) => (
                        <ChooseMount 
                            camera={camera}
                            cameraIndex={cameraIndex}
                            mountProducts={mountProducts}
                            addMount={addMount}
                            deleteMount={deleteMount}
                        />
                    ))
                }
            </div>
        </section>
        
    )
}