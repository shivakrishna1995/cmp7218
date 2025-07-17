import Link from "next/link";

export default function Instructions() {
    return (
        <div className="flex justify-center md:py-10 w-screen min-h-screen bg-gray-100">
            <div className="w-full md:w-[450px] md:max-w-[450px] bg-white p-5 md:rounded-2xl flex flex-col gap-10 py-10">
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-medium text-center">
                        Session [4 of 4]
                    </h2>
                    <div className="flex flex-col">
                        <h6><strong>Display Mode:</strong> <span>Light Theme (set by us)</span></h6>
                        <h6><strong>Lighting Required:</strong> <span>Dim Room (please adjust your surroundings)</span></h6>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-medium">
                        Please do the following:
                    </h4>
                    <ul className="list-disc pl-5">
                        <li>Sit comfortably in the same place as before.</li>
                        <li>Make sure the room is dim (turn off lights or move to a darker area).</li>
                        <li>Do not adjust screen brightness or mode – we’ve set it for you.</li>
                        <li>Keep your focus on the reading — no multitasking!</li>
                    </ul>
                </div>

                <Link href="/condition4/passage" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[45px] cursor-pointer flex justify-center items-center">
                    ▶️ Start Reading
                </Link>
            </div>
        </div>
    );
}
