"use client";
import Banner from "@/components/Banner";
import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
interface BannerProperties {
  name: string;
  trayek: string[];
  colorA: string;
  colorB: string;
  textColor: string;
  mainBg: string;
  mainText: string;
  trayekColor: string;
}

export default function MakerPage() {
  const [newTrayek, setNewTrayek] = useState("");
  const [trayekList, setTrayekList] = useState<string[]>([]);
  const [banner, setBanner] = useState<BannerProperties>({
    name: "JALAN KEHIDUPAN",
    trayek: trayekList,
    colorA: "#b9d2fa",
    colorB: "#0c326e",
    textColor: "#bF1500",
    mainBg: "#FFFFFF",
    trayekColor: "#FFFFFF",
    mainText: "#000",
  });
  const trayekInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setBanner({ ...banner, trayek: trayekList });
  }, [trayekList]);

  const handleAdd = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTrayekList((prevTrayek) => [...prevTrayek, newTrayek]);

      setNewTrayek("");
      if (trayekInput.current != null) {
        trayekInput.current.focus();
      }
    }
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
        <div className="gap-4 flex  justify-center items-center mt-4">
          <input
            type="text"
            name="trayek"
            placeholder="Trayek"
            onChange={(e) => setNewTrayek(e.target.value)}
            value={newTrayek}
            ref={trayekInput}
            onKeyDown={handleAdd}
            className=" px-4 py-2  rounded-md outline-none bg-zinc-900 border-2 border-white"
          ></input>
          <div className="gap-4 flex items-center">
            <input
              type="color"
              placeholder="Trayek Color"
              name="trayekcolor"
              onChange={(e) => {
                setBanner({ ...banner, trayekColor: e.target.value });
              }}
              value={banner.trayekColor}
              className="rounded-md outline-none bg-zinc-900 border-2 border-white"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
