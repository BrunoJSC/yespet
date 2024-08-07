import { footerData } from "@/constants/footer";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="grid md:grid-cols-4 gap-4 grid-cols-2 mt-10  w-full p-4 bg-primary ">
      {footerData.map((item, index) => (
        <div key={index}>
          <h1 className="font-bold text-md text-secondary">{item.title}</h1>
          <ul>
            {item.items.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.link}
                  className="text-sm text-secondary font-medium hover:underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
