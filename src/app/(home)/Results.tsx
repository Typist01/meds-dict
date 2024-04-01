"use client";
import Med from "@/components/Med";
import Spinner from "@/components/Spinner";
import { useFetchMeds } from "@/hooks/useFetchMeds";
import { useScrollToBottom } from "@/hooks/useScrollToBottm";
import { useSetSearchParam } from "@/hooks/useSetSearchParam";
import { useEffect, useRef, useState } from "react";

export function Results({ watchedInput }: { watchedInput: string }) {
  const { setSearchParam } = useSetSearchParam();
  const [loadingMeds, setLoadingMeds] = useState(false);
  const [meds, setMeds] = useState<Med[]>([]);
  const [endReached, setEndReached] = useState(false);
  const page = useRef<number>(1);
  const { getMeds, getMoreMeds } = useFetchMeds();

  useScrollToBottom(() => {
    getMoreMeds(
      watchedInput,
      setMeds,
      setLoadingMeds,
      page.current + 1,
      () => (page.current += 1)
    );
  });
  const reset = () => {
    setMeds([]);
    page.current = 1;
    setEndReached(false);
  };

  useEffect(() => {
    console.log("running usEffectsetsearchaparams");
    setSearchParam("search", watchedInput);
    reset();
    if (!watchedInput) {
      return;
    }
    const timeout = setTimeout(() => {
      getMeds(watchedInput, setMeds, setLoadingMeds, page.current);
      console.log("call func");
    }, 250);

    return () => clearTimeout(timeout);
  }, [getMeds, watchedInput]);

  return (
    <>
      {/* medications */}
      <div className="flex flex-wrap justify-center">
        {meds.map((med) => (
          <Med key={med.id} med={med} />
        ))}
      </div>
      {endReached && <div>End reached</div>}
      {loadingMeds && (
        <div className="h-full w-full flex items-center justify-center my-[7vh]">
          <Spinner />
          <span className="ml-5">Loading ...</span>
        </div>
      )}
    </>
  );
}
