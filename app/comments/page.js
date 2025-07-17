import Link from "next/link";

export default function Comments() {
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
                            <div>
                                <input type="radio" name="q1" value="a" /> A: Light Mode
                            </div>
                            <div>
                                <input type="radio" name="q1" value="b" /> B: Dark Mode
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h6 className="font-semibold">Which lighting environment felt most comfortable?</h6>
                        <div className="flex flex-col gap-2">
                            <div>
                                <input type="radio" name="q2" value="a" /> A: Bright
                            </div>
                            <div>
                                <input type="radio" name="q2" value="b" /> B: Dim
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">💬 Do you have any feedback or comments about the experience?</label>
                        <textarea className="border border-gray-300 rounded-md p-2 h-[200px]" placeholder="Enter your comments here"></textarea>
                    </div>
                </div>

                <Link href="/success" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[45px] cursor-pointer flex justify-center items-center">
                    ▶️ Submit
                </Link>
            </div>
        </div>
    );
}
