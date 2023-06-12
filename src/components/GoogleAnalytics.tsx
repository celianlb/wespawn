import Script from "next/script";

const GoogleAnalytics = () => {
    return (
        <><Script src="https://www.googletagmanager.com/gtag/js?id=G-7FW6ZRB566" strategy="afterInteractive" id="googleanalytics"></Script>
        <Script strategy="afterInteractive">
            {`
            //Google tag (gtag.js)
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-7FW6ZRB566');
        `}
        </Script>
        <Script src="https://www.googleoptimize.com/optimize.js?id=OPT-WLN22ZD" strategy="afterInteractive" id="googleoptimize"></Script></>
    );
    }

export default GoogleAnalytics;