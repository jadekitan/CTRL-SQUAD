import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "@/components/Modal";

const Onboarding = () => {
  const screen = [
    {
      image: "/illustration/doctors.svg",
      title: "Find The Best Doctor in Your Vicinity",
      description:
        "With the help of our intelligent algorithms. now locate the best doctors around your Vicinity at total ease",
    },
    {
      image: "/illustration/schedule.svg",
      title: "Schedule appointments with expert doctors",
      description:
        "Find experienced experienced specialist doctors with expert ratings and reviews and book your appointment hassle free",
    },
    {
      image: "/illustration/appointment.svg",
      title: "Book Face-to Face appointments",
      description:
        "Can't go to the hospital? Book  video call appointments with your doctor within the app in  a few minute",
    },
  ];

  const [index, setIndex] = useState(0);

  const [buttonText, setButtonText] = useState("Continue");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClick = () => {
    if (index < screen.length - 1) {
      setIndex(index + 1);
    }
    if (index === screen.length - 2) {
      setButtonText("Get Started");
    }
    if (index === screen.length - 1) {
      openModal();
      console.log(openModal);
    }
  };

  return (
    <section className="w-full h-[100vh]">
      {
        <div className=" bg-white w-full h-full flex flex-col justify-center items-center gap-12 px-4 sm:px-24 sm:flex-row">
          <Image
            src={screen[index].image}
            alt=""
            width={400}
            height={200}
            className=" w-40 sm:w-96"
          />
          <div className=" flex flex-col text-center sm:text-start gap-3 ">
            <h2 className=" sm:text-5xl text-xl font-bold capitalize text-black">
              {screen[index].title}
            </h2>
            <h4 className=" text-black">{screen[index].description}</h4>
          </div>
        </div>
      }
      <div className=" fixed bottom-0 left-0 h-20 sm:h-20 w-full bg-[#F1F1F1] flex flex-col-reverse sm:flex-row sm:justify-end justify-center items-center px-24 gap-2 sm:gap-3">
        <button
          className={`text-black text-[8px] sm:text-[16px] ${
            index ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
              setButtonText("Continue");
            }
          }}
        >
          Back
        </button>
        <button
          className=" h-6 sm:h-8 px-3 sm:px-5 text-[8px] sm:text-[16px] bg-slate-500 rounded text-white flex items-center"
          onClick={handleClick}
        >
          {buttonText}

          <IoIosArrowForward />
        </button>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <div className=" text-center px-5 py-5">
          <h2 className=" text-black">Categories</h2>
          <h4 className=" text-black">What do you want to consult about?</h4>
          <div className=" w-full h-full flex justify-between gap-5">
            <div className=" w-20 h-20">
              <Image
                src="/illustration/appointment.svg"
                alt=""
                width={200}
                height={100}
                className=" w-[100px] h-7"
              />
              <h5 className=""></h5>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Onboarding;
