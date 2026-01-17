import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";

export default function useHideOnScrollNAV(threshold = 10) {
  const { y } = useWindowScroll();
  const lastY = useRef(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const diff = y - lastY.current;

    if (Math.abs(diff) < threshold) return;

    if (diff > 0) {
      // scrolling down
      setVisible(false);
    } else {
      // scrolling up
      setVisible(true);
    }

    lastY.current = y;
  }, [y, threshold]);

  return visible;
}
