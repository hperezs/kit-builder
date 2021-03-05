import { useEffect, useState } from "react";

export default function Question({ step }) {
    const [ currentQuestion, setCurrentQuestion ] = useState('');

    useEffect(() => {
        switch(step) {
            case 0:
                setCurrentQuestion('Are you purchasing a surveillance system for a home or a business?');
                break;
            case 1:
                setCurrentQuestion('Choose your type of surveillance system')
                break;
            case 2: 
                setCurrentQuestion('Where are you placing your cameras?');
                break;
            case 3:
                setCurrentQuestion('How many cameras do you need?');
                break;
            case 4:
                setCurrentQuestion('Choosing the right cameras');
                break;
            case 5:
                setCurrentQuestion('About Camera Housings');
                break;
            case 6:
                setCurrentQuestion('Select Camera Housing');
                break;
            case 7:
                setCurrentQuestion('Before Selecting a Camera Lens');
                break;
            case 8:
                setCurrentQuestion('Select Camera Lens');
                break;
            case 9:
                setCurrentQuestion('Night Vision Distance');    
                break;
            case 10:
                setCurrentQuestion('Choose your cameras');
                break;
            case 11:
                setCurrentQuestion('Choose a Video Recorder')
        }
    })
    

    return(
        <h4 className="text-3xl text-gray-800 mt-5">
            {currentQuestion}
        </h4>
    )
}