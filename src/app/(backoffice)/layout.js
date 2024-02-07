import NavigationBackOffice from '@/components/backoffice/navigationBackOffice/navigationBackOffice';

export default function BackofficeLayout({ children }) {
  return (
    <div lang="en">
      <NavigationBackOffice />
      {children}
    </div>
  );
}
