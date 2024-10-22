import React from "react";

const Header = () => {
  return (
    <main className="flex h-20 md:h-10 md:text-sm bg-black items-center justify-center text-zinc-400">
      <p className="font-normal text-center text-xl">
        Compra aprovada na mesma hora para pagamento por{" "}
        <span className="font-extrabold text-white">
          PIX <span className="font-medium">ou</span> CARTÃO.
        </span>
      </p>
    </main>
  );
};

export default Header;
