import Script from "next/script";

const Axeptio = () => {
    return (
        <Script strategy="afterInteractive">
        {`
            window.axeptioSettings = {
            clientId: "6481e6ab8560303fec55a822",
            cookiesVersion: "wespawn-fr",
            };
            (function(d, s) {
            var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
            e.async = true; e.src = "//static.axept.io/sdk.js";
            t.parentNode.insertBefore(e, t);
            })(document, "script");
        `}
        </Script>
    );
    }

export default Axeptio;
