

export default function ProgressBar({currentStep}) {

    const containerStyles = {
        height: '4px',
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 100,
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
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}></span>
          </div>
        </div>
      );
};