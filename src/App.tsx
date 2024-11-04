import React, { useContext } from "react";
import UnitList from "./compo/UnitList";
import MissionCompleted from "../src/compo/MissionCompleted";
import { DeploymentContext } from "./context/DeploymentContext";

const App: React.FC = () => {
  const deploymentContext = useContext(DeploymentContext);
  if (!deploymentContext) {
    throw new Error("UnitList must be used within a DeploymentProvider");
  }
  const { units, setUnitStatus } = deploymentContext;
  const hendelClick = () => {
    Object.keys(units).forEach((unitname) => {
      setUnitStatus(unitname, "Idel");
    });
  };
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>מעקב פריסת יחידות צה"ל</h1>
      <UnitList />
      <MissionCompleted />
      <button onClick={hendelClick}>רענון</button>
    </div>
  );
};

export default App;
