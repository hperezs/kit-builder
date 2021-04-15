import { AiFillShop } from 'react-icons/ai'
import { GiTinker } from 'react-icons/gi'
import { FiCheckSquare } from 'react-icons/fi'
import { BsPersonCheckFill } from 'react-icons/bs'
import { useState } from 'react';

export default function SelectCableType({cablesType, selectCablesType}) {
    const [displayDetails, setDisplayDetails] = useState(false);

    const selected = 'bg-green-200 border-green-200 shadow-lg';

    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center w-full">
                <section className="mt-40 flex flex-row justify-around items-center 2xl:w-7/12 xl:w-9/12 md:w-10/12 ">
                    <span className={"flex flex-col items-center text-center cursor-pointer px-16 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (cablesType == 'pre-made' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => selectCablesType('pre-made')}
                        >
                        <span className="text-6xl text-gray-700"><FiCheckSquare /></span>
                        <h5 className="text-xl mt-4 font-light">Pre-made</h5>
                    </span>

                    <span className={" flex flex-col items-center text-center cursor-pointer px-16 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (cablesType == 'self-made' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => selectCablesType('self-made')}
                        >
                        <span className="text-6xl text-gray-700"><GiTinker /></span>
                        <h5 className="text-xl mt-4 font-light">Self-made</h5>
                    </span>

                    <span className={"flex flex-col items-center  text-center cursor-pointer px-16 py-8 border rounded border-gray-300 transition-colors transition-shadow " 
                        + (cablesType == 'none' ? selected : 'hover:shadow-lg hover:border-green-200 hover:bg-green-50')}
                        onClick={e => selectCablesType('none')}
                        >
                        <span className="text-6xl text-gray-700"><BsPersonCheckFill /></span>
                        <h5 className="text-xl mt-4 font-light">I have my own</h5>
                    </span>
                </section>
            </div>
            <div className="mt-10">
                <a
                    onClick={e => setDisplayDetails(true)} 
                    className=" text-lg text-green-600 cursor-pointer hover:text-green-500">What's the difference?</a>
            </div>
            {displayDetails &&
                <ul className="w-4/12 mt-10">
                    <li>Pre-made cables are ready to be used instantly.</li>
                    <li>Self-made cables are put together by the customer, we provide the materials.</li>
                    <li>Select "I have my own" if you already have cables you would like to use or you will provide your own.</li>
                </ul>
            }
        
        </div>
    )
}