import Link from "next/link";

export default function Instructions() {
    return (
        <div className="flex justify-center md:py-10 w-screen min-h-screen bg-gray-100">
            <div className="w-full md:w-[450px] md:max-w-[450px] bg-black p-5 md:rounded-2xl flex flex-col gap-10 py-10">
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-medium text-center text-white">
                        📖 Reading Passage: "The Secret Recipe"
                    </h2>
                </div>
                <p className="text-white">
                    Leo had always wanted to bake the perfect chocolate cake. After weeks of testing, he finally discovered that adding a pinch of salt made the flavors richer. His friends couldn’t believe how good it was and kept asking for the recipe—he just smiled and said it was a secret.
                </p>
                <Link href="/condition3/questions" className="bg-white text-black font-bold py-2 px-4 rounded h-[45px] cursor-pointer flex justify-center items-center">
                    ▶️ Next – Questions
                </Link>
            </div>
        </div>
    );
}
