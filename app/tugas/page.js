"use client"

import { useState } from "react";

export default function Tombol() {
  const [huruf, setHuruf] = useState("");

  function handKlik(nilai) {
    setHuruf(nilai);
  }

  return (
    <div className="flex flex-col items-center my-10">
      <div className="flex gap-6 mb-10">
        <button
          onClick={() => handKlik("X")}
          className="bg-pink-100 text-pink-500 border border-red-300 px-4 py-2 rounded text-sm transition hover:scale-105 active:scale-95"
        >
          X
        </button>
        <button
          onClick={() => handKlik("Y")}
          className="bg-pink-100 text-pink-500 border border-red-300 px-4 py-2 rounded text-sm transition hover:scale-105 active:scale-95"
        >
          Y
        </button>
        <button
          onClick={() => handKlik("Z")}
          className="bg-pink-100 text-pink-500 border border-red-300 px-4 py-2 rounded text-sm transition hover:scale-105 active:scale-95"
        >
          Z
        </button>
      </div>

      <div className="mt-4">
        <button className="bg-pink-100 text-pink-500 border border-red-300 px-6 py-2 rounded text-lg">
          {huruf || "Pilih satu!, hanya satu"}
        </button>
        <button></button>
      </div>
    </div>
  );
}
