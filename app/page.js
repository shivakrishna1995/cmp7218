"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();

  const onSubmit = () => {
    const user_id = localStorage.getItem("user_id");
    if (user_id) {
      return alert("You have already completed the study.");
    }
    localStorage.setItem("study_1_user_id", Date.now());
    return router.push("/condition/1/instructions");
  };

  return (
    <div className="flex justify-center md:py-10 w-screen min-h-screen bg-gray-100">
      <div className="w-full md:w-[450px] md:max-w-[450px] bg-white p-5 md:rounded-2xl flex flex-col gap-10 py-10">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-medium text-center">
            Welcome to the Reading Experience Study
          </h2>
          <p>
            Thank you for participating. This experiment explores how screen display mode (light or dark) and ambient lighting (bright or dim environment) affect reading comprehension and eye comfort during mobile reading.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-medium">
            🔍 What’s being studied?
          </h4>
          <ul className="list-disc pl-5">
            <li>How light mode vs. dark mode impacts reading.</li>
            <li>How bright vs. dim room lighting changes the experience.</li>
            <li>How these factors affect reading comprehension and eye strain.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-medium">
            🧠 What will you do?
          </h4>
          <ul className="list-disc pl-5">
            <li>Read short content in different conditions</li>
            <li>Answer a few questions after each reading.</li>
            <li>Rate your comfort and eye strain.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-medium">
            📱 Device Use:
          </h4>
          <ul className="list-disc pl-5">
            <li>Use a mobile phone only for this experiment.</li>
            <li>Do not adjust the screen brightness unless instructed.</li>
            <li>Please stay focused and avoid multitasking.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-medium">
            ⏱ Total Duration: 10–15 minutes
          </h4>
          <button
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded h-[45px] cursor-pointer flex justify-center items-center"
            onClick={onSubmit}
          >
            ▶️ Start Experiment
          </button>
        </div>
      </div>
    </div>
  );
}
