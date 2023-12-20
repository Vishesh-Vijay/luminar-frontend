import Navbar from "@/components/Home/Navbar";
import Sidebar from "@/components/Home/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-[100vh] flex justify-between items-center">
      <div className="w-1/4 h-full">
        <Sidebar />
      </div>

      <div className="w-full h-full flex flex-col justify-between items-center">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
}
