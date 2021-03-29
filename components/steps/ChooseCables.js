import CableProduct from "./ChooseCables/cableProduct"
import ChooseCable from "./ChooseCables/chooseCable"
import SelfMadeProduct from "./ChooseCables/selfMadeProduct"


export default function ChooseCables({cablesType, cameras, indoorCables, outdoorCables, selfMadeProducts, selectCable}) {

    if(cablesType == 'pre-made')return(
        <section className="my-10">
            <div className="flex flex-col items-start">
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
                {selfMadeProducts.map(product => {
                    return <SelfMadeProduct product={product} handleSelect={(product) => {console.log(product + ' selected.')}}/>
                })}
            </div>
        </section>
    )
    
}