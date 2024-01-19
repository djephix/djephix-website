import { HomeHero } from "@/components/HomeHero";
import { ProductCard } from "@/components/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import edux from "@/images/edux.png";
import illustration from "@/images/illustration02.svg";
import horse from "@/images/horse-mockup.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ServiceCard } from "@/components/ServiceCard";
import { Global } from "iconsax-react";
import avatar from "@/images/avatar.png";
import { TestimonialCard } from "@/components/TestimonialCard";
export default function Page() {
  return (
    <main className="">
      <HomeHero />
      <div className="p-16 space-y-16 flex flex-col items-center">
        <div className="relative font-extrabold text-3xl text-center text-primary">
          OURS PRODUCTS
          <div className="h-2 w-20 rounded bg-primary absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard
            description="EduX is a comprehensive and intuitive solution designed to streamline the administrative processes of educational institutions. This cutting-edge software serves as a centralized hub for schools, providing a seamless management experience for administrators, teachers, students, and parents alike."
            title="EduX: School manager software"
            cover={edux}
          />
          <ProductCard
            description="Shopy is a cutting-edge mobile application designed to revolutionize the management of supermarkets and streamline operational efficiency. With its user-friendly interface and powerful features, Shopy offers a comprehensive solution for supermarket owners and managers to enhance their business operations."
            available={false}
            title="Shopy: Supermarket manager software"
          />
          <ProductCard
            description="Clin is a cutting-edge mobile application designed to streamline and revolutionize the laundry and dry-cleaning management experience. Tailored for both individual entrepreneurs and established businesses in the laundry industry, Clin brings efficiency and organization to every aspect of pressing services."
            available={false}
            title="Clin: Pressing manager software"
          />
        </div>
        <Link
          href={"/"}
          className={buttonVariants({ variant: "default-outline" })}
        >
          See more products
        </Link>
      </div>
      <div className=" w-full min-h-screen bg-gradient-to-br from-primary to-primary/20 text-primary-foreground flex justify-center">
        <div className="container hero-colored min-h-screen  px-4 flex items-center justify-center lg:justify-between flex-col py-32 text-center lg:flex-row lg:text-left">
          <div className="space-y-4 w-full lg:w-1/2">
            <div className="text-xl md:text-2xl">
              Release date in January 2025
            </div>
            <h1 className="font-extrabold text-3xl md:text-5xl leading-snug md:leading-tight">
              Horse: Find residences to rent anywhere
            </h1>
            <p className="text-xl md:text-2xl leading-snug">
              Horse is the ultimate mobile app designed to simplify and enhance
              your property search experience. Whether you&apos;re a seasoned
              traveler, a digital nomad, or someone seeking a new place to call
              home, Horse provides a seamless and comprehensive solution.
            </p>
            <div className="space-x-4">
              <Link href={"/"} className={buttonVariants({ variant: "light" })}>
                Pre-register on Horse
              </Link>
              <Link
                href={"/"}
                className={buttonVariants({ variant: "light-outline" })}
              >
                Discover more apps
              </Link>
            </div>
          </div>

          <Image
            src={horse}
            alt="illustratio"
            width={0}
            height={0}
            className="w-full lg:w-1/2"
          />
        </div>
      </div>
      <div className="p-16 space-y-16 flex flex-col items-center">
        <div className="relative font-extrabold text-3xl text-center text-primary">
          OURS SERVICES
          <div className="h-2 w-20 rounded bg-primary absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="container px-4 flex items-center justify-center lg:justify-between flex-col lg:flex-row-reverse">
          <div className="space-y-4 w-full lg:w-1/2">
            <ServiceCard
              description="Creation of personalized websites, ranging from showcase sites to online shops, using modern web technologies to guarantee an optimal user experience."
              title="Websites Development"
              icon={Global}
            />
            <ServiceCard
              description="Creation of personalized websites, ranging from showcase sites to online shops, using modern web technologies to guarantee an optimal user experience."
              title="Websites Development"
              icon={Global}
            />
            <ServiceCard
              description="Creation of personalized websites, ranging from showcase sites to online shops, using modern web technologies to guarantee an optimal user experience."
              title="Websites Development"
              icon={Global}
            />
          </div>
          <div className="w-full hidden lg:flex lg:w-1/2 items-center">
            <Image
              src={illustration}
              alt="illustration"
              width={0}
              height={0}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="p-16 space-y-16 flex flex-col items-center">
        <div className="relative font-extrabold text-3xl text-center text-primary">
          TESTIMONIES
          <div className="h-2 w-20 rounded bg-primary absolute -bottom-4 left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="container px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <TestimonialCard
            message="Creation of personalized websites, ranging from showcase sites to online shops, using modern web technologies to guarantee an optimal user experience."
            title="Principal of primary school Test"
            avatar={avatar}
          />
          <TestimonialCard
            message="Creation of personalized websites, ranging from showcase sites to online shops, using modern web technologies to guarantee an optimal user experience."
            title="Principal of primary school Test"
            avatar={avatar}
          />
          <TestimonialCard
            message="Creation of personalized websites, ranging from showcase sites to online shops, using modern web technologies to guarantee an optimal user experience."
            title="Principal of primary school Test"
            avatar={avatar}
          />
        </div>
      </div>
    </main>
  );
}
