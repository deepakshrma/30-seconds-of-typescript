/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
  useWindowSize,
} from "@docusaurus/theme-common";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import type { Props } from "@theme/DocItem";
import DocItemFooter from "@theme/DocItemFooter";
import DocPaginator from "@theme/DocPaginator";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocVersionBanner from "@theme/DocVersionBanner";
import Heading from "@theme/Heading";
import MDXContent from "@theme/MDXContent";
import TOC from "@theme/TOC";
import TOCCollapsible from "@theme/TOCCollapsible";
import clsx from "clsx";
import React from "react";
import AdSense from "react-adsense";
import styles from "./styles.module.css";

function DocItemMetadata(props: Props): JSX.Element {
  const { content: DocContent } = props;
  const { metadata, frontMatter, assets } = DocContent;
  const { keywords } = frontMatter;
  const { description, title } = metadata;
  const image = assets.image ?? frontMatter.image;

  return <PageMetadata {...{ title, description, keywords, image }} />;
}

function DocItemContent(props: Props): JSX.Element {
  const { content: DocContent } = props;
  const { metadata, frontMatter } = DocContent;
  const {
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;
  const { title } = metadata;

  // We only add a title if:
  // - user asks to hide it with front matter
  // - the markdown content does not already contain a top-level h1 heading
  const shouldAddTitle =
    !hideTitle && typeof DocContent.contentTitle === "undefined";

  const windowSize = useWindowSize();

  const canRenderTOC =
    !hideTableOfContents && DocContent.toc && DocContent.toc.length > 0;

  const renderTocDesktop =
    canRenderTOC && (windowSize === "desktop" || windowSize === "ssr");

  return (
    <div className="row">
      <div className={clsx("col", !hideTableOfContents && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />

            {canRenderTOC && (
              <TOCCollapsible
                toc={DocContent.toc}
                minHeadingLevel={tocMinHeadingLevel}
                maxHeadingLevel={tocMaxHeadingLevel}
                className={clsx(
                  ThemeClassNames.docs.docTocMobile,
                  styles.tocMobile
                )}
              />
            )}

            <div className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}>
              {/*
                Title can be declared inside md content or declared through
                front matter and added manually. To make both cases consistent,
                the added title is added under the same div.markdown block
                See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120
                */}
              <header>
                <div className={styles.Ad}>
                  <AdSense.Google
                    client="ca-pub-9978931678539032"
                    slot="1590530912"
                    style={{ display: "block" }}
                    format="auto"
                    responsive="true"
                  />
                </div>
                {shouldAddTitle && <Heading as="h1">{title}</Heading>}
              </header>
              <MDXContent>
                <DocContent />
                <div className={styles.Ad}>
                  <AdSense.Google
                    client="ca-pub-9978931678539032"
                    slot="9719452314"
                    style={{ display: "block" }}
                    format="auto"
                    responsive="true"
                  />
                </div>
              </MDXContent>
            </div>

            <DocItemFooter {...props} />
          </article>

          <DocPaginator previous={metadata.previous} next={metadata.next} />
        </div>
      </div>
      {renderTocDesktop && (
        <div className="col col--3">
          <div className={styles.Ad}>
            <AdSense.Google
              client="ca-pub-9978931678539032"
              slot="2032797314"
              style={{ display: "block" }}
              format="auto"
              responsive="true"
            />
          </div>
          <TOC
            toc={DocContent.toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
            className={ThemeClassNames.docs.docTocDesktop}
          />
        </div>
      )}
    </div>
  );
}

export default function DocItem(props: Props): JSX.Element {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
  return (
    <HtmlClassNameProvider className={docHtmlClassName}>
      <DocItemMetadata {...props} />
      <DocItemContent {...props} />
    </HtmlClassNameProvider>
  );
}
