import React from "react";
import Btn from "./btn";
import img from "../../assets/422070.jpg";

export default function Card() {
  return (
    <div className="border border-amber-100 rounded-2xl  p-3">
      <div className="flex justify-center">
        <img src={img} className="w-77 h-45 rounded-2xl mb-6 " />
      </div>
      <h2 className="text-2xl mb-3">Batman</h2>
      <p>
        Batman was born in 1983 , and in this article, I want to share some
        information about her with you.
      </p>
      <Btn />
    </div>
  );
}
