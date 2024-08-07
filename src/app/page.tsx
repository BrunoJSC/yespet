import { Banner } from "@/components/banner";
import { ProductSection } from "@/components/product/product-section";
import { PromotionCard } from "@/components/promotion-card";

export default async function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Banner />

      <PromotionCard />
      <ProductSection title="Friskies Sache 85g" documentName="cats" />
    </main>
  );
}
