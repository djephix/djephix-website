import { StaticImageData } from "next/image";
import { ComponentProps, FunctionComponent, ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
interface ProductCardProps {
  cover?: StaticImageData | string;
  title: ReactNode;
  available?: boolean;
  description: ReactNode;
}
export const ProductCard: FunctionComponent<ProductCardProps> = ({
  cover,
  description,
  title,
  available = true,
}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          {cover && (
            <Image
              src={cover}
              alt="Edux screen shot"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          )}
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
        <CardFooter className="flex flex-col md:flex-row gap-4">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "default" }), "w-full")}
          >
            {available ? "Order now" : "Pre order"}
          </Link>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
          >
            Read more
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
