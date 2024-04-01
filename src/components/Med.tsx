import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface MedProps {
  med: Med;
}

const Med: FC<MedProps> = ({ med }) => {
  return (
    <div className="border border-gray-400 p-4 py-7 rounded max-w-2xl relative bg-gray-900 hover:bg-gray-800 cursor-pointer min-w-[300px] w-[550px] m-2">
      <div className="flex">
        {/* image */}
        <div className="min-w-22 h-22 lg:min-w-24 lg:h-24 bg-gray-50 hidden sm:inline-block relative">
          <Image
            sizes={undefined}
            src={"/images/meds/insulin.png"}
            alt="image of a generic insulin bottle"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* details */}
        <div className="ml-5 space-y-1 text-sm max-w-fit  overflow-hidden">
          <h1 className="font-semibold text-elipsis mb-2">
            {med.pName}
            <span className="text-gray-500"> - {med.labeler}</span>
          </h1>
          <div className="sm:space-y-1 text-xs">
            <h1 className="font-light whitespace-nowrap truncate">
              <span className="min-w-[85px] inline-block font-normal">
                Category:
              </span>{" "}
              {med.nonPName.split(", ")[0]}
              <span className="font-medium text-[12px]">
                {med.nonPName.split(", ").length > 1 &&
                  ` + ${med.nonPName.split(", ").length - 1} others`}
              </span>
            </h1>
            <h1 className="font-light whitespace-nowrap truncate">
              <span className="min-w-[85px] inline-block font-normal">
                Form:
              </span>{" "}
              {med.dosageTypes.split(", ").join(" ")} in{" "}
              {med.unit.split("; ")[0]}{" "}
              <span className="text-[12px] font-medium"></span>
            </h1>
            <h1 className="font-light">
              <span className="min-w-[85px] inline-block font-normal">
                strength:
              </span>
              {med.activeStrength.split("; ")[0]}
            </h1>
          </div>
        </div>
      </div>
      <h1 className="font-light text-xs font-semibold absolute right-2 top-2 invisible sm:visible text-gray-400">
        {med.typeName.toLowerCase()}
      </h1>
    </div>
  );
};

export default Med;
