import Script from "next/script";

const GoogleAnalytics = () => {
    return (
        <Script strategy="afterInteractive" id="googleanalytics">
        {`
            <!-- Google tag (gtag.js) -->
            <script src="https://www.googleoptimize.com/optimize.js?id=jYIJy8fHRge4sgSvSSMojw"></script>
            <script src="https://www.googleoptimize.com/optimize.js?id=OPT-WLN22ZD"></script>
        `}
        </Script>
    );
    }

export default GoogleAnalytics;