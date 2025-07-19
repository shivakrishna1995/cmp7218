"use client";
import { useEffect } from "react";
import configJson from "../../../../config.json";
import { useParams, useRouter } from "next/navigation";
import { trackClick, trackPageView } from "../../../../analytics";

export default function Instructions() {
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
            })
            return router.replace(`/condition/${conditionId}/questions`);
        }
        catch (e) {
            alert("Error submitting results");
        }
    }

    return (
        <div className="flex justify-center md:py-10 w-screen min-h-screen bg-gray-100">
            <div className={`w-full md:w-[450px] md:max-w-[450px] ${config?.displayMode === "dark" ? "bg-black" : "bg-white"} p-5 md:rounded-2xl flex flex-col gap-10 py-10`}>
                <div className="flex flex-col gap-5">
                    <h2 className={`text-2xl font-medium text-center ${config?.displayMode === "dark" ? "text-white" : "text-black"}`}>
                        📖 Reading Passage: "The Quiet Library"
                    </h2>
                </div>
                <p className={config?.displayMode === "dark" ? "text-white" : "text-black"}>
                    {config.paragraph}
                </p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded h-[45px] cursor-pointer flex justify-center items-center"
                    onClick={onSubmit}
                >
                    ▶️ Next – Questions
                </button>
            </div>
        </div >
    );
}
