import Image from "next/image";
import React from "react";
import Sub01 from "../assets/sub01.jpeg";
import Sub02 from "../assets/sub02.png";
import Sub03 from "../assets/sub03.png";
import Sub04 from "../assets/sub04.png";

const SubPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-zinc-900">
      <h1 className="font-extrabold text-center text-3xl pr-9 pl-9 text-white mb-20 mt-10">
        A GOLDCARD É PARA VOCE QUE:
      </h1>
      <div className="flex flex-col items-center justify-center w-[24rem] h-[37rem] lg:gap-3 rounded-lg bg-black lg:h-[17rem] lg:w-[67rem] lg:flex-row">
        <Image
          src={Sub01}
          className="h-[12rem] w-[20rem] rounded-lg lg:ml-5"
          alt="img"
        />
        <div className="flex flex-col">
          <span className="text-xl lg:text-left text-zinc-400 font-extrabold text-center lg:p-0 pr-10 pl-10 mt-5">
            ESTÁ CANSADO DE PAGAR CARO EM PACOTES DE TV?
          </span>
          <p className="text-zinc-300 text-2xl lg:text-xl lg:text-left lg:p-0 lg:items-center lg:justify-center font-normal text-center pr-10 pl-10 mt-6 leading-tight">
            Chega de tomar sustos com aumentos que Você não esperava nas
            mensalidades da sua fatura de TV fechada!{" "}
            <span className="font-bold text-white">
              A GoldCard não tem mensalidade.
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[24rem] h-[37rem] rounded-lg bg-black mt-5 lg:h-[17rem] lg:w-[67rem] lg:flex-row lg:gap-3">
        <Image
          src={Sub02}
          className="h-[12rem] w-[20rem] rounded-lg lg:ml-5"
          alt="img"
        />
        <div className="flex flex-col">
          <span className="text-2xl text-zinc-400 font-extrabold text-center pr-10 pl-10 mt-5 lg:text-left lg:p-0">
            Não tem paciência para atendentes de Operadoras
          </span>
          <p className="text-zinc-300 text-2xl font-normal text-center pr-10 pl-10 mt-6 leading-tight lg:text-xl lg:text-left lg:p-0 lg:items-center lg:justify-center">
            Chega de perder a parte mais importante do que você está assistindo.
            Não se preocupe com quedas e instabilidades de sinal!{" "}
            <span className="font-bold text-white">
              Faça chuva ou faça sol, tenha sinal sempre!
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[24rem] h-[37rem] rounded-lg bg-black mt-5 lg:h-[17rem] lg:w-[67rem] lg:flex-row lg:gap-3">
        <Image
          src={Sub03}
          className="h-[12rem] w-[20rem] rounded-lg lg:ml-5"
          alt="img"
        />
        <div className="flex flex-col">
          <span className="text-2xl text-zinc-400 font-extrabold text-center pr-10 pl-10 mt-5 lg:text-left lg:p-0">
            Quer ter estabilidade de sinal
          </span>
          <p className="text-zinc-300 text-2xl font-normal text-center pr-10 pl-10 mt-6 leading-tight lg:text-xl lg:text-left lg:p-0 lg:items-center lg:justify-center">
            Chega de perder a parte mais importante do que você está assistindo.
            Não se preocupe com quedas e instabilidades de sinal!{" "}
            <span className="font-bold text-white">
              Faça chuva ou faça sol, tenha sinal sempre!
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[24rem] h-[37rem] rounded-lg bg-black mt-5 mb-5 lg:h-[17rem] lg:w-[67rem] lg:flex-row lg:gap-3">
        <Image
          src={Sub04}
          className="h-[12rem] w-[20rem] rounded-lg lg:ml-5"
          alt="img"
        />
        <div className="flex flex-col">
          <span className="text-2xl text-zinc-400 font-extrabold text-center pr-10 pl-10 mt-5 lg:text-left lg:p-0">
            Está cansado de pagar caro em pacotes de TV
          </span>
          <p className="text-zinc-300 text-2xl font-normal text-center pr-8 pl-8 mt-6 leading-tight lg:text-xl lg:text-left lg:p-0 lg:items-center lg:justify-center">
            Já comprou um produto que pouco tempo depois parou de funcionar?{" "}
            <span className="font-bold text-white">
              Nós te damos suporte exclusivo e atualizamos semanalmente os
              filmes e séries
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubPage;
