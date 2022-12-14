import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "full",
  height: "400px",
};

const center = {
  lat: 34.36168,
  lng: 62.16277,
};

const GetInTouch = () => {
  return (
    <div className="w-[1080px] mx-auto py-12">
      <div className="p-2 text-3xl mb-2">Get In Touch</div>
      <div className="grid grid-cols-3">
        <form method="" className="col-span-2 grid grid-cols-2 gap-4 p-2">
          <div className="grid col-span-2">
            <textarea
              rows={8}
              placeholder="Enter Message"
              className="text-neutral-900 p-3 focus:outline-none 
              bg-transparent placeholder:text-[#aaa] border-[1px] border-[#aaa] "
            ></textarea>
          </div>
          <div className="grid col-span-1">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="text-neutral-900 p-3 focus:outline-none  
              bg-transparent placeholder:text-[#aaa] border-[1px] border-[#aaa] "
            />
          </div>
          <div className="grid col-span-1">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="text-neutral-800 p-3 focus:outline-none  
              bg-transparent placeholder:text-[#aaa] border-[1px] border-[#aaa] "
            />
          </div>
          <div className="grid col-span-2">
            <input
              type="text"
              placeholder="Enter Subject"
              className="text-neutral-800 p-3 focus:outline-none 
              bg-transparent placeholder:text-[#aaa] border-[1px] border-[#aaa] "
            />
          </div>
          <button
            className="text-white mt-4 p-3 w-[200px]
              bg-sky-900"
          >
            SEND
          </button>
        </form>
        <div className="col-span-1 flex flex-col gap-y-8 px-6 py-2">
          <div className="flex gap-4">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-house-door"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
            </svg>
            <div>
              <p>Herat, Afghanistan</p>
              <p>12th District</p>
            </div>
          </div>

          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <div>
              <p>0093 (0)789908646</p>
              <p>Sat to Thu from 8am to 4pm</p>
            </div>
          </div>

          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <div>
              <p>alirezayoom@gmail.com</p>
              <p>Send me your email anytime.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <LoadScript>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          ></GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default GetInTouch;
