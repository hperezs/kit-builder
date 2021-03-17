import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

export default function NavStep({step, setStep, index, selectedStep}) {

    const base_styles = "border rounded-full px-3 py-1 mx-2 cursor-pointer ";
    const hover_styles = "transform transition-transform duration-400 ease-out hover:shadow hover:scale-150 hover:bg-green-100";

    return(
        <Tippy content={<span className="text-xl p-2">{step}</span>} theme="light">
            <div 
                onClick={e => setStep(index + 1)}
                className={base_styles + (selectedStep == (index + 1) ? 'bg-green-600 text-white' : hover_styles)}
            >
                {index + 1}
            </div>
        </Tippy>
    )
}