import { Outlet as Pages } from "react-router";
import SideBar from "../common/components/SideBar";

export const RootLayout = () => {
  return (
    <div className="flex gap-2 bg-background text-text-primary w-full h-screen font-sans py-5 px-5">
      <SideBar />
      <main>
        <Pages />
      </main>
    </div>
  );
};
