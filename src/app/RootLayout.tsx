import { Outlet as Pages } from "react-router";
import SideBar from "../common/components/SideBar";

export const RootLayout = () => {
  return (
    <div className="flex gap-2 bg-background text-text-primary w-full h-screen font-sans p-5 box-border">
      <SideBar />
      <main className="flex flex-1 min-h-0 flex-col px-8 py-5 bg-[url(/src/assets/landscape.jpg)] bg-cover w-5/6 overflow-auto border border-border-subtle rounded-3xl">
        <div className="flex-1 min-h-0">
          <Pages />
        </div>
      </main>
    </div>
  );
};
