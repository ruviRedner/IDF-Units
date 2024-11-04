import React, { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";
import UnitStatus from "./UnitStatus";
import ChangeStatus from "./ChangeStatus";

const UnitList = () => {
  const deploymentContext = useContext(DeploymentContext);
  if (!deploymentContext) {
    throw new Error("UnitList must be used within a DeploymentProvider");
  }
  const { units } = deploymentContext;;

  return (
    <div>
      <h2>רשימת יחידות</h2>
      {Object.keys(units).map((unitname) => (
        <div key={unitname}>
        <UnitStatus unitname={unitname}  />
        <ChangeStatus unitname={unitname}  />
        </div>
      ))}
        
    </div>
  );
};

export default UnitList;
