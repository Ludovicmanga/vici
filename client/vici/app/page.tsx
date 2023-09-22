export default async function Home() {
  try {
    const all = await fetch(`${process.env.BACKEND_URL}/flash-cards/all`, {
      method: 'GET',
    });
    console.log(await all.json(), ' is the res');
  } catch (e) {
    console.log(e, " is the error");
  }
  return (
    <main>
      <div>Home</div>
    </main>
  );
}
