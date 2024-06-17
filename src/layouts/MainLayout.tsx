import Header from "@/common/components/Header";
import Sidebar from "@/common/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="block sm:flex md:gap-x-[10rem]">
        <div className="md:basis-[20%]">
          <Sidebar />
        </div>
        <div className="basis-[80%] overflow-y-auto mt-20">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
