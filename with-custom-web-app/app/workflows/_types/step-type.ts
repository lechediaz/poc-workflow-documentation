export type StepType = {
    id: string;
    text: string;
    type?: StepTypes;
}

export type StepTypes = 'start' | 'end' | 'if';