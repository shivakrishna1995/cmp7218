"use client";
import { useParams } from "next/navigation";
import capitalize from "lodash/capitalize";
import configJson from "../../../../config.json";
import { useEffect } from "react";
import { trackPageView, trackClick } from "../../../../analytics";
import { useRouter } from "next/navigation";

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
            return router.replace(`/condition/${conditionId}/passage`);
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
                        Session [{conditionId} of 4]
                    </h2>
                    <div className="flex flex-col">
                        <h6><strong>Display Mode:</strong> <span>{capitalize(config?.displayMode)} Theme (set by us)</span></h6>
                        <h6><strong>Lighting Required:</strong> <span>{capitalize(config?.lighting)} Room (please adjust your surroundings)</span></h6>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-medium">
                        Please do the following:
                    </h4>
                    <ul className="list-disc pl-5">
                        {config?.instructions?.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded h-[45px] cursor-pointer flex justify-center items-center"
                    onClick={onSubmit}
                >
                    ▶️ Start Reading
                </button>
            </div>
        </div>
    );
}
