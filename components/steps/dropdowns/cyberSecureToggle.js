import Toggle from "react-toggle";

export default function CyberSecureToggle({
  cyberSecure,
  setCybersecure,
  cameraLens,
  cameraHousing,
  resolution,
}) {
  const isDisabled = cameraLens === "Manual Zoom";

  return (
    <label className="mx-auto">
      <Toggle
        icons={false}
        defaultChecked={cyberSecure}
        onChange={(e) => setCybersecure(e.target.checked)}
        disabled={isDisabled}
      />
    </label>
  );
}
