import Image from "next/image";
import { FC } from "react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <div className=" p-1 flex items-center">
      <div className="h-24 w-24 relative">
        <Image
          className="invert"
          sizes={undefined}
          src={"/images/meds/logo.png"}
          alt="image of a generic insulin bottle"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1>Drug Dictionary 24</h1>
    </div>
  );
};

export default NavBar;
