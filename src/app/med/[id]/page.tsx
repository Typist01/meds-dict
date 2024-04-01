import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="mx-[7vh] my-[5vh] text-gray-200 min-w-[450px]">
      <button className="my-[2vh] text-gray-400 hover:bg-gray-800 rounded p-1 px-2">
        Back to results
      </button>
      <div className="flex flex-col md:flex-row">
        {/* <div className="md:w-2/3"></div> */}
        {/* right contgainer */}
        <div>
          <div className="">
            <h1 className="text-4xl mb-[3vh]">Humulin</h1>
            <div className="bg-gray-700 w-full max-w-[30vh] h-[30vh] md:max-w-[25vh] md:max-h-[25vh] sm:w-[30vh] sm:h-[30vh]"></div>
          </div>
          {/* Details */}
          <div>
            <h3 className="mt-[3vh] mb-[2vh] text-xl text-gray-100">
              Description
            </h3>
            <ul className="space-y-2 w-full sm:w-[30vh]">
              <li className="flex justify-between">
                <span className="font-medium text-white-100">Category:</span>{" "}
                tirzepatide
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-white-100">Form:</span>{" "}
                Injection
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-white-100">Strength:</span>{" "}
                7.5
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-white-100">Labeler:</span> Eli
                Lily and Company
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-[3vh] ml-[10vh] w-full">
          <div>
            <h3 className="text-xl">Alternative Categories</h3>
            <ul className="p-2 [&>*:nth-child(odd)]:bg-gray-800 [&>*:nth-child(even)]:bg-gray-900">
              <li className="py-1 px-2">1 lorem ipsum....</li>
              <li className="py-1 px-2">1 lorem ipsum....</li>
              <li className="py-1 px-2">1 lorem ipsum....</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl">Alternative forms</h3>
            <ul className="p-2 [&>*:nth-child(odd)]:bg-gray-800 [&>*:nth-child(even)]:bg-gray-900">
              <li className="py-1 px-2">1 lorem ipsum....</li>
              <li className="py-1 px-2">1 lorem ipsum....</li>
              <li className="py-1 px-2">1 lorem ipsum....</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl">Alternative Strengths</h3>
            <ul className="p-2 [&>*:nth-child(odd)]:bg-gray-800 [&>*:nth-child(even)]:bg-gray-900">
              <li className="py-1 px-2">1 lorem ipsum....</li>
              <li className="py-1 px-2">1 lorem ipsum....</li>
              <li className="py-1 px-2">1 lorem ipsum....</li>
            </ul>
          </div>
          <ul></ul>
        </div>
      </div>
    </main>
  );
};

export default page;
