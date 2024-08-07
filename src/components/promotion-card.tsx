import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { client } from "@/lib/sanity";

interface PromotionsProps {
  type: string;
  details: string;
}

async function getData() {
  const query = `*[_type == "promotions"]{type, details}`;

  return client.fetch<PromotionsProps[]>(query);
}

export async function PromotionCard() {
  const data = await getData();

  return (
    <section className="container mx-auto mt-10 px-4">
      <div className="grid md:grid-cols-4 gap-6 grid-cols-1 sm:grid-cols-2">
        {data?.map((promotion) => (
          <Card
            key={promotion.type}
            className="relative rounded-lg shadow-lg bg-primary text-white p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105"
          >
            <div className="absolute inset-0 rounded-lg"></div>
            <div className="relative z-10">
              <CardTitle className="text-xl font-semibold mb-2">
                {promotion.type}
              </CardTitle>
              <CardDescription className="text-center text-white">
                {promotion.details}
              </CardDescription>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
