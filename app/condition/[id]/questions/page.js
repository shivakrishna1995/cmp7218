"use client";
import { trackClick, trackPageView } from "../../../../analytics";
import configJson from "../../../../config.json";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Questions() {
    const [form, setForm] = useState();

    const router = useRouter();

    const { id } = useParams();

    const conditionId = id && parseInt(id);

    const config = configJson.find((item) => item.id === conditionId);

    useEffect(() => {
        trackPageView({
            displayMode: config?.displayMode,
            lighting: config?.lighting,
        })
    }, []);

    const onSubmit = async () => {
        try {
            await trackClick({
                displayMode: config?.displayMode,
                lighting: config?.lighting,
                form,
            })

            if (configJson?.find((item) => item.id == conditionId + 1)) {
                return router.replace(`/condition/${conditionId + 1}/instructions`);
            }

            return router.replace("/comments");
        }
        catch (e) {
            alert("Error submitting results");
        }
    }

    return (
        <div className="flex justify-center md:py-10 w-screen min-h-screen bg-gray-100">
            <div className="w-full md:w-[450px] md:max-w-[450px] bg-white p-5 md:rounded-2xl flex flex-col gap-10 py-10">
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-medium text-center">
                        ❓ Comprehension Questions
                    </h2>
                </div>

                <div className="flex flex-col gap-5">
                    {config.questions.map((question, index) => (
                        <div className="flex flex-col gap-2" key={index}>
                            <h6 className="font-semibold">{question.question}</h6>
                            {question.description && <p>{question.description}</p>}
                            <div className="flex flex-col gap-2">
                                {question.options.map((option, optionIndex) => (
                                    <div key={optionIndex} className="question" onClick={() => setForm({ ...form, [question?.id]: { option, correct: option === question?.options?.[question?.answer], created_at: new Date().toLocaleString() } })}>
                                        <input defaultChecked={false} type="radio" name={`q${index + 1}`} value={option} checked={form?.[question?.id]?.option === option} /> {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded h-[45px] cursor-pointer flex justify-center items-center"
                    disabled={!form || Object.keys(form).length < config.questions.length}
                    onClick={onSubmit}
                >
                    ▶️ Submit
                </button>
            </div>
        </div>
    );
}
