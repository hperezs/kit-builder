export default function ProgressBar({ progress }) {
  const containerStyles = {
    height: "5px",
    width: "100%",
    backgroundColor: "#e0e0de",
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress * 100}%`,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 0.75s ease",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles} className="fixed top-0 z-40">
      <div style={fillerStyles} className="bg-green-600">
        <span style={labelStyles}></span>
      </div>
    </div>
  );
}
