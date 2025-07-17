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
                        <h6 className="font-semibold">When did Omar visit the library?</h6>
                        <div className="flex flex-col gap-2">
                            <div>
                                <input type="radio" name="q1" value="a" /> A: Every Monday
                            </div>
                            <div>
                                <input type="radio" name="q1" value="b" /> B: Every Saturday
                            </div>
                            <div>
                                <input type="radio" name="q1" value="c" /> C: Once a year
                            </div>
                            <div>
                                <input type="radio" name="q1" value="d" /> D: Only during holidays
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold">What did he find in the book?</h6>
                        <div className="flex flex-col gap-2">
                            <div>
                                <input type="radio" name="q2" value="a" /> A bookmark
                            </div>
                            <div>
                                <input type="radio" name="q2" value="b" /> B: A love letter
                            </div>
                            <div>
                                <input type="radio" name="q2" value="c" /> C: A quote
                            </div>
                            <div>
                                <input type="radio" name="q2" value="d" /> D: A receipt
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold">How did the note affect him?</h6>
                        <div className="flex flex-col gap-2">
                            <div>
                                <input type="radio" name="q3" value="a" /> A: It scared him
                            </div>
                            <div>
                                <input type="radio" name="q3" value="b" /> B: It made him confused
                            </div>
                            <div>
                                <input type="radio" name="q3" value="c" /> C: It made his day
                            </div>
                            <div>
                                <input type="radio" name="q3" value="d" /> D: He ignored it
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

                <Link href="/comments" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[45px] cursor-pointer flex justify-center items-center">
                    ▶️ Submit
                </Link>
            </div>
        </div>
    );
}
