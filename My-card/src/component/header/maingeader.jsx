import React from "react";

export default function Maingeader({ name, lable, about }) {
  return (
    <>
      <div>
        <a className=" cursor-pointer text-amber-500 text-2xl">{name}</a>
        <a className="px-6 cursor-pointer">{lable}</a>
      </div>
      <div>
        <a className=" cursor-pointer">{about}</a>
      </div>
    </>
  );
}
