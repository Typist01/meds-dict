import { useEffect, useRef } from "react";

const useScrollToBottom = (onScrollToBottom: () => void) => {
  const scrolled = useRef(false);
  useEffect(() => {
    console.log("useeffect running scroll to bottom");
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;

      console.log("about to fire with ", bottom, "scrolled", scrolled);
      if (bottom && !scrolled.current) {
        console.log("fired");
        scrolled.current = true;
        onScrollToBottom();
        setTimeout(() => {
          scrolled.current = false;
        }, 1000);
        return;
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScrollToBottom]);
};

export { useScrollToBottom };
