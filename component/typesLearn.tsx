"use client";
import React from "react";
interface typescriptLearndata {

    data:string

}
export default function Typeslearn({data}:typescriptLearndata) {
  return (
    <div>
      <div className="text-lg  border-amber-300 border-4">
        welocome to learn typescript {data}
      </div>
    </div>
    
  );
}
