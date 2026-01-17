import { useWindowSize } from "react-use";

export default function useBreakpoint() {
  const { width } = useWindowSize();

  return {
    width,
    isMobile: width < 768,
    isDesktop: width > 768,
  };
}
