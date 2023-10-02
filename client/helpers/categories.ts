import { Category } from "@/types/constants";

export const getCategories = async () => {
  const response: Category[] = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/all`,
    {
      method: "GET",
      headers: { "content-type": "application/json" },
      credentials: "include",
    }
  ).then(async res => await res.json());
  return response;
};
