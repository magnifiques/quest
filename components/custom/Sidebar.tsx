"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";

const Sidebar = ({ user }: SiderbarProps) => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="mb-12 flex text-purple-500 text-xl cursor-pointer items-center gap-2"
        >
          Quest
        </Link>
        {sidebarLinks.map((link, index) => {
          const pathName = usePathname();
          const sideLinkActive =
            pathName === link.route || pathName.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn("sidebar-link", {
                "bg-bankGradient": sideLinkActive,
              })}
            >
              <div className="relative size-6 font-inter">
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": sideLinkActive,
                  })}
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "!text-white": sideLinkActive,
                })}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
        <PlaidLink user={user} />
      </nav>
      <Footer user={user} />
    </section>
  );
};

export default Sidebar;
