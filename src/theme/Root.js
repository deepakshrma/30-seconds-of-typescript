import React from "react";

function Root({ children }) {
  console.log(">>>>>>>>>>>>", window.location.href);
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7756182462259588"
        crossorigin="anonymous"
      ></script>
      {children}
    </>
  );
}

export default Root;
