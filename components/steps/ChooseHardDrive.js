import Image from 'next/image'
import {backstreet_domain} from '../../lib/backstreet_domain'

export default function ChooseHardDrive({hardDrives}){

    const input_styles = "inline ml-3 rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 "
    const selectButton_styles = "px-5 py-1 border rounded bg-green-600 text-white text-sm uppercase tracking-wider font-semibold mt-3 transition hover:bg-green-400 focus:outline-none focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-500 ";

    return(
        <section className="my-10">
            <p className="text-lg">The size of the recommended Hard Drive varies according to your recording set-up. Choose between the following options to find the Hard Drive that best suits your needs.</p>

            <div className="flex flex-row justify-evenly mt-20">
                <div style={{width: '380px'}} className="flex flex-col border rounded p-10">
                    <div className="flex flex-row justify-between mb-5 items-center">
                        <label>Days of storage:</label>
                        <select className={input_styles}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="flex flex-row justify-between mb-5 items-center">
                        <label>Recording:</label>
                        <select className={input_styles}>
                            <option>Continuous</option>
                            <option>On Motion only</option>
                        </select>
                    </div>
                    <div className="flex flex-row justify-between mb-5 items-center">
                        <label>Resolution:</label>
                        <select className={input_styles}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="flex flex-row justify-between mb-5 items-center">
                        <label>Frames Per Second (FPS):</label>
                        <select className={input_styles}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                
                <div className="flex flex-row justify-evenly items-center p-5 border rounded">
                    {hardDrives && 
                        hardDrives.map((hardDrive, index) => (
                            <div className="flex flex-col items-center justify-center">
                                <div className="m-4 p-5 flex flex-col justify-center items-center border rounded border-gray-300 ">
                                    <div style={{height: '86px', width: '120px'}}> 
                                        <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                                            <Image
                                                src={'/images/hard_drive_hero.jpg'}
                                                layout="fill"
                                                objectFit="contain"
                                                quality={100}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center mt-5">
                                        <p>{hardDrive.name}</p>
                                        <p className="font-light">{hardDrive.sku}</p>
                                        <p className="text-green-600">${hardDrive.price.toFixed(2)}</p>
                                        <button className={selectButton_styles}>Select</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            
        </section>
    )
}