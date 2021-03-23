import { useState } from 'react'
import StepsProgress from './stepsProgress'
import StepDescription from './stepDescription'

export default function Instructions({hasSeenInstructions, setHasSeenInstructions}) {
    const [showModal, setShowModal] = useState(!hasSeenInstructions);
    const [currentStep, setCurrentStep] = useState(1);

    const finishInstructions = () => {
        setShowModal(false);
        setHasSeenInstructions(true);
    }

    return (
      <>
         {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div style={{maxWidth: '570px'}} className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Choosing cameras
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <StepDescription currentStep={currentStep}/>
                {/*footer*/}
                <div className="flex flex-col border-t pt-3">
                    <StepsProgress currentStep={currentStep} />
                    <div className="flex items-center justify-center p-6 border-solid border-gray-200 rounded-b">
                        {currentStep != 1 &&
                            <button
                                className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setCurrentStep(currentStep - 1)}
                            >
                                Back
                            </button>
                        }
                        <button
                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => (currentStep != 6 ? setCurrentStep(currentStep + 1) : finishInstructions())}
                        >
                            {(currentStep == 6 ? 'Finish' : 'Next')}
                        </button>
                    </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </>
    );
  }