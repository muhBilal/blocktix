import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Beasiswa", "Seminar", "Workshop", "Lomba", "Bootcamp"];

const TextEffect = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">
      <TextTransition springConfig={presets.wobbly} className="!h-[52px]">
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </span>
  );
};

export default TextEffect;
