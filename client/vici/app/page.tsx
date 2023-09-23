import CardsContainer from "@/components/CardsContainer/CardsContainer";

export default async function Home() {
  const allCardsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/flash-cards/all`,
    {
      method: "GET",
      mode: "cors",
      cache: 'no-store'
    },
  );
  const allCards: {
    id: number;
    question: string;
    answer: string;
    known: string;
  }[] = await allCardsResponse.json();
  
  
  return (
    <div>
      <CardsContainer cardsList={allCards} />
    </div>
  );
}
