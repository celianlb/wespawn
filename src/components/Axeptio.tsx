import Script from "next/script";

const Axeptio = () => {
    return (
        <Script strategy="afterInteractive" id="axeptio-hotjar">
        {`
            <!-- Axeptio -->
              window.axeptioSettings = {
                clientId: "6484704c2ad3bb7dcc849927",
                cookiesVersion: "wespawn-fr",
              };
              
              (function(d, s) {
                var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                e.async = true; e.src = "//static.axept.io/sdk.js";
                t.parentNode.insertBefore(e, t);
              })(document, "script");

              <!-- Hotjar Tracking Code for https://www.wespawn.fr/ -->
              (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3528713,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
        </Script>
    );
    }

export default Axeptio;
