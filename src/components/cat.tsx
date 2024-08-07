"use client";

import { client, urlForImage } from "@/lib/sanity";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { SectionProps } from "@/types/cat";
import { useEffect, useState } from "react";
import { getDataCats } from "@/fetch/getCats";
import { Card } from "./product/card";

export function Cat() {
  const [data, setData] = useState<SectionProps[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await getDataCats();
      setData(data as SectionProps[]);
    }
    getData();
  }, []);

  return (
    <section className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-primary text-center">
        Friskies Sache 85g
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.map((cat) => <Card key={cat._id} cat={cat} />)}
      </div>
    </section>
  );
}
