"use client";
import { useForm } from "react-hook-form";
import { Results } from "./Results";
type FormTypes = { input: string };
export default function Home() {
  const { register, watch } = useForm<FormTypes>();
  const watchedInput = watch("input");

  return (
    <div className={"mx-[7vh] my-[5vh] text-gray-200 min-w-[400px]"}>
      <div className="w-full mb-8 flex justify-center">
        <input
          placeholder="aspirin"
          {...register("input")}
          className="rounded h-10 max-w-sm text-black px-2 text-center"
        />
      </div>
      {!watchedInput && (
        <div className="space-y-4 p-[1vh] md:p-[5vh] lg:p-[15vh]">
          <h3>Welcome to the drug dictionary!</h3>
          <p>
            Start by entering a name of a drug in the search box above to get
            started
          </p>
          <p>
            This dictionary contains information about prescription and
            over-the-counter drugs, including their names, forms, strengths, and
            categories.
          </p>
          <p>Data from the national drug code (NDC) directory</p>
        </div>
      )}
      <div className="">
        <Results watchedInput={watchedInput} />
      </div>
    </div>
  );
}
