"use client";
import { Icon as IconType } from "iconsax-react";
import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: IconType;
  title: ReactNode;
  description: ReactNode;
};

export const ServiceCard: FunctionComponent<ServiceCardProps> = ({
  description,
  icon: Icon,
  title,
}) => {
  const [hoverder, sethoverder] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.addEventListener("focus", () => sethoverder(true));
    ref.current?.addEventListener("blur", () => sethoverder(false));
  }, []);

  return (
    <div ref={ref} tabIndex={0}>
      <Card hoverable={!hoverder}>
        <CardHeader className="space-y-4">
          <div
            className={cn(
              "transition-colors duration-300 w-10 h-10 rounded flex items-center justify-center",
              hoverder ? "bg-primary" : "bg-muted"
            )}
          >
            <Icon
              className={cn(
                "transition-colors duration-300 ",
                hoverder ? "text-primary-foreground" : "text-muted-foreground"
              )}
            />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
        <AnimatePresence>
          <motion.div>
            {hoverder && (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 1 }}
              >
                <CardFooter>
                  <Link
                    href={"/"}
                    className={buttonVariants({ className: "w-full" })}
                  >
                    Order now
                  </Link>
                </CardFooter>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
};
