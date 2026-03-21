import { useEffect } from 'react';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

function PageLayout({ children }) {
  useEffect(() => {
    const previousBodyClass = document.body.className;
    document.body.className = 'customer';

    return () => {
      document.body.className = previousBodyClass;
    };
  }, []);

  return (
    <>
      <SiteHeader />
      <div id="page">{children}</div>
      <SiteFooter />
    </>
  );
}

export default PageLayout;
