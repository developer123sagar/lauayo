import Button from "@/components/ui/Button";
import Logo from "@/components/Logo";

const HeroBanner = () => {
  return (
    <div className="home_bg">
      <main className="flex flex-col justify-center px-6 sm:ml-20 lg:ml-72 w-full sm:w-[240px] h-screen text-white">
        <div className="flex mb-2">
          <div>
            <Logo className="w-60" />
            <p className="w-64 text-sm my-1 font-medium">
              Lauayo represents innovation, creativity, and community. Lorem,
              ipsum dolor sit
            </p>
          </div>
          <div className="flex flex-col sm:ml-6 mt-4 text-purple-800 text-xl">
            <span>A</span>
            <span>Nova</span>
            <span>Era</span>
          </div>
        </div>
        <iframe
          width="352"
          height="180"
          className="w-full sm:w-[352px]"
          src="https://www.youtube.com/embed/ThcbPnCXek4?si=tSOxebXCPZKN75c5"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <p className="text-center text-sm w-full sm:w-[22rem] my-1 mb-4 font-bold">
          The secrets behind the ads of Lauayo, the most accessed platform in
          the world in 2023
        </p>
        <Button className="bg-gradient-to-tr from-[#00DBDE] to-primary-main w-full sm:w-[22rem]">
          I want to advertise on Lauayo and sell more
        </Button>
      </main>
    </div>
  );
};

export default HeroBanner;
