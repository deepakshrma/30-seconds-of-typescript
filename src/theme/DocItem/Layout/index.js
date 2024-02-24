import React from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import Unlisted from "@theme/Unlisted";
import styles from "./styles.module.css";
import Ad from "./../../Ad";
/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout({ children }) {
  const docTOC = useDocTOC();
  const {
    metadata: { unlisted },
  } = useDoc();

  return (
    <div className="row">
      <div className={clsx("col", !docTOC.hidden && styles.docItemCol)}>
        {unlisted && <Unlisted />}
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <div>
              <div style={{ display: "flex" }}>
                <DocItemContent>{children}</DocItemContent>
                <Ad
                  options={{
                    key: "286ff15c1b873aacf8de3968d93bdd8b",
                    format: "iframe",
                    height: 600,
                    width: 160,
                    params: {},
                  }}
                ></Ad>
              </div>
              <Ad
                options={
                  docTOC.mobile
                    ? {
                        key: "59ef6ced01ec04fa3c9bd9047ebdb09d",
                        format: "iframe",
                        height: 90,
                        width: 728,
                        params: {},
                      }
                    : {
                        key: "f491f84457706cfe79a69a94e47300b3",
                        format: "iframe",
                        height: 60,
                        width: 468,
                        params: {},
                      }
                }
              ></Ad>
            </div>
            <DocItemFooter />
          </article>
          <div>
            <DocItemPaginator />
          </div>
        </div>
      </div>
      {docTOC.desktop && (
        <div className="col col--3">
          <Ad
            options={{
              key: "cf24f4b1ae2fdc2be88550946aee8280",
              format: "iframe",
              height: 250,
              width: 300,
              params: {},
            }}
          ></Ad>
          {docTOC.desktop}
        </div>
      )}
    </div>
  );
}
