import { FlashCard } from "@/types/constants";
import { KnownledgeLevel } from "@/types/enums";

export const getAllCards = async () => {
  const allCardsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/flash-cards/all`,
    {
      method: "GET",
      mode: "cors",
      cache: "no-store",
      credentials: "include",
    }
  );
  return await allCardsResponse.json() as FlashCard[];
};

export const updateKnowledgeLevel = async (
  initialCard: FlashCard,
  selectedBtn: KnownledgeLevel
) => {
  const cardWithUpdatedKnownProp = { ...initialCard, known: selectedBtn };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/flash-cards/update`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        cardToUpdate: cardWithUpdatedKnownProp,
      }),
      credentials: 'include',
    }
  );
  return response;
};
