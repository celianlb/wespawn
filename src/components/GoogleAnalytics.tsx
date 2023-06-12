import Script from "next/script";

const GoogleAnalytics = () => {
    return (
        <Script strategy="afterInteractive" id="googleanalytics">
        {`
            <!-- Google tag (gtag.js) -->
            <script src="https://www.googleoptimize.com/optimize.js?id=OPT-WLN22ZD"></script>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-7FW6ZRB566"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-7FW6ZRB566');
            </script>
        `}
        </Script>
    );
    }

export default GoogleAnalytics;