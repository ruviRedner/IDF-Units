import { createContext, useState } from "react";
import DeploymentContextType from "../types/deployment";
import Children from "../types/children";
const DeploymentContext = createContext<DeploymentContextType | undefined>(
  undefined
);
const DeploymentProvider: React.FC<Children> = ({ children }: Children) => {
  const [units, setUnits] = useState({
    Golani: "Idle",
    Paratroopers: "Idle",
    Givati: "Idle",
    SeaArm: "Idle",
    Artillery: "Idle",
  });

  const setUnitStatus = (unit: string, status: string) => {
    setUnits((prevUnits) => ({ ...prevUnits, [unit]: status }));
  };
  return (
    <DeploymentContext.Provider value={{ units, setUnitStatus }}>
      {children}
    </DeploymentContext.Provider>
  );
};
export { DeploymentProvider, DeploymentContext };
