"use client";
import { trackClick, trackPageView } from "../../analytics";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Comments() {
    const [form, setForm] = useState({
        displayMode: null,
        lighting: null,
        feedback: null,
    });

    const router = useRouter();

    useEffect(() => {
        trackPageView()
    }, []);

    const onSubmit = async () => {
        try {
            await trackClick({ form })

            return router.replace("/success");
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
                        User Preference and Comments
                    </h2>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold">Which display mode did you prefer overall?</h6>
                        <div className="flex flex-col gap-2">
                            <div className="question" onClick={() => setForm({ ...form, displayMode: "light" })}>
                                <input defaultChecked={false} type="radio" name="q1" value="a" checked={form.displayMode === "light"} /> A: Light Mode
                            </div>
                            <div className="question" onClick={() => setForm({ ...form, displayMode: "dark" })}>
                                <input defaultChecked={false} type="radio" name="q1" value="b" checked={form.displayMode === "dark"} /> B: Dark Mode
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold">Which lighting environment felt most comfortable?</h6>
                        <div className="flex flex-col gap-2">
                            <div className="question" onClick={() => setForm({ ...form, lighting: "bright" })}>
                                <input defaultChecked={false} type="radio" name="q2" value="a" checked={form.lighting === "bright"} /> A: Bright
                            </div>
                            <div className="question" onClick={() => setForm({ ...form, lighting: "dim" })}>
                                <input defaultChecked={false} type="radio" name="q2" value="b" checked={form.lighting === "dim"} /> B: Dim
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">💬 Do you have any feedback or comments about the experience?</label>
                        <textarea className="border border-gray-300 rounded-md p-2 h-[200px]" placeholder="Enter your comments here" onChange={(e) => setForm({ ...form, feedback: e.target.value })}></textarea>
                    </div>
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded h-[45px] cursor-pointer flex justify-center items-center"
                    disabled={!form || !form.displayMode || !form.lighting || !form.feedback}
                    onClick={onSubmit}
                >
                    ▶️ Submit
                </button>
            </div>
        </div>
    );
}
