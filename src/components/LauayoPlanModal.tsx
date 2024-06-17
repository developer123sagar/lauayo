import toast from "react-hot-toast";

import ModalLayout from "@/layouts/ModalLayout";
import { ErrRes, ModalProps } from "@/types";
import { MdVerified } from "react-icons/md";
import { RiVipCrownLine, RiVipDiamondFill } from "react-icons/ri";
import { useBuyOfficialMarksMutation } from "@/redux/api/AuthApi";
import { BiLoaderCircle } from "react-icons/bi";
import { useState } from "react";

const LauayoPlanModal = ({ showModal, setIsShowModal }: ModalProps) => {
  const [BuyOfficialmark] = useBuyOfficialMarksMutation();
  const [loader, setLoader] = useState({
    officialLoader: false,
    vipLoader: false,
    premiumLoader: false,
  });

  // buying official mark
  const handleBuyOfficialmark = async (officialMarks: string) => {
    try {
      if (officialMarks === "OfficialMark")
        setLoader({ ...loader, officialLoader: true });
      else if (officialMarks === "vip_member")
        setLoader({ ...loader, vipLoader: true });
      else if (officialMarks === "premium_member")
        setLoader({ ...loader, premiumLoader: true });
      const res = await BuyOfficialmark({
        website_url: "https://lauayo.com/",
        profileType: officialMarks,
      }).unwrap();

      window.open(res);
    } catch (err) {
      const errRes = err as ErrRes;
      toast.error(errRes.error || errRes.message || "Something went wrong");
    } finally {
      setIsShowModal(false);
      setLoader({
        officialLoader: false,
        vipLoader: false,
        premiumLoader: false,
      });
    }
  };

  return (
    <div>
      <ModalLayout
        title="Lauaayo Plan"
        showModal={showModal}
        setIsShowModal={setIsShowModal}
        className="w-[320px] sm:max-h-[320px] h-[300px]"
      >
        <div className="flex_center py-5 h-full">
          <ul className="flex flex-col gap-5 mt-3 justify-center w-full">
            <li
              onClick={() => handleBuyOfficialmark("OfficialMark")}
              className="flex gap-2 justify-center items-center bg-[#068FFF] text-white py-3 px-5 cursor-pointer"
            >
              {loader.officialLoader ? (
                <BiLoaderCircle
                  className="animate-spin"
                  color="#ffffff"
                  size={25}
                />
              ) : (
                <>
                  <MdVerified />
                  Official Mark
                </>
              )}
            </li>
            <li
              onClick={() => handleBuyOfficialmark("vip_member")}
              className="flex gap-2 items-center justify-center bg-[#068FFF] text-white py-3 px-5 cursor-pointer"
            >
              {loader.vipLoader ? (
                <BiLoaderCircle
                  className="animate-spin"
                  color="#ffffff"
                  size={25}
                />
              ) : (
                <>
                  <RiVipCrownLine />
                  VIP Members
                </>
              )}
            </li>
            <li
              onClick={() => handleBuyOfficialmark("premium_member")}
              className="flex gap-2 justify-center items-center bg-[#068FFF] text-white py-3 px-5 cursor-pointer"
            >
              {loader.premiumLoader ? (
                <BiLoaderCircle
                  className="animate-spin"
                  color="#ffffff"
                  size={25}
                />
              ) : (
                <>
                  <RiVipDiamondFill />
                  Premium Member
                </>
              )}
            </li>
          </ul>
        </div>
      </ModalLayout>
    </div>
  );
};

export default LauayoPlanModal;
