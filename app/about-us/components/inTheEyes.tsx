"use client";
import { fontMono } from "@/config/fonts";
import { H2 } from "tabler-icons-react";

export default function FinTechInTheEyes() {
  return (
    <div className="pt-32  flex flex-row flex-nowrap">
      <img
        src="https://ik.imagekit.io/wsdkzaaovq/ManhDung.svg?updatedAt=1718589049315"
        alt="president profile picture"
        className="object-cover w-2/5"
      />
      <div className="w-3/5">
        <h1
          className={`text-8xl text-end py-2 text-[#DBB968] font-bold ${fontMono.style}`}
        >
          FINTECH
        </h1>
        <h1
          className={`text-8xl text-end py-2 mb-20 text-[#2B305E] text-nowrap font-bold ${fontMono.style}`}
        >
          IN THE EYES OF
        </h1>
        <h2
          className={`text-5xl py-2 text-[#DBB968] italic font-bold  ${fontMono.style}`}
        >
          President
        </h2>
        <h2
          className={`text-5xl py-2 mb-12 text-[#2B305E] font-extrabold ${fontMono.style}`}
        >
          Nguyen Manh Dung
        </h2>
        <p className={`pe-24 text-4xl text-left ${fontMono.style}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          aliquam eget turpis sed lacinia. Proin vitae leo non massa egestas
          cursus. Aliquam convallis malesuada tortor, in ornare orci euismod
          non. Etiam non tincidunt nibh. Donec porta placerat tortor, et
          vulputate nisl molestie at. Ut nisl mi, vehicula quis sapien non,
          vulputate luctus odio.
        </p>
      </div>
      <div className="w-1/5 flex flex-col justify-between">
        <img
          alt="fintech mascot"
          src="https://ik.imagekit.io/wsdkzaaovq/Mascot.svg?updatedAt=1718591967593"
        />
        <img
          alt="decoration"
          src="https://ik.imagekit.io/wsdkzaaovq/Some%20Decoration.svg?updatedAt=1718591556722"
        />
      </div>
    </div>
  );
}
