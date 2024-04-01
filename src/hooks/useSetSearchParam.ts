"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useSetSearchParam = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setSearchParam = (param: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    if (!value) {
      current.delete(param);
    } else {
      current.set(param, value);
    }
    // cast to string
    const search = current.toString();
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  return { setSearchParam };
};

export { useSetSearchParam };
