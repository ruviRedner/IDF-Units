import React, { useContext, useState } from "react";
import { DeploymentContext } from "../context/DeploymentContext";
interface Props {
  unitname: string;
}
enum status {
  idel = "Idle",
  Deployed = "Deployed",
  Active = "Active",
  Completed = "Completed",
}

const ChangeStatus: React.FC<Props> = ({ unitname }: Props) => {
  const deploymentContext = useContext(DeploymentContext);
  if (!deploymentContext) {
    throw new Error("UnitStatus must be used within a DeploymentProvider");
  }

  const { setUnitStatus, units } = deploymentContext;
  const cuurentStatus = units[unitname];
  const hendelStatus = () => {
    let nextStatus;
    switch (cuurentStatus) {
      case status.idel:
        nextStatus = status.Deployed;
        break;

      case status.Deployed:
        nextStatus = status.Active;
        break;
      case status.Active:
        nextStatus = status.Completed;
        break;

      default:
        throw new Error("Invalid status");
    }
    setUnitStatus(unitname, nextStatus);
  };

  return (
    <div>
      <button onClick={hendelStatus}>{unitname} פריסת</button>
    </div>
  );
};

export default ChangeStatus;
