import { useRef, useEffect } from "react";
import styles from "./styles.module.css";

function Banner({ options }) {
  const banner = useRef();

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.topcreativeformat.com/${options.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(options)}`;
      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner]);

  return (
    <div
      style={{ width: options.width+10, height: options.height+10 }}
      className={styles.ads}
      ref={banner}
    ></div>
  );
}

export default Banner;
