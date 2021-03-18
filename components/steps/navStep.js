import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

export default function NavStep({step, setStep, index, currentStep}) {

    const base_styles = "border rounded-full px-3 py-1 mx-2 ";
    const hover_styles = "cursor-pointer transform transition-transform duration-400 ease-out hover:shadow hover:scale-150 hover:bg-green-100";

    return(
        <Tippy content={<span className="text-xl p-2">{step.label}</span>} theme="light">
            <div 
                onClick={(step.isDisabled ? null : e => setStep(index + 1))}
                className={base_styles  + (currentStep == (index + 1) ? 'bg-green-600 text-white cursor-pointer ' : (step.isDisabled ? 'cursor-not-allowed bg-gray-100 text-gray-600 ' : hover_styles))}
            >
                {index + 1}
            </div>
        </Tippy>
    )
}