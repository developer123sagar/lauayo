import { useEffect, useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { GoAlert } from "react-icons/go";

import Button from "@/components/ui/Button";
import Footer from "@/components/Footer";
import Mainpage from "@/common/Mainpage/Mainpage";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/Home/HeroBanner";
import { HOME_ADVANTAGE } from "@/constants";
import { setUser } from "@/redux/reducers/AuthReducer";
import { useAppDispatch } from "@/redux/store";
import { useGetLoginUserInfoQuery } from "@/redux/api/AuthApi";

const Home = () => {
  const [getData, setGetData] = useState(true);
  const { data, isSuccess, isLoading } = useGetLoginUserInfoQuery(null, {
    skip: getData,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      setGetData(false);
    }, 0);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data));
    }
  }, [data, dispatch, isSuccess]);

  return (
    <>
      {data || isLoading ? (
        <Mainpage />
      ) : (
        <div className=" overflow-hidden">
          {/* 1st part */}
          <Navbar />
          <HeroBanner />
          {/* second part */}
          <div className="bg-primary-main text-white flex justify-center flex-col items-center px-4 sm:px-10 py-10">
            <h1 className="uppercase font-bold text-center mb-2">
              the new era of digital marketing for creators
            </h1>
            <h2 className="my-2 text-center tracking-wider">
              Generate results before your competitor arrives first.
            </h2>
            <p className="text-center px-4 lg:px-72 mb-7">
              A new way for you to advertise and the chance for you to reach
              your audience and have more sales in photography. whoever arrives
              first drinks clean water,
              <span className="text-[#5ccae6]">
                {" "}
                so it&apos;s time for you to catch up
              </span>
            </p>
            <p className="text-center">
              LauAyo became the most accessed site in the world in 2023, and
              everything indicates that it is here to stay.
            </p>
          </div>
          {/* third part */}
          <div className="home2_bg px-2 sm:pt-10 pt-5">
            <div className="w-full lg:w-[60%] sm:pl-20  lg:pt-32 sm:pr-5 float-right text-white">
              <h1 className="bg-primary-main w-fit py-2 px-4 mb-5 rounded-3xl text-sm ">
                What is the advantage of the photographer advertising on Lauayo
                Ads?
              </h1>
              <ul className="w-full">
                {HOME_ADVANTAGE.map((item, id) => (
                  <li key={id} className="flex gap-2 my-1">
                    <div className="rounded-full flex_center w-6 h-6 bg-[#39d1e5]">
                      <FaCheck />
                    </div>
                    <div className="basis-[90%] sm:basis-[80%]">
                      <h3 className="text-primary-main text-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm my-2 pr-5">{item.content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* fourth part */}
          <div className="w-screen sm:h-[60vh] flex flex-col sm:flex-row sm:gap-4 lg:gap-20 bg-white">
            <img
              src="/phone.jpg"
              alt="lauayo"
              className="w-[90%] sm:w-[40%] px-2 mx-auto sm:mx-0 object-contain"
            />
            <div className="sm:mt-12 lg:mt-20 w-full lg:w-[80%]">
              <h1 className="text-lg px-2 lg:text-2xl my-4 font-bold w-full lg:w-[60%]">
                Today it is very difficult to have results on face and Google,
                right?
              </h1>
              <p className="w-full px-2 text-sm lg:w-[60%]">
                On Lauayo , you advertise to more poeple, investing much less.
                Your metrics are cheaper than if you were advertising on Face or
                Google. <br />
                <br />
                Ridiculously cheap metrics that were only seen 5 years ago.{" "}
                <br />
                <br /> A gold mine with very little competition. But only those
                who are fast , if they update as soon as possible and master
                this platform, will have more results by investing much less...
              </p>
            </div>
          </div>
          {/* fifth part */}
          <div className="bg-primary-main py-10 mt-8">
            <GoAlert className="text-white mx-auto" size={30} />
            <p className="text-white font-bold text-lg text-center sm:text-2xl uppercase w-full px-2 sm:w-[60%] mx-auto mt-4">
              those who don&apos;t update will be swallowed by the market, lose
              a lot of money and fall behind other photographers!
            </p>
          </div>
          {/* sixth part */}
          <ul className="py-10 flex flex-col sm:flex-row px-2 justify-center items-center">
            <li className="w-60 text-center p-5 mr-10">
              <h1 className="uppercase text-2xl">
                From zero to your first announcement
              </h1>
              <span className="uppercase text-2xl w-fit">Lauayo</span>
            </li>
            <li className="flex flex-col gap-6">
              <div className="bg-primary-main text-white p-3 flex gap-2 items-center justify-between">
                1. access to the complete course from basic to advanced{" "}
                <AiOutlineCaretRight />
              </div>
              <div className="bg-primary-main text-white p-3 flex gap-2 items-center justify-between">
                2. access to all platform updates and new strategies
                <AiOutlineCaretRight />
              </div>
              <Button className="bg-gradient-to-tr from-[#00DBDE] to-primary-main w-[22rem] mx-auto">
                I want to advertise on Lauayo and sell more
              </Button>
            </li>
          </ul>
          {/* seventh part */}
          <ul className="bg-gradient-to-r from-[#030211] to-[#00d4ff] py-20 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center px-2 lg:pl-52">
            <li className="flex flex-col items-center justify-center">
              <strong className="text-3xl text-white font-extrabold">3</strong>
              <span className="uppercase text-5xl text-white font-extrabold">
                bonus
              </span>
              <span className="text-white">Exclusive</span>
            </li>
            <li className="flex flex-col gap-4">
              <div className="bg-primary-main text-white p-3 flex gap-2 items-center justify-between">
                1. access to the complete course from basic to advanced{" "}
                <AiOutlineCaretRight />
              </div>
              <div className="bg-primary-main text-white p-3 flex gap-2 items-center justify-between">
                2. access to all platform updates and new strategies
                <AiOutlineCaretRight />
              </div>
            </li>
          </ul>
          {/* eighth part */}
          <div className="bg-black py-20 flex flex-col sm:flex-row px-2 gap-10 lg:gap-20 justify-center">
            <div className="bg-white w-full sm:w-[45%] lg:w-[25%] h-[200px] flex flex-col justify-center rounded-md p-5">
              <h1 className="text-xl mb-4">Special launch price - 80% off</h1>
              <p>
                That&apos;s right, this course is worth Rs.497, but it will have
                a special launch value <br /> this promotion will go off the air
                at any time.
              </p>
            </div>
            <div className="text-white flex flex-col justify-center text-lg">
              <h2>The whole course Lauayo ads + 3 Bonus</h2>
              <p className="flex_col_center">
                <span>12x of </span>
                <strong className="text-3xl">RS 999</strong>
              </p>
              <h1 className="bg-primary-main w-fit py-2 px-4 my-5 rounded-3xl cursor-pointer">
                I want to join the Lauayo ads course now
              </h1>
            </div>
          </div>
          {/* ninth part */}
          <div className="flex_center flex-col sm:flex-row p-2 sm:p-12 gap-10">
            <img src="/7dias.png" alt="lauayo" className="w-40" />
            <div className="basis-[40%] sm:basis-[60%] lg:basis-[40%]">
              <h1 className="text-primary-main text-2xl mb-3">
                You have zero risk!
              </h1>
              <p className="w-full">
                If you give up or do not think that the Lauayo Ads course will
                bring more results to your ads, just send us an email and within
                7 days after the purchase w will refund 100% of the value,
                without question. You are protected by law!
              </p>
            </div>
          </div>
          {/* last part */}
          <div className="man_bg h-[80vh]">
            <div className="text-white flex flex-col justify-center gap-3 px-2 sm:px-10 w-full lg:w-[50%] h-full">
              <h1 className="font-bold text-2xl my-2">
                Who are you going to learn from ?
              </h1>
              <span>
                Sagar Chand is one of te greatest expers in Digital marketing
                for photographers from Neapl.
              </span>
              <span>
                With 3 years of photography, he has won more than 30
                international awards such as inspiration photographers, Bride
                association and fineart association.
              </span>
              <span>
                Today, in addition to being an enterpreneur, he teachees
                photographers to live on photography through the Customer
                Journey method. He managed to grow his bussiness, sell more than
                250 weddings and hundreds of rehearsals, making his company earn
                more than Rs.377,500 per year.
              </span>
              <span>
                He believes that with the right skills it is possible to have a
                highly profitable photograph and be desired by his customers
              </span>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
