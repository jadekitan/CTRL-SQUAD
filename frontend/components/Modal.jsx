import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
// import { Modal } from "flowbite-react";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;
  return (
    <div className=" w-full h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-black/50">
      <div className=" w-[500px] h-[80vh] rounded-md bg-[#F1F1F1] flex flex-col justify-between  items-center gap-4">
        <IoIosCloseCircle onClick={closeModal} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
