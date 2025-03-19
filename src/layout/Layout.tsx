import NavBar from './NavBar';
import SideBar from './SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SideBar />

      <div className="flex w-full flex-col">
        <NavBar />
        <div className="flex grow bg-gray-100">{children}</div>
      </div>
    </div>
  );
}
