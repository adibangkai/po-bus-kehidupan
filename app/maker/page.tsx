"use client";
import Banner from "@/components/Banner";
import { useRef, useState } from "react";

interface BannerProperties {
  name: string;
  trayek: string[];
  colorA: string;
  colorB: string;
  textColor: string;
  mainBg: string;
  mainText: string;
}

export default function MakerPage() {
  const [newTrayek, setNewTrayek] = useState("");
  const [trayekList, setTrayekList] = useState([]);
  const [banner, setBanner] = useState({
    name: "Maju Mapan",
    trayek: trayekList,
    colorA: "#b9d2fa",
    colorB: "#0c326e",
    textColor: "#ff0000",
    mainBg: "#FFFFFF",
    mainText: "#000",
  });
  const trayekInput = useRef(null);

  const handleAdd = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const tra = newTrayek.trim();

    if (tra && !trayekList.includes(tra)) {
      setTrayekList((prevTrayek) => [...prevTrayek, newTrayek]);
    }
    setNewTrayek("");
    trayekInput.current.focus();
  };
  return (
    <div>
      <Banner banner={banner} />
      <form
        action=""
        className="font-kanit capitalize container mx-auto w-5/6 mt-4 text-white"
      >
        <div className="flex gap-4 justify-center">
          <div className="gap-4 flex items-center">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setBanner({ ...banner, name: e.target.value });
              }}
              className=" px-4 py-2 rounded-md outline-none bg-zinc-900 border-2 border-white"
            ></input>
          </div>
          <div className="gap-4 flex items-center">
            <label htmlFor="bg">BG: </label>
            <input
              type="color"
              placeholder="bg Color"
              name="bg"
              onChange={(e) => {
                setBanner({ ...banner, mainBg: e.target.value });
              }}
              value={banner.mainBg}
              className="rounded-md outline-none bg-zinc-900 border-2 border-white"
            ></input>
          </div>
          <div className="gap-4 flex items-center">
            <label htmlFor="txt">text: </label>
            <input
              type="color"
              placeholder="txt Color"
              name="txt"
              onChange={(e) => {
                setBanner({ ...banner, mainText: e.target.value });
              }}
              value={banner.mainText}
              className="rounded-md outline-none bg-zinc-900 border-2 border-white"
            ></input>
          </div>
          <div className="gap-4 flex items-center">
            <label htmlFor="textColor">Title: </label>
            <input
              type="color"
              placeholder="Accent Color"
              name="textColor"
              onChange={(e) => {
                setBanner({ ...banner, textColor: e.target.value });
              }}
              value={banner.textColor}
              className="rounded-md outline-none bg-zinc-900 border-2 border-white"
            ></input>
          </div>
          <div className="gap-4 flex items-center">
            <label htmlFor="primary">Primary: </label>
            <input
              type="color"
              placeholder="Primary Color"
              name="primary"
              onChange={(e) => {
                setBanner({ ...banner, colorA: e.target.value });
              }}
              value={banner.colorA}
              className="rounded-md outline-none bg-zinc-900 border-2 border-white"
            ></input>
          </div>
          <div className="gap-4 flex items-center">
            <label htmlFor="accent">Accent: </label>
            <input
              type="color"
              placeholder="Accent Color"
              name="accent"
              onChange={(e) => {
                setBanner({ ...banner, colorB: e.target.value });
              }}
              value={banner.colorB}
              className="rounded-md outline-none bg-zinc-900 border-2 border-white"
            ></input>
          </div>
        </div>
        <div className="gap-4 flex items-center mt-4">
          <input
            type="text"
            name="trayek"
            placeholder="Trayek"
            onSubmit={(e) => {
              setBanner({
                ...banner,
                trayek: banner.trayek.concat(e.target.value),
              });
            }}
            className=" px-4 py-2 rounded-md outline-none bg-zinc-900 border-2 border-white"
          ></input>
          {banner.trayek.length !== 0 &&
            banner.trayek.map((tray) => <li key={tray}>{tray}</li>)}
        </div>
        <div className="text-white font-kanit cursor-pointer px-4 py-2 bg-zinc-900 mt-4  w-1/6 mx-auto text-center rounded-xl border-2 border-lime-300 transition ease-in-out  duration-300 shadow-sm hover:shadow-lime-400 hover:shadow-md">
          Download
        </div>
      </form>
    </div>
  );
}
