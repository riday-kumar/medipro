import React from "react";
import { FaHospitalUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Width from "../../../components/FixedWidth/Width";
import { FaUserDoctor } from "react-icons/fa6";

const Contact = () => {
  return (
    <Width>
      <div className="flex flex-col lg:flex-row">
        {/* 1st one */}
        <div className="flex-1">
          <div className="bg-secondary  p-10">
            <h3 className="bg-secondary font-semibold text-[32px] text-white">
              Don't <span className="font-black">Hesitate</span> To <br />
              Contact Us
            </h3>
          </div>
          <div className="py-4 flex justify-center items-center gap-5 bg-black text-white">
            <p className="text-white font-bold text-[18px] text-center">
              Make Appointment
            </p>
            <SlCalender className="font-bold" />
          </div>
        </div>
        {/* 2nd */}
        <div className="bg-primary flex-1 p-10 space-y-2 border-r border-gray-500">
          <FaHospitalUser className="text-secondary text-5xl" />
          <div>
            <h3 className="text-white capitalize font-semibold mb-3 text-2xl">
              Need Family Health
            </h3>
            <p className="para">
              We understand the importance of family health overall well-being.
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="bg-primary flex-1 p-10 space-y-2">
          <FaUserDoctor className="text-secondary text-5xl" />
          <div>
            <h3 className="text-white capitalize font-semibold  mb-3 text-2xl">
              24 hours service
            </h3>
            <p className="para">
              We take pride in offering 24-hour medical services to ensure that
              you.
            </p>
          </div>
        </div>
      </div>
    </Width>
  );
};

export default Contact;
