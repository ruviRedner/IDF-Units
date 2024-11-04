export default interface DeploymentContextType{
    units:{[key: string]: string}
    setUnitStatus: (unit: string, status: string) => void;

}