import Link from "@docusaurus/Link";
import { useWindowSize } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Translate, { translate } from "@docusaurus/Translate";

import clsx from "clsx";
import React from "react";
// import AdSense from "react-adsense";
import styles from "./styles.module.css";
const NoteCh = () => (
  <p className="hero__subtitle">
    <Translate id="home.ch_warn">
      Note: This website supports Chinese documents, but uses a translation tool
      which may result in inaccuracies.
    </Translate>
  </p>
);
const features = [
  {
    title: <Translate>Supports</Translate>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <Translate id="home.fd1">
        Code has written mainly in typescript. Which is supper set of
        JavaScript. It also supports Deno.
      </Translate>
    ),
  },
  {
    title: <Translate>Focus on Simplicity</Translate>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <Translate id="home.fd2">
        It is always possible to use libraries like lodash, but it is important
        to learn the concepts on your own.
      </Translate>
    ),
  },
  {
    title: <Translate>Powered by Docusaurus</Translate>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <Translate id="home.fd3">
        Reuse Docusaurus to extend or customize website layout with the same
        header and footer.
      </Translate>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const windowSize = useWindowSize();
  const renderTocDesktop = windowSize === "desktop" || windowSize === "ssr";
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <Head>
        {/* <script type='text/javascript' src=''></script> */}
        </Head>
        <div className="container">
          <h1 className="hero__title">
            {`Welcome to  ${translate({
              id: "home.title",
              message: siteConfig.title,
              description: "This is site title",
            })}`}
          </h1>
          <p className="hero__subtitle">
            {translate({
              id: "home.tagline",
              message: siteConfig.tagline,
              description: "This is site tagline",
            })}
          </p>
          <NoteCh />
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              <Translate>Get Started</Translate>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.centerContent}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <video src={"how_to_access_page.mp4"} controls autoPlay />
          </div>
        </section>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
