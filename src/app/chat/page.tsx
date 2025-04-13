"use client";

import OneMessage from "@/components/Chat/OneMessage";
import { useState } from "react";
import { MdSend } from "react-icons/md";
import generateChatbotResponse from "../../../lib/utils/aireply";

const example = [
  { sender: "user", message: "Awesome, thanks!" },
  { sender: "bot", message: "Sure, I'll share the code with you." },
  { sender: "user", message: "Sounds interesting! Can I see it?" },
  { sender: "bot", message: "A chat data generator in JavaScript." },
  { sender: "user", message: "Nice! What are you working on?" },
  { sender: "bot", message: "I'm doing great, just working on some code." },
  { sender: "user", message: "I'm good, thanks! How about you?" },
  { sender: "bot", message: "Hey, how are you?" },
];

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] =
    useState<{ sender: string; message: string }[]>(example);

  const [waiting, setWaiting] = useState<boolean>(false);

  const handleSend = () => {
    setMessages((prev) => [{ sender: "user", message }, ...prev]);
    const sendToAi = message;
    setWaiting(true);
    generateChatbotResponse(sendToAi).then((response) => {
      setMessages((prev) => [{ sender: "bot", message: response }, ...prev]);
      setWaiting(false);
    });
    setMessage("");
  };

  return (
    <>
      <div className="h-20 w-full gap-4 bottom-0 absolute z-[1999] flex items-center justify-between px-4">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37.137"
            height="37.137"
            viewBox="0 0 37.137 37.137"
          >
            <path
              id="emoji-funny-square-svgrepo-com_1_"
              data-name="emoji-funny-square-svgrepo-com (1)"
              d="M2.844,9.918c-1.658,2.872-.681,6.517,1.272,13.807s2.93,10.935,5.8,12.593,6.517.681,13.807-1.272,10.935-2.93,12.593-5.8S37,22.727,35.045,15.437,32.115,4.5,29.244,2.844s-6.517-.681-13.807,1.272S4.5,7.046,2.844,9.918Zm10.03,16.257a1.318,1.318,0,0,1,1.6-.958,13.185,13.185,0,0,0,6.586-.117,13.185,13.185,0,0,0,5.762-3.192A1.319,1.319,0,0,1,28.655,23.8a14.769,14.769,0,0,1-2.02,1.633l.278.566a2.637,2.637,0,0,1-4.734,2.324l-.345-.7-.092.025a15.82,15.82,0,0,1-7.909.127A1.319,1.319,0,0,1,12.874,26.175ZM25.691,15.213c.377,1.407-.078,2.751-1.016,3s-2-.685-2.381-2.092.078-2.751,1.016-3S25.314,13.806,25.691,15.213Zm-11.2,5.732c.938-.251,1.393-1.6,1.016-3s-1.443-2.343-2.381-2.092-1.393,1.6-1.016,3S13.548,21.2,14.486,20.946Z"
              transform="translate(-1.012 -1.012)"
              fill="#fff"
              stroke="#292d32"
              strokeWidth="2"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex-1 bg-white py-2 pr-4 pl-6 rounded-full border-2 flex justify-between items-center gap-2">
          <input
            type="text"
            placeholder="Type your message here"
            className="flex-1 outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <MdSend
            onClick={handleSend}
            className="text-2xl cursor-pointer hover:translate-x-0.5 hover:-translate-y-0.5"
          />
        </div>
      </div>
      <div className="px-4 overflow-y-scroll h-full w-full gap-4 flex flex-col-reverse mb-20 mt-24">
        {waiting && <OneMessage received message={"..."} />}
        {messages.map((msg, i) => (
          <OneMessage
            received={msg.sender === "bot"}
            key={i}
            message={msg.message}
          />
        ))}
      </div>
    </>
  );
}
