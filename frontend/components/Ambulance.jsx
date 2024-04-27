import React, { useState } from "react";
// import Image from "next/image";
// import TextItem from "./TextItem.jsx";

const Ambulance = () => {
  const initialValues = {
    victim_name: "",
    phone_number: "",
    conditions: "",
    address: "",
    city: "",
    state: "",
    street: "",
    comment: "",
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

  const [emergency, setEmergency] = useState("");
  const [customEmergency, setCustomEmergency] = useState("");
  const emergencies = [
    "Accidental Injuries (e.g., Falls, Burns)",
    "Motor Vehicle Accidents",
    "Industrial Accidents",
    "Sports Injuries",
    "Workplace Injuries",
    "Electrocution",
    "Chemical Exposure",
    "Crush Injuries",
    "Heart Attack",
    "Stroke",
    "Severe Allergic Reaction (Anaphylaxis)",
    "Severe Bleeding",
    "Seizures",
    "Diabetic Emergencies",
    "Respiratory Distress",
    "Poisoning",
    "Traumatic Injuries",
    "Cardiac Arrest",
    "Heatstroke",
    "Severe Burns",
    "Head Trauma",
    "Acute Asthma Attack",
    "Drug Overdose",
    "Severe Infections (Sepsis)",
    "Electrolyte Imbalance",
    "Pulmonary Embolism",
    "Psychiatric Emergencies",
    "Childbirth Complications",
    "Anaphylactic Shock",
    "Severe Asthma Attack",
    "Drowning",
    "Electrical Shock",
  ];

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Other") {
      setEmergency("");
    } else {
      setEmergency(selectedValue);
    }
  };

  const handleCustomInputChange = (event) => {
    // Allow only numeric input in the custom input field
    const inputValue = event.target.value;
    if (/^\d+$/.test(inputValue) || inputValue === "") {
      setCustomEmergency(inputValue);
    }
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
    <main className=" w-full inline-flex items-center gap-14 bg-white overflow-hidden sm:px-0 sm:py-0 px-5 py-9">
      <div className=" w-[630px] h-[100vh] rounded-se-[40px] rounded-ee-[40px] bg-black">
        <video
          className=" w-full h-[100vh] rounded-se-[40px] rounded-ee-[40px]"
          loop
          muted
          autoPlay
          preload="auto"
          playsInline
          poster="/gif.gif"
        >
          <source src="/gif.gif" type="video/gif" />
          Your browser does not support the video tag.
        </video>
        {/* <Image
          src="/illustration/ambulance.avif"
          width={630}
          height={0}
          className=" w-full h-full rounded-se-[40px] rounded-ee-[40px]"
        /> */}
      </div>
      <form
        action=""
        className=" flex flex-col items-start gap-[15px] pr-0 sm:pr-10"
      >
        <div className="">
          <h2 className=" text-black text-[20px] sm:text-[25px] font-bold">
            Emergency Ambulance Order
          </h2>
        </div>
        <div className=" w-full flex flex-col justify-start gap-2">
          <label className=" text-[14px] text-black">Victim's Name</label>
          <input
            type="text"
            value={values.victim_name}
            onChange={handleInputChange}
            name="victim_name"
            label="Victim Name"
            className=" w-full sm:w-[444px] h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
          />
        </div>
        <div className=" w-full flex flex-col justify-start gap-2">
          <label className=" text-[14px] text-black">Phone Number</label>
          <input
            type="tel"
            value={values.phone_number}
            onChange={handleInputChange}
            name="phone_number"
            label="Phone Number"
            className=" w-full sm:w-[444px] h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
          />
        </div>
        <div className=" w-full flex flex-col justify-start gap-2">
          <label className=" text-[14px] text-black">Address</label>
          <input
            type="text"
            value={values.address}
            onChange={handleInputChange}
            name="address"
            label="Address"
            className=" w-full sm:w-[444px] h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
            required
          />
        </div>
        <div className=" w-full sm:w-[444px] flex items-start gap-3">
          <div className=" w-full flex flex-col justify-start gap-2">
            <label className=" text-[14px] text-black">City</label>
            <input
              type="text"
              value={values.city}
              onChange={handleInputChange}
              name="city"
              label="Address"
              className=" w-full h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
              required
            />
          </div>
          <div className=" w-full flex flex-col justify-start gap-2">
            <label className=" text-[14px] text-black">State</label>
            <input
              type="text"
              value={values.state}
              onChange={handleInputChange}
              name="state"
              label="Address"
              className=" w-full h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
              required
            />
          </div>
        </div>
        <div className=" w-full sm:w-[444px] flex items-start gap-3">
          <div className=" flex flex-col justify-start gap-2">
            <label className=" text-[14px] text-black">Condition</label>
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
            {/* <input
              type="text"
              value={values.conditions}
              onChange={handleInputChange}
              name="condition"
              label="condition"
              className=" w-full h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4 py-2"
              required
            /> */}

            <select
              value={emergency}
              onChange={handleSelectChange}
              name="condition"
              label="condition"
              className=" w-full h-[35px] text-black text-[12px] rounded-lg border border-[#DFDFDF] px-4 py-2"
              required
            >
              <option value="" disabled selected>
                Select or type an emergency
              </option>
              {emergencies.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            {emergency === "Other" && (
              <input
                type="text"
                value={customEmergency}
                onChange={handleCustomInputChange}
                placeholder="Enter custom emergency"
              />
            )}
          </div>
          <div className=" flex flex-col justify-start gap-2">
            <label className=" text-[14px] text-black">Comment</label>
            <input
              type="text"
              value={values.booking}
              onChange={handleInputChange}
              name="booking"
              label="Booking"
              className=" w-full h-[35px] text-black rounded-lg border border-[#DFDFDF] px-4"
              required
            />
          </div>
        </div>
        <div className=" w-full flex flex-col justify-center items-center gap-3">
          <button
            type="submit"
            className=" w-full px-[10px] py-[10px] bg-black text-white rounded-[10px]"
          >
            Submit
          </button>
          <a href="tel:08033241155" className=" text-gray-500">
            call instead
          </a>
        </div>
      </form>
    </main>
  );
};

export default Ambulance;
