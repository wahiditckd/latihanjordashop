import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return;
  <div className="relative">
    <div className="container wrapper">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src="/images/logo.svg" width={99} height={107} alt="logo" />
        </Link>
        <div className="relative">
          <ul>
            <li>
              <Link href="/">Women</Link>
            </li>
            <li>
              <Link href="/">Man</Link>
            </li>
          </ul>
        </div>
      </div>
      Hello
    </div>
  </div>;
}
