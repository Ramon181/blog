import { useEffect, useState } from "react";
import "./Loading.css";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress =>
        prevProgress >= 100 ? 100 : prevProgress + 1
      );
    }, 5);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div class="loading-page">
      <div class="counter">
        <p
          className="ceviche_one uppercase font-semibold text-4xl"
          href="/"
        >
          <span className="text-[#0079c1]">Anime</span>
          gyarakushī
        </p>
        <h1>{progress}%</h1>
        <hr style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Loading;
