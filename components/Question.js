import { useEffect, useState } from "react";

export default function Question({ currentStep }) {
    const [ currentQuestion, setCurrentQuestion ] = useState('');

    useEffect(() => {
        switch(currentStep) {
            case 1:
                setCurrentQuestion('Are you purchasing a surveillance system for a home or a business?');
                break;
            case 2:
                setCurrentQuestion('How many cameras do you need?');
                break;
            case 3:
                setCurrentQuestion('Choosing the right cameras');
                break;
            case 4:
                setCurrentQuestion('About Camera Housings');
                break;
            case 5:
                setCurrentQuestion('Select Camera Housing');
                break;
            case 6:
                setCurrentQuestion('Before Selecting a Camera Lens');
                break;
            case 7:
                setCurrentQuestion('Select Camera Lens');
                break;
            case 8:
                setCurrentQuestion('Night Vision Distance');    
                break;
            case 9:
                setCurrentQuestion('Choose your cameras');
                break;
            case 10:
                setCurrentQuestion('Choose a Video Recorder')
        }
    })
    

    return(
        <h4 className="text-3xl text-gray-800 mt-5">
            {currentQuestion}
        </h4>
    )
}