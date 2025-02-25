import classNames from 'classnames'
import { StepTypes } from '../../_types/step-type'
import './Step.css'

type BaseStepProps = {
    id: string,
    text: string
    type?: StepTypes,
}

type IFStepProps = BaseStepProps & {
    yesText?: string,
    noText?: string,
}

type StepProps = BaseStepProps & IFStepProps

export const Step = (props: StepProps) => {
    const { id, type, text, } = props;

    const baseClasses = classNames({
        "p-2": true,
        "bg-zinc-400": type === undefined,
        "bg-red-400": ['start', 'end'].includes(type!)
    })

    if (type === 'if') {
        return <IfStep {...props} />
    }

    return (
        <div className={baseClasses} id={id}>
            {text}
        </div>
    );
}

export const IfStep = ({ id, text }: IFStepProps) => {
    const baseClasses = classNames({
        "bg-yellow-400": true,
        "rotate-90": true
    })

    return (
        <div className={baseClasses} id={id}>
            <div className='rotate-0'>
                {text}
            </div>
        </div>
    );
}