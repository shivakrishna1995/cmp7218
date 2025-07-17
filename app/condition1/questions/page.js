import Link from "next/link";

export default function Questions() {
    return (
        <div className="flex justify-center md:py-10 w-screen min-h-screen bg-gray-100">
            <div className="w-full md:w-[450px] md:max-w-[450px] bg-white p-5 md:rounded-2xl flex flex-col gap-10 py-10">
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-medium text-center">
                        ❓ Comprehension Questions
                    </h2>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold">Where did the children gather?</h6>
                        <div className="flex flex-col gap-2">
                            <div>
                                <input type="radio" name="q1" value="a" /> A: At school
                            </div>
                            <div>
                                <input type="radio" name="q1" value="b" /> B: In a park
                            </div>
                            <div>
                                <input type="radio" name="q1" value="c" /> C: On the street
                            </div>
                            <div>
                                <input type="radio" name="q1" value="d" /> D: In a garden
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold">What were they doing?</h6>
                        <div className="flex flex-col gap-2">
                            <div>
                                <input type="radio" name="q2" value="a" /> A: Swimming
                            </div>
                            <div>
                                <input type="radio" name="q2" value="b" /> B: Building sandcastles
                            </div>
                            <div>
                                <input type="radio" name="q2" value="c" /> C: Floating paper boats
                            </div>
                            <div>
                                <input type="radio" name="q2" value="d" /> D: Flying kites
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold">What happened to Sam’s boat?</h6>
                        <div className="flex flex-col gap-2">
                            <div>
                                <input type="radio" name="q3" value="a" /> A: It sank
                            </div>
                            <div>
                                <input type="radio" name="q3" value="b" /> B: It flew away
                            </div>
                            <div>
                                <input type="radio" name="q3" value="c" /> C: It broke
                            </div>
                            <div>
                                <input type="radio" name="q3" value="d" /> D: It won the race
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold">Eye Strain Rating (7-point Likert scale)</h6>
                        <p>How comfortable were your eyes while reading?</p>
                        <div className="flex flex-col gap-2">
                            <div>
                                <input type="radio" name="q3" value="a" /> 1 – Very uncomfortable
                            </div>
                            <div>
                                <input type="radio" name="q3" value="b" /> 2 – Uncomfortable
                            </div>
                            <div>
                                <input type="radio" name="q3" value="c" /> 3 – Slightly uncomfortable
                            </div>
                            <div>
                                <input type="radio" name="q3" value="d" /> 4 – Neutral
                            </div>
                            <div>
                                <input type="radio" name="q3" value="e" /> 5 – Slightly comfortable
                            </div>
                            <div>
                                <input type="radio" name="q3" value="e" /> 6 – Comfortable
                            </div>
                            <div>
                                <input type="radio" name="q3" value="e" /> 7 – Very comfortable
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold">Readability Rating (7-point Likert scale)</h6>
                        <p>How easy was it to read the text?</p>
                        <div className="flex flex-col gap-2">
                            <div>
                                <input type="radio" name="q3" value="a" /> 1 – Very difficult
                            </div>
                            <div>
                                <input type="radio" name="q3" value="b" /> 2 – Difficult
                            </div>
                            <div>
                                <input type="radio" name="q3" value="c" /> 3 – Slightly difficult
                            </div>
                            <div>
                                <input type="radio" name="q3" value="d" /> 4 – Neutral
                            </div>
                            <div>
                                <input type="radio" name="q3" value="e" /> 5 – Slightly easy
                            </div>
                            <div>
                                <input type="radio" name="q3" value="e" /> 6 – Easy
                            </div>
                            <div>
                                <input type="radio" name="q3" value="e" /> 7 – Very easy
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/condition2/instructions" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[45px] cursor-pointer flex justify-center items-center">
                    ▶️ Submit
                </Link>
            </div>
        </div>
    );
}
