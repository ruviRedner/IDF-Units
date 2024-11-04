import React, { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";

const MissionCompleted = () => {
  const deploymentContext = useContext(DeploymentContext);
  if (!deploymentContext) {
    throw new Error(
      "MissionCompleted must be used within a DeploymentProvider"
    );
  }

  const { units } = deploymentContext;
  console.log(units);
  const allcompleted = Object.values(units).every(
    (status) => status === "Completed"
  );

  return <div>{allcompleted && <h2>כל היחידות הושלמו בהצלחה</h2>}</div>;
};
export default MissionCompleted;
