import { StepType } from "./step-type";

export type WorkflowType = {
    id: string;
    title: string;
    steps: StepType[]
}