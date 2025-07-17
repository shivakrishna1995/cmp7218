import Link from "next/link";

export default function Success() {
    return (
        <div className="flex justify-center md:py-10 w-screen min-h-screen bg-gray-100">
            <div className="w-full md:w-[450px] md:max-w-[450px] bg-white p-5 md:rounded-2xl flex flex-col gap-10 py-10">
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-medium text-center">
                        🎉 Thank You!
                    </h2>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-medium">
                        ✅ You’ve completed all reading sessions.
                    </h4>
                    <p>
                        Thank you for participating in our study on display modes and ambient lighting during reading.
                        Your responses have been recorded and will help us better understand how screen and environment settings affect reading comprehension and eye comfort on mobile devices.
                    </p>
                </div>
            </div>
        </div>
    );
}
