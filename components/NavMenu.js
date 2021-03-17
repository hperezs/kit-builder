import { useState } from 'react';
import NavStep from './steps/navStep';
import { steps } from '../lib/steps'

export default function NavMenu({selectedStep, setStep}) {

    return(
        <section className="w-full flex flex-row ">
            {steps.map((step, index) => {
                return(<NavStep step={step} setStep={setStep} index={index} selectedStep={selectedStep}/>)
            })}
            

            
        </section>
    )
}