import { useEffect, useState } from "react";
import { debounce } from "../../static/util";
import { useLocation } from "@docusaurus/router";

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
export function rerenderAds() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname) {
      const scripts = [
        ...document.querySelectorAll(`script[dataid="rerender"]`),
      ];
      for (let script of scripts) {
        const newScript = script.cloneNode(true);
        newScript.id = `ads__${Date.now()}`;
        console.log(script, newScript);
        const url = new URL(newScript.src);
        var sps = url.searchParams;
        sps.set("timestamp", Date.now());
        // sps.delete("timestamp");
        url.search = sps.toString();
        script.remove();
        setTimeout(() => {
          newScript.src = url.href;
          document.head.appendChild(newScript);
        }, 1000);

        // const ns = document.createElement("script")
        // ns.id = `ads__${Date.now()}`;
        // ns.setAttribute("async", "true");
        // ns.setAttribute("dataid", "rerender");
        // const url = new URL(script.src);
        // var sps = url.searchParams;
        // sps.set("timestamp", Date.now());
        // url.search = sps.toString();
        // ns.src =

        // console.log(url);
        // script.remove();

        // document.head.appendChild(newScript);
      }
    }
  }, [pathname]);
}
