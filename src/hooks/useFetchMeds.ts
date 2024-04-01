import { parseMed } from "@/utils/parseMed";
import { Dispatch, SetStateAction, useCallback } from "react";

const PAGE_SIZE = 40;

const useFetchMeds = () => {
  const getMeds = useCallback(
    async (
      input: string,
      setMeds: (value: SetStateAction<Med[]>) => void,
      setLoading: (value: SetStateAction<boolean>) => void,
      page: number
    ) => {
      if (!input) {
        return;
      }
      setLoading(true);
      const result = await fetch(
        `/api/meds?query=${input}&page=${page}&pageSize=${PAGE_SIZE}`
      );
      const data = (await result.json()) as MedsResponse;
      const medications = data.products.map((product) => parseMed(product));

      setMeds(medications);
      setLoading(false);
      return;
    },
    []
  );

  const getMoreMeds = useCallback(
    async (
      input: string,
      setMeds: (value: SetStateAction<Med[]>) => void,
      setLoading: (value: SetStateAction<boolean>) => void,
      page: number,
      onSuccess: () => void
    ) => {
      setLoading(true);
      const result = await fetch(
        `/api/meds?query=${input}&page=${page}&pageSize=${PAGE_SIZE}`
      );
      const data = (await result.json()) as MedsResponse;
      const medications = data.products.map((product) => parseMed(product));
      if (
        data.pagination.currentPage <= data.pagination.totalPages &&
        medications.length > 0
      ) {
        setMeds((meds) => {
          return [...meds, ...medications];
        });
        onSuccess();
      }
      setLoading(false);
      return;
    },
    []
  );
  return { getMeds, getMoreMeds };
};

export { useFetchMeds };
