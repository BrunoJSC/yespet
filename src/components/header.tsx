import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Menu } from "./menu";

export function Header() {
  return (
    <>
      <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={100} height={100} priority />
        </div>

        <div className="relative w-full max-w-md my-2 md:my-0">
          <Input
            type="text"
            placeholder="Buscar produto"
            className="w-full pl-10 pr-4 py-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
            aria-label="Pesquisar"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="flex gap-4">
          <Button variant="ghost" aria-label="Login">
            Login
          </Button>
          <Button variant="default" aria-label="Cadastrar">
            Cadastrar
          </Button>
          <Button variant="ghost" aria-label="Carrinho de compras">
            <ShoppingCart className="w-6 h-6 text-violet-600" />
          </Button>
        </div>
      </header>

      <Menu />
    </>
  );
}
