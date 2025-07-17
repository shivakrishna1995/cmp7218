import Link from "next/link";

export default function Instructions() {
    return (
        <div className="flex justify-center md:py-10 w-screen min-h-screen bg-gray-100">
            <div className="w-full md:w-[450px] md:max-w-[450px] bg-black p-5 md:rounded-2xl flex flex-col gap-10 py-10">
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-medium text-center text-white">
                        📖 Reading Passage: "The Lost Umbrella"
                    </h2>
                </div>
                <p className="text-white">
                    On a rainy morning, Maya rushed to catch her bus. She grabbed her things but forgot her umbrella. When she arrived at work soaked, her colleague offered her a dry jacket and some tea. Later that day, the sun came out, and she laughed about her forgetfulness.
                </p>
                <Link href="/condition1/questions" className="bg-white text-black  font-bold py-2 px-4 rounded h-[45px] cursor-pointer flex justify-center items-center">
                    ▶️ Next – Questions
                </Link>
            </div>
        </div>
    );
}
