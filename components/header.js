import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative font-Dosis font-semibold">
      <div className="container wrapper">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/images/logo.svg" width={99} height={107} alt="logo" />
          </Link>
          <div className="relative flex items-center gap-14">
            <ul className="flex gap-7">
              <li>
                <Link href="/">Women</Link>
              </li>
              <li>
                <Link href="/">Man</Link>
              </li>
            </ul>
            <div className="relative flex items-center gap-7">
              <div className="cursor-pointer">
                <Image
                  src="/images/search.svg"
                  width={27}
                  height={27}
                  alt="search"
                />
              </div>
              <div className="cursor-pointer relative">
                <span className="absolute -right-2 -top-2 bg-orange-c text-white rounded-full w-[24px] h-[24px] flex justify-center items-center text-[12px]">
                  2
                </span>
                <Image src="/images/cart.svg" width={36} height={36} />
              </div>
            </div>
            <div className="cursor-pointer relative">
              <Image src="/images/menu.svg" width={36} height={36} />
            </div>
          </div>
        </div>
        hello
      </div>
    </div>
  );
}
