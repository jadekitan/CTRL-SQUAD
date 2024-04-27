import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "@/components/Modal";
import { motion } from "framer-motion";

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

  const variants = {
    initial: { x: -70 },
    animate: { x: 0 },
    transition: { ease: "easeOut", duration: 2 },
  };

  const handleClick = () => {
    if (index < screen.length - 1) {
      setIndex(index + 1);
      variants;
    }
    if (index === screen.length - 2) {
      setButtonText("Get Started");
    }
    if (index === screen.length - 1) {
      openModal();
      console.log(openModal);
    }
  };

  const initialValues = {
    victim_name: "",
    phone_number: "",
    circumstance: "",
    address: "",
    city: "",
    state: "",
    street: "",
    booking: "",
  };

  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <section className="w-full h-[100vh]">
      {
        <div className=" bg-white w-full h-full flex flex-col justify-center items-center gap-12 px-4 sm:px-24 sm:flex-row">
          <motion.img
            variants={variants}
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
        <div className=" h-full text-center px-5 py-5">
          <h2 className=" text-black">Categories</h2>
          <h4 className=" text-black">What do you want to consult about?</h4>
          {/* <div className=" w-full h-full flex justify-between gap-5">
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
          </div> */}
          <form
            action=""
            className=" flex flex-col items-start gap-[15px] pr-10"
          >
            <div className=" flex flex-col justify-start gap-[10px]">
              <label className=" text-black">Victim's Name</label>
              <input
                type="text"
                value={values.victim_name}
                onChange={handleInputChange}
                name="victim_name"
                label="Victim Name"
                className=" w-[444px] h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
              />
            </div>
            <div className=" flex flex-col justify-start gap-[10px]">
              <label className=" text-black">Phone</label>
              <input
                type="text"
                value={values.phone_number}
                onChange={handleInputChange}
                name="phone_number"
                label="Phone Number"
                className=" w-[444px] h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
              />
            </div>
            <div className=" flex flex-col justify-start gap-[10px]">
              <label className=" text-black">Address</label>
              <input
                type="text"
                value={values.address}
                onChange={handleInputChange}
                name="address"
                label="Address"
                className=" w-[444px] h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
              />
            </div>
            <div className=" w-[444px] flex items-start gap-2">
              <div className=" w-full">
                <label className=" text-black">City</label>
                <input
                  type="text"
                  value={values.city}
                  onChange={handleInputChange}
                  name="city"
                  label="Address"
                  className=" w-full h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
                />
              </div>
              <div className=" w-full">
                <label className=" text-black">State</label>
                <input
                  type="text"
                  value={values.state}
                  onChange={handleInputChange}
                  name="state"
                  label="Address"
                  className=" w-full h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
                />
              </div>
            </div>
            <div className=" flex flex-col justify-start gap-[10px]">
              <label className=" text-black">Booking</label>
              <input
                type="text"
                value={values.booking}
                onChange={handleInputChange}
                name="booking"
                label="Booking"
                className=" w-[444px] h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
              />
            </div>
            <div className=" flex flex-col justify-start gap-[10px]">
              <label className=" text-black">Circumstances</label>
              {/* <div>
            <TextItem
              text="Text 1"
              onClick={handleTextClick}
              selected={selectedTexts.includes("Text 1")}
            />
            <TextItem
              text="Text 2"
              onClick={handleTextClick}
              selected={selectedTexts.includes("Text 2")}
            />
          </div> */}
              <textarea
                type="text"
                value={values.circumstance}
                onChange={handleInputChange}
                name="circumstance"
                label="Circumstance"
                className=" w-[444px] h-[50px] text-black rounded-lg border border-[#DFDFDF] px-4 py-2"
              ></textarea>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Onboarding;
