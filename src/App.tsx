import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Ayaw",
      "Ayaw kunga ?",
      "Oo nga ayaw ko?",
      "Pag isipan mo!",
      "Last chance!",
      "Talagang ayaw mo?",
      "Pagsisisihan mo to!",
      "Bigyan isa pagkakataon!",
      "Sigurado kana talaga?",
      "This could be a mistake!",
      "Puso para sayo!",
      "Nanlalamig kanaba!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "Sinasaktan mo ang puso ko ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <a
        href="https://github.com/dikshikaaa/Valentine-s-day-experiment"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        Visit Source Code on GitHub
      </a>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">Okay ILOVEYOU MWAHH!!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">Will you be my Valentine?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
