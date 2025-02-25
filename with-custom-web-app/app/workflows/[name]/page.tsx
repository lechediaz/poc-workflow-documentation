'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { WorkflowType } from "../_types/workflow-type";
import { Step } from "../_components/Step/Step";

export default function Page() {
    const { name } = useParams()
    const [loading, setLoading] = useState(false);
    const [workflow, setWorkflow] = useState<WorkflowType>();

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            const wf = await fetch(`/${name}.json`)
                .then<WorkflowType>(response => response.json())
                .finally(() => {
                    setLoading(false);
                });
            console.log('holaa')
            setWorkflow(wf);
        };

        get();
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (workflow === undefined) {
        return <p>Error consultado el flujo, recargue la página.</p>
    }

    return (
        <article>
            <h1>{workflow.title}</h1>
            <section className="grid grid-flow-col">
                {workflow.steps.map(step =>
                    <Step key={step.id} id={step.id} text={step.text} type={step.type} />
                )}
            </section>
        </article>
    )
}