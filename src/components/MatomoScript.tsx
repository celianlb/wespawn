import { useEffect } from 'react';

const MatomoScript = () => {
  useEffect(() => {
    (window as any)._paq = (window as any)._paq || [];
    (window as any)._paq.push(['trackPageView']);
    (window as any)._paq.push(['enableLinkTracking']);

    (function () {
      const u = 'https://wespawn1.matomo.cloud/';
      (window as any)._paq.push(['setTrackerUrl', u + 'matomo.php']);
      (window as any)._paq.push(['setSiteId', '1']);

      const d = document;
      const g = d.createElement('script');
      const s = d.getElementsByTagName('script')[0];
      g.async = true;
      g.src = '//cdn.matomo.cloud/wespawn1.matomo.cloud/matomo.js';
      s.parentNode?.insertBefore(g, s);
    })();
  }, []);

  return null;
};

export default MatomoScript;
