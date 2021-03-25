import { useRef, useEffect, useState } from "react";
import {GrCart} from 'react-icons/gr'

export default function Cart({cameras}) {
  const [showCart, setShowCart] = useState(false);
  
  const cart = useRef();

    const handleClick = e => {
      if(!cart.current?.contains(e.target)){
        setShowCart(false);
      }
    }

    useEffect(() => {
      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, [])

    return (
        <>
            <button
                className="absolute top-7 right-0 text-3xl outline-none focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowCart(true)}
            >
            <GrCart />
            </button>
            
            <div
                className={"justify-end items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none " + (showCart ? '' : 'w-0')}
            >
                <div ref={cart} className={"relative ease transition-all duration-300 " + (showCart ? '2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-8/12 sm:w-10/12' : 'w-0')}>
                    {/*content*/}
                    <div className="h-screen shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Cart
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowCart(false)}
                            >
                            <span className="bg-transparent text-black h-6 w-6 text-4xl font-light block outline-none focus:outline-none">
                                ×
                            </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                Cart items go here
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 pb-10 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowCart(false)}
                            >
                            Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"opacity-25 fixed inset-0 z-40 bg-black " + (showCart ? '' : 'hidden')}></div>
        </>
    );
}