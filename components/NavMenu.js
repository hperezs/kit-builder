import NavStep from './steps/navStep';

export default function NavMenu({currentStep, setStep, steps}) {

    console.log(steps);

    return(
        <section className="w-full flex flex-row ">
            {steps.map((step, index) => {
                return(<NavStep step={step} setStep={setStep} index={index} currentStep={currentStep} key={index}/>)
            })}
        </section>
    )
}