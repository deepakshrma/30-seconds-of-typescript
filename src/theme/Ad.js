import { useRef, useEffect, useState } from "react";
import styles from "./styles.module.css";

export function GifAd() {
  const [urls, setUrls] = useState();
  useEffect(() => {
    const giphy = {
      baseURL: "https://api.giphy.com/v1/gifs/",
      apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
      tag: "fail",
      type: "trending",
      rating: "pg-13",
    };
    const giphyURL = encodeURI(
      giphy.baseURL +
        giphy.type +
        "?api_key=" +
        giphy.apiKey +
        "&tag=" +
        giphy.tag +
        "&rating=" +
        giphy.rating +
        "&limit=4"
    );
    fetch(giphyURL)
      .then((x) => x.json())
      .then(({ data }) => {
        setUrls(data.map((x) => x.images?.original?.url));
      });
  }, []);
  return (
    <div className={styles.adscard}>
      {urls?.map((url) => (
        <a
          key={`img__${url}`}
          href="https://www.profitablegatecpm.com/jfv1r01c0?key=03cc2f16f046bbb2820619379a4bcc29"
          target="_blank"
        >
          <img className={`${styles.gifads}`} src={url} />
        </a>
      ))}
    </div>
  );
}

function Banner({ options }) {
  const banner = useRef();
  const id = `atContainer-${options.key}`;
  useEffect(() => {
    if (
      options.format == "iframe" &&
      banner.current &&
      !banner.current.firstChild
    ) {
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
      id={id}
      style={{ width: options.width, height: options.height }}
      className={`${styles.ads} `}
      ref={banner}
    ></div>
  );
}

export default Banner;
