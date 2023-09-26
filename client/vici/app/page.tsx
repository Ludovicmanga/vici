import CardsContainer from "@/components/CardsContainer/CardsContainer";
import { FlashCard } from "@/types/constants";

export default async function Home() {
  const allCardsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/flash-cards/all`,
    {
      method: "GET",
      mode: "cors",
      cache: 'no-store',
      credentials: 'include',
    },
  );
  const allCards: FlashCard[] = await allCardsResponse.json();
  
  return (
    <div>
      <CardsContainer cardsList={allCards} />
    </div>
  );
}
