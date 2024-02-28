import { useEffect, useState } from "react";
import { debounce } from "../../static/util";

export function useWindow() {
  const [state, setState] = useState({ isMobile: false });

  useEffect(() => {
    const onResize = debounce(function onResize() {
      const { innerHeight, innerWidth, outerHeight, outerWidth } = window;
      const maxWidth = Math.min(innerWidth, outerWidth);
      setState({
        innerHeight,
        innerWidth,
        outerHeight,
        outerWidth,
        maxWidth,
        isMobile: maxWidth < 768,
      });
    });
    onResize();
    document.addEventListener("resize", onResize);
    return () => document.removeEventListener("resize", onResize);
  }, []);
  return state;
}
