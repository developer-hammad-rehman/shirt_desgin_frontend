"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const path = usePathname();
  if (path.startsWith("/demos/men-tshirt/3d") || path.startsWith("/demos/women-tshirt/3d")) {
    return null;
  } else {
    return (
      <header className="flex w-full justify-between items-center bg-white p-10">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <ul className="hidden md:flex gap-4">
          <li
            className={
              path == "/"
                ? "font-bold text-teal-300 uppercase"
                : "font-bold text-gray-900 hover:text-teal-300 uppercase"
            }
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={
              path == "/shop"
                ? "font-bold text-teal-300 uppercase"
                : "font-bold text-gray-900 hover:text-teal-300 uppercase"
            }
          >
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li
            className={
              path == "/demos"
                ? "font-bold text-teal-300 uppercase"
                : "font-bold text-gray-900 hover:text-teal-300 uppercase"
            }
          >
            <Link href={"/demos"}>Customize</Link>
          </li>
          <li
            className={
              path == "/pages"
                ? "font-bold text-teal-300 uppercase"
                : "font-bold text-gray-900 hover:text-teal-300 uppercase"
            }
          >
            <Link href={"/pages"}>Pages</Link>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            className="px-4 py-2 border-2 border-gray-950 rounded-lg"
            placeholder="Search"
          />
          <Link href={"/card"}>
            <ShoppingCart className="text-gray-800" />
          </Link>
          <Link href={"/auth"}>
            <CircleUserRound className="text-gray-800" />
          </Link>
        </div>
        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Image src={logo} alt="logo" />
              </SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col gap-4">
                  <li
                    className={
                      path == "/"
                        ? "font-bold text-teal-300 uppercase"
                        : "font-bold text-gray-900 hover:text-teal-300 uppercase"
                    }
                  >
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li
                    className={
                      path == "/shop"
                        ? "font-bold text-teal-300 uppercase"
                        : "font-bold text-gray-900 hover:text-teal-300 uppercase"
                    }
                  >
                    <Link href={"/shop"}>Shop</Link>
                  </li>
                  <li
                    className={
                      path == "/demos"
                        ? "font-bold text-teal-300 uppercase"
                        : "font-bold text-gray-900 hover:text-teal-300 uppercase"
                    }
                  >
                    <Link href={"/demos"}>Demos</Link>
                  </li>
                  <li
                    className={
                      path == "/pages"
                        ? "font-bold text-teal-300 uppercase"
                        : "font-bold text-gray-900 hover:text-teal-300 uppercase"
                    }
                  >
                    <Link href={"/pages"}>Pages</Link>
                  </li>
                  <li
                    className={
                      path == "/auth"
                        ? "font-bold text-teal-300 uppercase"
                        : "font-bold text-gray-900 hover:text-teal-300 uppercase"
                    }
                  >
                    <Link href={"/auth"}>login</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
    );
  }
}
