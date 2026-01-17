import { useEffect, useRef } from "react";
import { useWindowScroll } from "react-use";

export default function useCloseOnScroll(setIsOpen, threshold = 5) {
  const { y } = useWindowScroll();
  const lastY = useRef(y);

  useEffect(() => {
    if (Math.abs(y - lastY.current) > threshold) {
      setIsOpen(false); // 🔒 force close on scroll
      lastY.current = y;
    }
  }, [y, setIsOpen, threshold]);
}
