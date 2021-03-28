import { FC } from "react";
import "./App.css";
import CharacterList from "./CharacterList";

const App: FC = () => {
  const characterNames = [
    "桜木花道",
    "流川 楓",
    "宮城リョータ",
    "三井 寿",
    "赤木剛憲",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>『SLAM DUNK』登場人物</h1>
      </header>

      <CharacterList characterNames={characterNames} />
    </div>
  );
};

export default App;
