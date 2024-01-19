import Image, { StaticImageData } from "next/image";
import { FunctionComponent, ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
type TestimonialCardProps = {
  avatar?: StaticImageData | string;
  title: string;
  message: ReactNode;
};
export const TestimonialCard: FunctionComponent<TestimonialCardProps> = ({
  message,
  title,
  avatar,
}) => {
  return (
    <div>
      <Card>
        <CardHeader className="space-y-4">
          {avatar && (
            <Image
              src={avatar}
              alt="avatar"
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
          )}
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{message}</CardContent>
      </Card>
    </div>
  );
};
