"use client";

import { getDataByDocumentName } from "@/fetch/getCats";
import { ProductCard } from "./product-card";
import { useEffect, useState } from "react";
import { SectionProps } from "@/types/cat";

interface ProductSectionProps {
  title: string;
  documentName: string;
}

export function ProductSection({
  title,
  documentName,
}: Readonly<ProductSectionProps>) {
  const [products, setProducts] = useState<SectionProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getDataByDocumentName(documentName);
        setProducts(data);
      } catch (error) {
        console.error(`Failed to fetch ${title} products`, error);
      }
    };

    fetchProducts();
  }, [documentName, title]);
  return (
    <section className="my-8 p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
