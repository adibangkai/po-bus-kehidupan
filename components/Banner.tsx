interface BannerProperties {
  banner: {
    name: string;
    trayek: string[];
    colorA: string;
    colorB: string;
    textColor: string;
    mainBg: string;
    mainText: string;
  };
}

export default function Banner({ banner }: BannerProperties) {
  return (
    <div className="pt-20">
      <div
        className="bg-white w-[60em] flex flex-col h-[400px]  border-8 border-gray-500 mx-auto "
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
          <p className="text-white text-center mx-4 text-2xl uppercase font-sriracha italic my-auto">
            rempoa - ciputat - bintaro - kp utan - jakarta - bandung -
            gunungkidul - berlin
          </p>
        </div>
      </div>
    </div>
  );
}
