import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TypewriterLoopProps {
  LeadText: string;
  morphingText: string[];
}

export default function TypewriterLoop({ LeadText, morphingText }: TypewriterLoopProps) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = morphingText[index];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentWord) {
      // Pause before starting to delete
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % morphingText.length);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.substring(0, displayedText.length - 1)
          : currentWord.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, morphingText]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
      <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
        {LeadText}
      </span>
      <div className="relative min-w-[200px] sm:min-w-[320px] md:min-w-[400px] h-14 sm:h-20 flex items-center justify-center sm:justify-start">
        <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-zinc-400 tracking-tight inline-block select-none">
          {displayedText}
        </span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-1 sm:w-2 h-10 sm:h-16 ml-1 bg-zinc-300"
        />
      </div>
    </div>
  );
}
