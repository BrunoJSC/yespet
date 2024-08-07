import { client } from "@/lib/sanity";
import { SectionProps } from "@/types/cat";

export const getDataByDocumentName = async (document: string) => {
  try {
    const query = `*[_type == "${document}"]{
      _id,
      title,
      banner,
      "imageUrl": images[0].asset->url,
      price,
    }`;

    const data: SectionProps[] = await client.fetch(query);

    return data;
  } catch (error) {
    console.error("Failed to fetch data", error);
    return [];
  }
};
