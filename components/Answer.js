import HomeOrBusiness from "./steps/homeOrBusiness";
import ChooseCameras from "./steps/ChooseCameras.js";
import ChooseVideoRecorder from "./steps/ChooseVideoRecorder";
import HowToChooseCameras from "./steps/howToChooseCameras";
import SelectCableType from "./steps/SelectCableType";
import ChooseCables from "./steps/ChooseCables";
import ChooseHardDrive from "./steps/ChooseHardDrive";
import SelectAddons from "./steps/SelectAddons";
import ChooseInstallation from "./steps/ChooseInstallation";
import ReviewSystem from "./steps/ReviewSystem";
import ChooseCameraSeries from "./steps/ChooseCameraSeries";

export default function Answer({
  currentStep,
  cameras,
  homeOrBusiness,
  setHomeOrBusiness,
  allProducts,
  indoorCables,
  outdoorCables,
  selfMadeProducts,
  videoRecorders,
  hardDrives,
  selectNewCamera,
  duplicateCamera,
  deleteCamera,
  updateCameraName,
  selectedNVR,
  selectNVR,
  deleteNVR,
  selectedHardDrives,
  addHardDrive,
  deleteHardDrive,
  cablesType,
  selectCablesType,
  selectCable,
  deleteCable,
  selectSMProducts,
  selectedSMProducts,
  deleteSMProduct,
  updateSMProductQuantity,
  monitorProducts,
  mountProducts,
  powerInjectors,
  addMonitor,
  addHDMI,
  addMount,
  deleteMount,
  selectedMonitor,
  deleteMonitor,
  deleteHDMI,
  selectedPowerInjectors,
  addPowerInjector,
  deletePowerInjector,
  isInstallationSelected,
  addInstallation,
  deleteInstallation,
  subtotal,
  goToStep,
  freeProducts,
  proceedToPurchase,
  cyberSecure,
  setCyberSecure,
  csVideoRecorders,
  clearCart,
}) {
  // Skip choose cables step if user selected "I have my own"
  if (cablesType == "none") {
    switch (currentStep) {
      case 1:
        return (
          <HomeOrBusiness
            homeOrBusiness={homeOrBusiness}
            setHomeOrBusiness={setHomeOrBusiness}
          />
        );
      case 2:
        return <HowToChooseCameras />;
      case 3:
        return (
          <ChooseCameraSeries
            cyberSecure={cyberSecure}
            setCyberSecure={setCyberSecure}
            isCartNotEmpty={Boolean(cameras.length || selectedNVR)}
            clearCart={clearCart}
          />
        );
      case 4:
        return (
          <ChooseCameras
            allProducts={allProducts}
            selectNewCamera={selectNewCamera}
            cameras={cameras}
            deleteCamera={deleteCamera}
            updateCameraName={updateCameraName}
            duplicateCamera={duplicateCamera}
            cyberSecure={cyberSecure}
          />
        );
      case 5:
        return (
          <ChooseVideoRecorder
            cameras={cameras}
            videoRecorders={cyberSecure ? csVideoRecorders : videoRecorders}
            selectedNVR={selectedNVR}
            selectNVR={selectNVR}
            cyberSecure={cyberSecure}
          />
        );
      case 6:
        return (
          <ChooseHardDrive
            hardDrives={hardDrives}
            cameras={cameras}
            addHardDrive={addHardDrive}
            selectedHardDrives={selectedHardDrives}
            deleteHardDrive={deleteHardDrive}
          />
        );
      case 7:
        return (
          <SelectCableType
            cablesType={cablesType}
            selectCablesType={selectCablesType}
          />
        );
      case 8:
        return (
          <SelectAddons
            monitorProducts={monitorProducts}
            mountProducts={mountProducts}
            powerInjectors={powerInjectors}
            cameras={cameras}
            addMonitor={addMonitor}
            addHDMI={addHDMI}
            addMount={addMount}
            deleteMount={deleteMount}
            selectedMonitor={selectedMonitor}
            deleteMonitor={deleteMonitor}
            deleteHDMI={deleteHDMI}
            selectedPowerInjectors={selectedPowerInjectors}
            addPowerInjector={addPowerInjector}
            deletePowerInjector={deletePowerInjector}
            duplicateCamera={duplicateCamera}
            deleteCamera={deleteCamera}
            updateCameraName={updateCameraName}
          />
        );
      case 9:
        return (
          <ChooseInstallation
            homeOrBusiness={homeOrBusiness}
            cameras={cameras}
            isInstallationSelected={isInstallationSelected}
            addInstallation={addInstallation}
          />
        );
      case 10:
        return (
          <ReviewSystem
            cameras={cameras}
            selectedNVR={selectedNVR}
            selectedHardDrives={selectedHardDrives}
            subtotal={subtotal}
            selectedSMProducts={selectedSMProducts}
            cablesType={cablesType}
            selectedMonitor={selectedMonitor}
            selectedPowerInjectors={selectedPowerInjectors}
            isInstallationSelected={isInstallationSelected}
            homeOrBusiness={homeOrBusiness}
            goToStep={goToStep}
            deleteCamera={deleteCamera}
            deleteNVR={deleteNVR}
            deleteCable={deleteCable}
            deleteHardDrive={deleteHardDrive}
            deleteMonitor={deleteMonitor}
            deleteHDMI={deleteHDMI}
            deleteMount={deleteMount}
            deletePowerInjector={deletePowerInjector}
            deleteSMProduct={deleteSMProduct}
            deleteInstallation={deleteInstallation}
            freeProducts={freeProducts}
            proceedToPurchase={proceedToPurchase}
          />
        );
    }
  }

  switch (currentStep) {
    case 1:
      return (
        <HomeOrBusiness
          homeOrBusiness={homeOrBusiness}
          setHomeOrBusiness={setHomeOrBusiness}
        />
      );
    case 2:
      return <HowToChooseCameras />;
    case 3:
      return (
        <ChooseCameraSeries
          cyberSecure={cyberSecure}
          setCyberSecure={setCyberSecure}
          isCartNotEmpty={Boolean(cameras.length || selectedNVR)}
          clearCart={clearCart}
        />
      );
    case 4:
      return (
        <ChooseCameras
          allProducts={allProducts}
          selectNewCamera={selectNewCamera}
          cameras={cameras}
          deleteCamera={deleteCamera}
          updateCameraName={updateCameraName}
          duplicateCamera={duplicateCamera}
          cyberSecure={cyberSecure}
        />
      );
    case 5:
      return (
        <ChooseVideoRecorder
          cameras={cameras}
          videoRecorders={cyberSecure ? csVideoRecorders : videoRecorders}
          selectedNVR={selectedNVR}
          selectNVR={selectNVR}
          csVideoRecorders={csVideoRecorders}
          cyberSecure={cyberSecure}
        />
      );
    case 6:
      return (
        <ChooseHardDrive
          hardDrives={hardDrives}
          cameras={cameras}
          addHardDrive={addHardDrive}
          selectedHardDrives={selectedHardDrives}
          deleteHardDrive={deleteHardDrive}
        />
      );
    case 7:
      return (
        <SelectCableType
          cablesType={cablesType}
          selectCablesType={selectCablesType}
        />
      );
    case 8:
      return (
        <ChooseCables
          cablesType={cablesType}
          cameras={cameras}
          selectedNVR={selectedNVR}
          indoorCables={indoorCables}
          outdoorCables={outdoorCables}
          selfMadeProducts={selfMadeProducts}
          selectCable={selectCable}
          deleteCable={deleteCable}
          selectSMProducts={selectSMProducts}
          selectedSMProducts={selectedSMProducts}
          deleteCamera={deleteCamera}
          updateCameraName={updateCameraName}
          deleteSMProduct={deleteSMProduct}
          updateSMProductQuantity={updateSMProductQuantity}
          duplicateCamera={duplicateCamera}
        />
      );
    case 9:
      return (
        <SelectAddons
          monitorProducts={monitorProducts}
          mountProducts={mountProducts}
          powerInjectors={powerInjectors}
          cameras={cameras}
          addMonitor={addMonitor}
          addHDMI={addHDMI}
          addMount={addMount}
          deleteMount={deleteMount}
          selectedMonitor={selectedMonitor}
          deleteMonitor={deleteMonitor}
          deleteHDMI={deleteHDMI}
          selectedPowerInjectors={selectedPowerInjectors}
          addPowerInjector={addPowerInjector}
          deletePowerInjector={deletePowerInjector}
          duplicateCamera={duplicateCamera}
          deleteCamera={deleteCamera}
          updateCameraName={updateCameraName}
        />
      );
    case 10:
      return (
        <ChooseInstallation
          homeOrBusiness={homeOrBusiness}
          cameras={cameras}
          isInstallationSelected={isInstallationSelected}
          addInstallation={addInstallation}
        />
      );
    case 11:
      return (
        <ReviewSystem
          cameras={cameras}
          selectedNVR={selectedNVR}
          selectedHardDrives={selectedHardDrives}
          subtotal={subtotal}
          selectedSMProducts={selectedSMProducts}
          cablesType={cablesType}
          selectedMonitor={selectedMonitor}
          selectedPowerInjectors={selectedPowerInjectors}
          isInstallationSelected={isInstallationSelected}
          homeOrBusiness={homeOrBusiness}
          goToStep={goToStep}
          deleteCamera={deleteCamera}
          deleteNVR={deleteNVR}
          deleteCable={deleteCable}
          deleteHardDrive={deleteHardDrive}
          deleteMonitor={deleteMonitor}
          deleteHDMI={deleteHDMI}
          deleteMount={deleteMount}
          deletePowerInjector={deletePowerInjector}
          deleteSMProduct={deleteSMProduct}
          deleteInstallation={deleteInstallation}
          freeProducts={freeProducts}
          proceedToPurchase={proceedToPurchase}
        />
      );
  }
}
