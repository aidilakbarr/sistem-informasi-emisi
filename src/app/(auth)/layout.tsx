import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
        <figure className="lg:w-1/2">
          <Image
            src={"/assets/img/pngwing.com.png"}
            layout="intrinsic" // Automatically adjusts size
            width={1000} // Set a base width
            height={1000}
            alt="Random image"
            className="object-cover w-full h-full hidden lg:block"
          />
        </figure>
        {children}
      </div>
    </div>
  );
}
