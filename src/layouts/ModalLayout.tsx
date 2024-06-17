import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { cn } from "@/lib/utils";

const ModalLayout = ({
  showModal,
  setIsShowModal,
  className,
  children,
  closeModal,
  title,
}: {
  showModal: boolean;
  setIsShowModal: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  closeModal?: () => void;
  title: string;
  className?: string;
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {showModal && (
        <div className="fixed flex justify-center pt-14 md:pt-[105px] z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-auto">
          <div
            ref={modalRef}
            className={cn(
              `relative bg-white max-w-[700px] mx-3 p-4 rounded-md mb-10 w-full sm:h-[580px] h-[655px]`,
              className,
              {
                "modal-content": showModal,
              }
            )}
          >
            <div className="flex items-center justify-between pb-2 w-full border-b border-b-gray-300">
              <h1 className="text-[22px] font-medium">{title}</h1>
              <button
                onClick={closeModal ? closeModal : undefined}
                className="hover:bg-gray-200 p-1 rounded-full"
              >
                <AiOutlineClose
                  onClick={() => setIsShowModal(false)}
                  size={25}
                />
              </button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLayout;
