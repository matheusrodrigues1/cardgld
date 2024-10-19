import Image from "next/image";
import React, { useState } from "react";
import Brasil from "../assets/brasil-1.png";
import Mensalidade from "../assets/mensalidade-1.png";
import Ok from "../assets/OK-1.png";
import Seguro from "../assets/seguro2-1.png";
import Link from "next/link";

const End = () => {
  return (
    <div className="w-full h-full bg-black flex flex-col items-center">
      <Image src={Brasil} className="w-[15rem] mt-10" alt="img" />
      <span className="text-white text-xl mt-5">
        Produto com <span className="font-bold">estoque no Brasil</span>
      </span>
      <Image src={Mensalidade} className="w-[15rem] mt-10" alt="img" />
      <span className="text-white text-xl mt-5">
        Não tem <span className="font-bold">mensalidade</span>
      </span>
      <span className="text-zinc-500 text-lg font-bold mt-12">
        FORMAS DE PAGAMENTO
      </span>
      <Image src={Ok} className="w-[20rem] h-[7rem] mt-5" alt="img" />
      <span className="text-zinc-500 text-lg font-bold mt-5">FALE CONOSCO</span>
      <Link href="/hello">
        <button className="bg-green-600 px-7 text-white font-bold py-3 mt-10 rounded-sm">
          Atendimento pelo whatsApp
        </button>
      </Link>
      <span className="text-zinc-500 text-lg font-bold mt-10">SITE SEGURO</span>
      <Image src={Seguro} className="w-[20rem] mt-5" alt="img" />
      <div className="my-4 border-t border-zinc-600 w-[17rem] mt-8" />
      <p className="text-zinc-500 text-center text-xs mt-8">
        Somos uma empresa de E-commerce, Todos os direitos reservados |
        Importante: Esta página não tem qualquer vínculo com o Facebook S/A e
        suas empresas, apenas usamos a plataforma para promover os nossos
        produtos. Ao sair da plataforma toda responsabilidade sobre produtos
        vendidos e ofertados é de inteira responsabilidade da nossa empresa, bem
        como se houver quaisquer eventualidades legais. Declaramos que o
        Facebook S/A não tem qualquer vínculo de associação em processos civeis
        ou criminais.Nosso email de suporte é: suporte@goldcaard.com Não compre
        produtos piratas, não vendemos em marketplaces como: Mercado Livre,
        Shopee, Aliexpress, Facebook, Olx etc.Não damos suporte a produtos
        comprados nestes canais.
      </p>
      <br className="" />
      <p className="font-normal text-center text-sm text-white">
        Compra aprovada na mesma hora para pagamento por{" "}
        <span className="font-extrabold">
          PIX <span className="font-medium">ou</span> CARTÃO.
        </span>
      </p>
    </div>
  );
};

export default End;
