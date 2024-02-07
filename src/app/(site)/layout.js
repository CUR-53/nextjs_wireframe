import { getPages } from '../lib/data.service';
import NavigationSite from '@/components/site/navigationSite/navigation';

export default function SiteLayout({ children }) {
  const pages = getPages();

  return (
    <div>
      <NavigationSite pages={pages} />
      {children}
    </div>
  );
}
