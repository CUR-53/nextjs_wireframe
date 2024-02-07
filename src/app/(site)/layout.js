import Navigation from '@/components/boilerplate/site/navigation/navigation';
import { getPages } from '../lib/data.service';

export default function SiteLayout({ children }) {
  const pages = getPages();

  return (
    <div>
      <Navigation pages={pages} />
      {children}
    </div>
  );
}
