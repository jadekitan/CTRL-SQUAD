import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
// import { Modal } from "flowbite-react";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;
  return (
    <div className=" w-full h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-black/50">
      <div className=" w-[1000px] h-[90vh] relative rounded-lg bg-[#F1F1F1] gap-4">
        <IoIosCloseCircle
          onClick={closeModal}
          className=" absolute right-1 top-1 w-6 h-6 text-black"
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
