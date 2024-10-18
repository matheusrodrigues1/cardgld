import Image from "next/image";
import React from "react";
import Goldcard from "../assets/goldcard.jpeg";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-zinc-900 items-center justify-center">
      <Image
        src={Goldcard}
        className="mt-[1rem] w-[20rem] h-[27rem] "
        alt="img"
      />
      <span className="font-extrabold text-white text-3xl mt-10">
        CONHEÇA A GOLD CARD
      </span>
      <div className="hidden sm:block">
        <p>+ 2000 conteúdos abertos e fechados.</p>
        <p>+ 40.000 conteúdos cinematográficos.</p>
        <p>Fácil Instalação</p>
        <p>Não precisa de antena.</p>
        <p>Recebimento de imediato direto na sua tv box, tv smart, celular ou computador</p>
      </div>
      <div className="p-10">
        <p className="text-center text-3xl font-extralight text-white">
          Tenha na sua casa centenas de conteúdos, filmes e séries{" "}
          <span className="font-bold">ilimitados sem mensalidade.</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
