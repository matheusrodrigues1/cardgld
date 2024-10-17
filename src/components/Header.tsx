import React from "react";

const Header = () => {
  return (
    <main className="flex h-20 bg-black items-center justify-center text-white">
      <p className="font-normal text-center text-xl">
        Compra aprovada na mesma hora para pagamento por{" "}
        <span className="font-extrabold">
          PIX <span className="font-medium">ou</span> CARTÃO.
        </span>
      </p>
    </main>
  );
};

export default Header;
