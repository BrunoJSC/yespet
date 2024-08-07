import {
  Card as CardComponent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { urlForImage } from "@/lib/sanity";

interface ProductCardProps {
  product: {
    _id: string;
    title: string;
    price: number;
    imageUrl: string;
    banner?: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <CardComponent
      className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      key={product._id}
    >
      {product.banner && (
        <div className="bg-red-600 text-white text-center py-2 rounded-t-lg">
          {product.banner}
        </div>
      )}
      <CardHeader className="p-0">
        <Link href={`/product/${product._id}`}>
          {product.imageUrl ? (
            <Image
              src={urlForImage(product.imageUrl).url()}
              alt={product.title}
              width={400}
              height={300}
              className="object-cover w-full h-56 rounded-t-lg"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-56 bg-gray-200 rounded-t-lg">
              <p className="text-gray-500">No image available</p>
            </div>
          )}
        </Link>
      </CardHeader>
      <div className="p-4">
        <CardTitle className="text-lg font-semibold text-center mb-2">
          {product.title}
        </CardTitle>
        <CardDescription className="text-center mb-4">
          <p className="text-xl font-bold text-gray-800">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </p>
        </CardDescription>
        <Button
          variant="default"
          aria-label="Adicionar ao carrinho"
          className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-purple-600 text-white transition-colors duration-300 hover:bg-purple-700"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="text-lg font-semibold">Adicionar ao carrinho</span>
        </Button>
      </div>
    </CardComponent>
  );
}
