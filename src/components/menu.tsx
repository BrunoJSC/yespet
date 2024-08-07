"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { menu } from "@/constants/menu";

export function Menu() {
  return (
    <div className="flex justify-center p-4">
      <NavigationMenu>
        <NavigationMenuList>
          {menu.map((category) => (
            <NavigationMenuItem key={category.title} className="w-full">
              <NavigationMenuTrigger className="w-full font-semibold">
                {category.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex justify-center w-full">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {category.items.map((item) => (
                    <li key={item.link} className="row-span-3">
                      <NavigationMenuLink
                        href={item.link}
                        className="hover:bg-violet-600 hover:text-white p-2 rounded font-normal"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
