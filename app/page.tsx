export default function Home() {
  return (
    <div className="bg-slate-800 h-screen pt-20 ">
      <div className="bg-white w-[60em] flex flex-col h-[400px]  border-8 border-gray-500 mx-auto ">
        <h3 className="font-fahkwang text-center text-5xl mt-4 tracking-[0.2em] uppercase font-bold">
          agen bus malam
        </h3>
        <div className="  text-center item-start flex justify-center">
          <span className="font-fahkwang font-semibold text-center text-4xl italic mt-2">
            PO
          </span>{" "}
          <h1 className=" font-sriracha text-red-600 shadow-black uppercase text-8xl">
            BISNIS NASIHAT
          </h1>
        </div>
        <h3 className="text-center font-kanit text-4xl ml-8">
          AC - NON AC - VIP - PATAS - EXECUTIVE
        </h3>
        <div className="bg-lime-500 p-4 mt-2"></div>
        <div className="bg-lime-900 h-fit flex flex-grow justify-center">
          <p className="text-white text-center mx-4 text-2xl uppercase font-sriracha italic my-auto">
            rempoa - ciputat - bintaro - kp utan - jakarta - bandung -
            gunungkidul - berlin
          </p>
        </div>
      </div>
      <div className="text-white font-kanit cursor-pointer px-4 py-2 bg-slate-900 mt-4  w-1/6 mx-auto text-center rounded-xl border-2 border-lime-300 transition ease-in-out  duration-300 shadow-sm hover:shadow-lime-400 hover:shadow-md">
        make your own
      </div>
    </div>
  );
}
