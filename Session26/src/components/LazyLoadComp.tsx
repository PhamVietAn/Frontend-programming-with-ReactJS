import { useEffect, useRef, useState } from "react";

function generateParagraphs(count: number) {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod nisi.";
  return Array.from({ length: count }, () => lorem);
}

export default function LazyLoadComp() {
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const paragraphs = generateParagraphs(100);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10 && visibleCount < paragraphs.length) {
        setLoading(true);
        setTimeout(() => {
          setVisibleCount((prev) => Math.min(prev + 10, paragraphs.length));
          setLoading(false);
        }, 800);
      }
    };

    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref) ref.removeEventListener("scroll", handleScroll);
    };
  }, [visibleCount, paragraphs.length]);

  return (
    <div
      ref={containerRef}
      className="h-[400px] overflow-y-auto bg-gray-400 p-6 rounded"
      style={{ position: "relative" }}
    >
      {paragraphs.slice(0, visibleCount).map((text, idx) => (
        <p key={idx} className="mb-4 text-white">{text}</p>
      ))}
      {loading && (
        <div className="flex justify-center items-center absolute left-0 right-0 bottom-4">
          <img src="https://i.imgur.com/llF5iyg.gif" alt="loading" width={60} />
        </div>
      )}
    </div>
  );
}