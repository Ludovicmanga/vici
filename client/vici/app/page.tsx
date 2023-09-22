import CardBox from "@/components/CardBox/CardBox";

export default async function Home() {
  console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/flash-cards/all`, 'was sent')
  const allCardsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/flash-cards/all`,
    {
      method: "GET",
      mode: "cors",
    }
  );
  const allCards: {
    id: number;
    question: string;
    answer: string;
    known: string;
  }[] = await allCardsResponse.json();

  
  return (
    <div>
      {allCards.map((card) => (
        <CardBox key={card.id} card={card} />
      ))}
    </div>
  );
}
