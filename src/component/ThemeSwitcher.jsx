import { useContext } from "react";
import { Theme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useContext(Theme);

  return (
    <div className="fab bottom-[10px]">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-lg btn-circle btn-info"
      >
        <span class="material-symbols-outlined">palette</span>
      </div>

      <div className="fab-close">
        Close <span className="btn btn-circle btn-lg btn-error">✕</span>
      </div>

      <div>
        <button
          className={`btn btn-lg btn-${
            theme == "cyberpunk" ? "primary" : "secondary"
          } rounded-lg`}
          onClick={() => setTheme("cyberpunk")}
        >
          CyberPunk
        </button>
      </div>
      <div>
        <button
          className={`btn btn-lg btn-${
            theme == "abyss" ? "primary" : "secondary"
          } rounded-lg`}
          onClick={() => setTheme("abyss")}
        >
          Abyss
        </button>
      </div>
      <div>
        <button
          className={`btn btn-lg btn-${
            theme == "retro" ? "primary" : "secondary"
          } rounded-lg`}
          onClick={() => setTheme("retro")}
        >
          Retro
        </button>
      </div>
      <div>
        <button
          className={`btn btn-lg btn-${
            theme == "silk" ? "primary" : "secondary"
          } rounded-lg`}
          onClick={() => setTheme("silk")}
        >
          Silk
        </button>
      </div>
      <div>
        <button
          className={`btn btn-lg btn-${
            theme == "coffee" ? "primary" : "secondary"
          } rounded-lg`}
          onClick={() => setTheme("coffee")}
        >
          Coffee
        </button>
      </div>
    </div>
  );
}
