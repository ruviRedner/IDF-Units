import React, { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";
interface Props {
  unitname: string;
}
const UnitStatus = ({ unitname }: Props) => {
  const deploymentContext = useContext(DeploymentContext);
  if (!deploymentContext) {
    throw new Error("UnitStatus must be used within a DeploymentProvider");
  }
  const { units } = deploymentContext;
  return <div>
    <p>{unitname}:{units[unitname]} </p>
  </div>;
}; 

export default UnitStatus;
