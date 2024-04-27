import React, { useState } from "react";
import Image from "next/image";
// import TextItem from "./TextItem.jsx";

const Ambulance = () => {
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

  // const [selectedTexts, setSelectedTexts] = useState([]);

  // const handleTextClick = (text) => {
  //   if (selectedTexts.includes(text)) {
  //     setSelectedTexts(selectedTexts.filter((item) => item !== text));
  //   } else {
  //     setSelectedTexts([...selectedTexts, text]);
  //   }
  // };
  return (
    <main className=" w-full inline-flex items-center gap-14 bg-white overflow-hidden">
      <div className=" w-[630px] rounded-se-[40px] rounded-ee-[40px] bg-black">
        <Image
          src="/illustration/ambulance.avif"
          width={630}
          height={0}
          className=" w-full h-full rounded-se-[40px] rounded-ee-[40px]"
        />
      </div>
      <form action="" className=" flex flex-col items-start gap-[15px] pr-10">
        <div className="">
          <h2 className=" text-black text-[25px] font-bold">
            Emergency Ambulance Order
          </h2>
        </div>
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
    </main>
  );
};

export default Ambulance;
