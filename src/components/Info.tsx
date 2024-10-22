import Image from "next/image";
import React from "react";
import Goldcard from "../assets/goldcard.jpeg";
import Seguration from "../assets/info1.png";
import Grafico from "../assets/info2.png";
import Link from "next/link";

const Info = () => {
  return (
    <div className="w-full h-full flex flex-col items-center bg-white">
      <h1 className="text-center font-extrabold mt-8 text-2xl text-zinc-600 md:text-5xl md:pl-16 md:pr-16 md:leading-relaxed">
        MUITO + RÁPIDO E POTENTE
      </h1>
      <div className="flex flex-col md:flex-row md:max-w-screen-sm">
        <div className="flex flex-col items-center">
          <p className="text-center md:text-left font-bold text-xl pr-5 pl-5 mt-8 md:text-2xl">
            É só Receber o seu código de acesso e instalar na tv box, tv smart,
            celular ou computador .
          </p>
          <span className="text-zinc-500 font-bold text-xl md:text-left text-center md:text-2xl md:pl-10 md:ml-[-1rem] md:pr-10 mt-10">
            Com o GOLDCARD você vai assistir:
          </span>
          <div className="flex flex-col text-xl md:text-[1.3rem] md:ml-[1.2rem] items-start md:text-left md:mr-0 mr-28 font-medium text-zinc-900 mt-6">
            <span>✅ 800 conteúdos abertos.</span>
            <span>✅ 3.000 conteúdos fechados.</span>
            <span>✅ 40.000 séries e filmes.</span>
            <span>✅ 2.000 novelas.</span>
          </div>
        </div>
        <Image
          src={Goldcard}
          className="w-[24rem] rounded-3xl h-[33rem] md:w-[20rem] md:h-[29rem] mt-8"
          alt="img"
        />
      </div>
      <Link href="/hello">
        <button className="px-6 py-5 mt-10 border text-white font-bold text-xl border-green-400 bg-green-500 shadow-lg shadow-black rounded-md">
          ADQUIRA O SEU AGORA!
        </button>
      </Link>
      <Image
        src={Seguration}
        className="w-[22rem] rounded-3xl mt-10"
        alt="img"
      />
      <span className="text-2xl text-orange-500 text-center font-bold mt-14">
        ECONOMIZE DINHEIRO COM A GOLDCARD
      </span>
      <p className="text-center text-zinc-500 font-medium pl-10 pr-10 text-xl mt-14">
        Com a GoldCard você paga apenas 1 vez e já tem tudo liberado. Você pode
        economizar <span className="text-orange-500">mais de R$ 4.098,37</span>{" "}
        por ano comparado a qualquer TV por Assinatura.
      </p>

      <Image src={Grafico} className="w-[24rem] rounded-3xl mt-10" alt="img" />
    </div>
  );
};

export default Info;
