import { FunctionComponent } from "react";
import { buttonVariants } from "@/components/ui/button";
import illustration01 from "@/images/illustration01.svg";
import Image from "next/image";
import Link from "next/link";
export const HomeHero: FunctionComponent = () => {
  return (
    <div className="hero w-full min-h-screen">
      <div className="w-full min-h-screen bg-gradient-to-r  from-transparent to-primary/20 flex items-center justify-center  py-32 ">
        <div className="container px-4 flex items-center justify-center lg:justify-between flex-col text-center lg:flex-row lg:text-left">
          <div className="space-y-4 w-full lg:w-1/2">
            <div className="text-primary text-xl md:text-2xl">DjephiX</div>
            <h1 className="font-extrabold text-3xl md:text-5xl leading-snug md:leading-tight">
              Synchronize Your{" "}
              <span className="bg-primary/20 text-primary px-1">Vision</span>{" "}
              with the{" "}
              <span className="bg-primary/20 text-primary px-1">Digital</span>{" "}
              World.
            </h1>
            <p className="text-xl md:text-2xl leading-snug">
              We harmonize your ideas with the digital realm. Join us to
              seamlessly blend creativity with code, fostering innovation and
              propelling your vision beyond boundaries. Let&apos;s build the
              future together.
            </p>
            <Link href={"/"} className={buttonVariants({ variant: "default" })}>
              See our products
            </Link>
          </div>

          <Image
            src={illustration01}
            alt="illustratio"
            width={0}
            height={0}
            className="w-1/3 hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};
