import Link from "next/link";

export default function Instructions() {
    return (
        <div className="flex justify-center md:py-10 w-screen min-h-screen bg-gray-100">
            <div className="w-full md:w-[450px] md:max-w-[450px] bg-white p-5 md:rounded-2xl flex flex-col gap-10 py-10">
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-medium text-center">
                        📖 Reading Passage: "The Astronaut’s View"
                    </h2>
                </div>
                <p>
                    Orbiting the Earth, astronaut Asha looked out of the window and saw the curve of the planet beneath her. The sunrise stretched across the horizon in shades of orange and pink. Floating in zero gravity, she felt both small and inspired by the beauty of the world.
                </p>
                <Link href="/condition2/questions" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-[45px] cursor-pointer flex justify-center items-center">
                    ▶️ Next – Questions
                </Link>
            </div>
        </div>
    );
}
