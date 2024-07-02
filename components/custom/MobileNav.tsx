"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="menu icon"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/">Quest</Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link, index) => {
                  const pathName = usePathname();
                  const sideLinkActive =
                    pathName === link.route ||
                    pathName.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.route}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bankGradient": sideLinkActive,
                        })}
                      >
                        <Image
                          src={link.imgURL}
                          alt={link.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": sideLinkActive,
                          })}
                        />
                        <p
                          className={cn("text-16 font-semibold text-black-2 ", {
                            "!text-white": sideLinkActive,
                          })}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                {/* USER */}
              </nav>
            </SheetClose>
          </div>
          <Footer user={user} type="mobile" />
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
