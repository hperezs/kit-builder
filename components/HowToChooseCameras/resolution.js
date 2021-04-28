import Image from "next/image";


export default function Resolution() {

    return(
        <section id="cameraLenses" className="my-10 pb-5">
            <h3 className="text-center my-10 text-4xl font-light">Resolution</h3>
            <div className="flex flex-col items-center justify-center">
                <div className="lg:w-9/12 2xl:w-7/12">
                    <p>
                        There have been many different resolution standards throughout the years. The latest that we recommend is <span className="text-green-600 font-semibold">3K (5+ Megapixel)</span> and <span className="text-green-600 font-semibold">4K (8 Megapixel)</span>. 
                        <br/> <br/>Often the right choice is a 3K camera for general medium range surveillance such as hallways or an office. The smaller resolution allows for smaller hard drives and 3K cameras cost less than 4K. However, if you want crisp and clear detail at distance with superior digital zoom, then you should go with 4K cameras. Keep in mind that you can mix 3K and 4K cameras on the same system.
                    </p>
                    <br/>
                </div>
                <div style={{height: '200px', width: '100%'}} className="mt-7"> 
                    <div style={{position: 'relative', maxWidth: '100%', height: '100%'}}>
                        <Image
                            src={"/images/resolution.jpg"}
                            layout="fill"
                            objectFit="contain"
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}