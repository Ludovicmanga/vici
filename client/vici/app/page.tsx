
export default async function Home() {
  const all = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/flash-cards/all`, {
    method: "GET",
  });
  const allAwaited = await all.json();
  return (
    <main>
      <div>
        Home
      </div>
    </main>
  );
}
