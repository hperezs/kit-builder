

export default function ProgressBar({currentStep}) {

    const containerStyles = {
        height: '6px',
        width: '100%',
        backgroundColor: "#e0e0de",
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${currentStep / 9 * 100}%`,
        backgroundColor: '#10B981',
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 0.75s ease'
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
    
      return (
        <div style={containerStyles} className="fixed top-0 z-40">
          <div style={fillerStyles}>
            <span style={labelStyles}></span>
          </div>
        </div>
      );
};