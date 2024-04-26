import React, { useState } from "react";
import Image from "next/image";

// const reset = () => {
//   setFullname("");
//   setPhone_number("");
//   setCircumstance("");
//   setAddress("");
//   setCity("");
//   setState("");
//   setStreet("");
//   setBooking("");
// };

const Ambulance = () => {
  const initialValues = {
    fullname: "",
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
    <main className=" w-full inline-flex items-center gap-14 bg-white">
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
          <label className=" text-black">Fullname</label>
          <input
            type="text"
            value={values.fullname}
            onChange={handleInputChange}
            label="Fullname"
            className=" w-[444px] h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
          />
        </div>
        <div className=" flex flex-col justify-start gap-[10px]">
          <label className=" text-black">Phone</label>
          <input
            type="text"
            value={values.phone_number}
            onChange={handleInputChange}
            label="Phone Number"
            className=" w-[444px] h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
          />
        </div>
        <div className=" flex flex-col justify-start gap-[10px]">
          <label className=" text-black">Circumstances</label>
          <input
            type="textArea"
            value={values.circumstance}
            onChange={handleInputChange}
            label="Circumstance"
            className=" w-[444px] h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
          />
        </div>
        <div className=" flex flex-col justify-start gap-[10px]">
          <label className=" text-black">Address</label>
          <input
            type="text"
            value={values.address}
            onChange={handleInputChange}
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
            label="Booking"
            className=" w-[444px] h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
          />
        </div>
      </form>
    </main>
  );
};

export default Ambulance;
