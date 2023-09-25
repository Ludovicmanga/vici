const getCategories = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/all`,
    {
      method: "GET",
      headers: { "content-type": "application/json" },
      credentials: "include",
    }
  );
  console.log(response, " is the response");
};
