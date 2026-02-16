"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Please don't be upset?",
      "Please hear me out...🥺",
      "I didn't mean it 🥺",
      "I'm really sorry jaan 😭",
      "I'll never do it again",
      "Please forgive me jaan",
      "I feel terrible 😔",
      "I miss you ❤️",
      "You're important to me alot jaan",
      "I know i am the worst person sorry 😔",
      "I'm begging you 😭",
      "I love you alot",
      "I can't see you sad , please forgive me sorry 😔",
      "Please smile and forgive me ❤️",
      "Still no? 😢",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            Thank you for forgiving me 🥺❤️ I promise I will be better , I LOVE YOU ALOT ❤️!
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Please Forgive Me Love, Please</h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Forgiven ❤️
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Not yet 😤" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
