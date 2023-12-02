import { useRef, useCallback } from "react";
import { toPng } from "html-to-image";
interface BannerProperties {
  banner: {
    name: string;
    trayek: string[];
    colorA: string;
    colorB: string;
    textColor: string;
    mainBg: string;
    mainText: string;
    trayekColor: string;
  };
}

export default function Banner({ banner }: BannerProperties) {
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "Bus Kehidupan.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className="pt-10 w-[60em] mx-auto">
      <div className=" flex  justify-end">
        <button
          onClick={onButtonClick}
          className="mb-4 text-white font-kanit cursor-pointer px-4 py-2 bg-zinc-900 mt-4  w-1/6 text-center rounded-xl border-2 border-lime-300 transition ease-in-out  duration-300 shadow-sm hover:shadow-lime-400 hover:shadow-md"
        >
          Download
        </button>
      </div>
      <div ref={ref}>
        <div
          className="bg-white  flex flex-col h-[400px]  border-8 border-gray-500 mx-auto "
          style={{ background: banner.mainBg, color: banner.mainText }}
        >
          <h3 className="font-fahkwang text-center text-5xl mt-4 tracking-[0.2em] uppercase font-bold">
            agen bus malam
          </h3>
          <div className="  text-center item-start flex justify-center">
            <span className="font-fahkwang font-semibold text-center text-4xl italic mt-2">
              PO
            </span>{" "}
            <h1
              className=" font-sriracha shadow-black uppercase text-8xl"
              style={{ color: banner.textColor }}
            >
              {banner.name}
            </h1>
          </div>
          <h3 className="text-center font-kanit text-4xl ml-8">
            AC - NON AC - VIP - PATAS - EXECUTIVE
          </h3>
          <div className="p-4 mt-2" style={{ background: banner.colorA }}></div>
          <div
            className=" h-fit flex flex-grow justify-center"
            style={{ background: banner.colorB }}
          >
            <p
              className=" text-center mx-4 text-2xl uppercase font-sriracha italic my-auto"
              style={{ color: banner.trayekColor }}
            >
              {banner.trayek.map((item, index) => (
                <em key={item}>
                  {item} {index === banner.trayek.length - 1 ? "" : " - "}
                </em>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
