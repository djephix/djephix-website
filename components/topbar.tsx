import Link from "next/link";
import { FunctionComponent } from "react";
import logo from "./../images/Logo.svg";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
export const Topbar: FunctionComponent = () => {
  return (
    <nav className="px-8 h-16 fixed w-full top-0 left-0 z-50 flex justify-center">
      <div className="container flex items-center justify-between backdrop-blur-lg">
        <Image src={logo} alt="djephix logo" width={100} />
        <div className="flex space-x-4">
          <Link href={"/"} className="text-primary font-bold relative">
            Home
            <div className="h-1 w-1/2 rounded bg-primary absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
          </Link>
          <Link href={"/"} className="">
            Products
          </Link>
          <Link href={"/"} className="">
            Apps
          </Link>
          <Link href={"/"} className="">
            Services
          </Link>
          <Link href={"/"} className="">
            About
          </Link>
        </div>
        <Link href={"/"} className={buttonVariants({ variant: "secondary" })}>
          Contact us
        </Link>
      </div>
    </nav>
  );
};
