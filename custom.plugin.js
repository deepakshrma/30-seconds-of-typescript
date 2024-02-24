export default async function myPlugin(context, opts) {
  return {
    name: "docusaurus-custom-plugin",
    injectHtmlTags({ content }) {
      return {
        postBodyTags: [
          `
      <script type="text/javascript">
          if (typeof window.atAsyncOptions !== 'object') window.atAsyncOptions = [];
          var ids = ['286ff15c1b873aacf8de3968d93bdd8b'];
          for (let id of ids) {
              window.atAsyncOptions.push({
                  'key': id,
                  'format': 'js',
                  'async': true,
                  'container': 'atContainer-' + id,
                  'params': {}
              });
              console.log('//www.topcreativeformat.com/' + id + '/invoke.js');
              var script = document.createElement('script');
              script.type = "text/javascript";
              script.async = true;
              script.src = '//www.topcreativeformat.com/' + id + '/invoke.js';
              document.getElementsByTagName('head')[0].appendChild(script);
          }
    </script>`,
        ],
      };
    },
  };
}
