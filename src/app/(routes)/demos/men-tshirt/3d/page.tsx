"use client";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import React, { useState } from "react";


export default function View_3d() {
  const [color , setColor] = useState("#CD106F");
  return (
    <div className="h-screen flex flex-wrap lg:flex-nowrap w-full bg-[#2D2E32] lg:px-5">
      <div className="bg-[#2D2E32]  w-full lg:w-1/2 text-white flex flex-col gap-7 h-full justify-center items-center">
      <h1 className="text-4xl font-bold">Teacheap Custom store</h1>
      <h4 className="text-2xl font-bold">Select Your Color</h4>
        <div className="bg-black/25 py-7 px-8 flex gap-5 justify-center items-center flex-wrap w-60">
          <button className="bg-[#CD106F] rounded-full p-4" onClick={() => setColor("#CD106F")}/>
          <button className="bg-[#FFA917] rounded-full p-4" onClick={() => setColor("#FFA917")}/>
          <button className="bg-[#AEAEAE] rounded-full p-4" onClick={() => setColor("#AEAEAE")}/>
          <button className="bg-[#9f2f9b] rounded-full p-4" onClick={() => setColor("#E4CECE")}/>
          <button className="bg-[#0CD820] rounded-full p-4" onClick={() => setColor("#0CD820")}/>
          <button className="bg-[#17A4DD] rounded-full p-4" onClick={() => setColor("#17A4DD")}/>
          <button className="bg-[#F19F7F] rounded-full p-4" onClick={() => setColor("#F19F7F")}/>
          <button className="bg-[#080707] rounded-full p-4" onClick={() => setColor("#080707")}/>
          <button className="bg-[#CFF70D] rounded-full p-4" onClick={() => setColor("#CFF70D")}/>
          <Link href={'/demos/men-tshirt/3d/print-3d'} className="text-white bg-black font-bold px-7 py-3 rounded-xl">Next</Link>
        </div>
      </div>
     <div className= "w-full  lg:w-1/2">
     {color == "#FFA917" && <Spline  scene="https://prod.spline.design/dwBBpWRd7WUZovva/scene.splinecode"/>}
     {color == "#E4CECE" && <Spline  scene="https://prod.spline.design/Rjjih6Bmfa9l2DGm/scene.splinecode"/>}
     {color == "#AEAEAE" && <Spline scene="https://prod.spline.design/H9tEFGwzgsH3BbjK/scene.splinecode"/>}
     {color == "#080707" && <Spline  scene="https://prod.spline.design/kKBu3Scp6WgMIwEi/scene.splinecode"/>}
     {color == "#17A4DD" && <Spline  scene="https://prod.spline.design/Ol9vEfWLFVJc6fmn/scene.splinecode"/>}
     {color == "#F19F7F" && <Spline  scene="https://prod.spline.design/SargGcxeDY5qGfpz/scene.splinecode"/>}
     {color == "#1118DA" && <Spline  scene="https://prod.spline.design/3ySsFpMRzwo-jOaQ/scene.splinecode"/>}
     {color == "#0CD820" && <Spline  scene="https://prod.spline.design/a7uWw2xHruiNZWfj/scene.splinecode"/>}
     {color == "#CD106F" && <Spline  scene="https://prod.spline.design/OVbowz360GPevxXH/scene.splinecode"/>}
     {color == "#CFF70D" && <Spline  scene="https://prod.spline.design/diceQ3sDuTpIkvdz/scene.splinecode"/>}
     </div>
    </div>
  );
}
